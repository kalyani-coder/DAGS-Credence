import cors from "cors";
import dns from "dns";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "..", ".env") });

// ISP/system DNS on this network often fails; use public resolvers + IPv4.
dns.setServers(["8.8.8.8", "1.1.1.1"]);
dns.setDefaultResultOrder("ipv4first");

const env = (key) => process.env[key]?.trim() || "";

const app = express();
const PORT = env("PORT") || 5001;
const CONTACT_TO = env("CONTACT_TO") || env("SMTP_FROM") || env("SMTP_USER");

app.use(cors());
app.use(express.json());

const resolveSmtpHost = async (hostname) => {
  try {
    const addresses = await dns.promises.resolve4(hostname);
    if (addresses?.[0]) return addresses[0];
  } catch {
    // Fall through to system lookup.
  }

  const result = await dns.promises.lookup(hostname, { family: 4 });
  return result.address;
};

const createTransporter = async () => {
  const SMTP_HOST = env("SMTP_HOST");
  const SMTP_PORT = env("SMTP_PORT");
  const SMTP_USER = env("SMTP_USER");
  const SMTP_PASS = env("SMTP_PASS");

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP environment variables are not configured.");
  }

  const port = Number(SMTP_PORT);
  const resolvedHost = await resolveSmtpHost(SMTP_HOST);

  return nodemailer.createTransport({
    host: resolvedHost,
    port,
    secure: port === 465,
    requireTLS: port === 587,
    name: SMTP_HOST,
    family: 4,
    tls: {
      servername: SMTP_HOST,
    },
    connectionTimeout: 20000,
    greetingTimeout: 20000,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
};

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body || {};

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required.",
      });
    }

    if (!CONTACT_TO) {
      throw new Error("CONTACT_TO is not configured.");
    }

    const transporter = await createTransporter();
    const fromAddress = env("SMTP_FROM") || env("SMTP_USER");

    await transporter.sendMail({
      from: fromAddress,
      to: CONTACT_TO,
      replyTo: email,
      subject: `Website contact form: ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "N/A"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return res.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Unable to send message right now.",
    });
  }
});

app.post("/api/newsletter", async (req, res) => {
  try {
    const { name, email, phone } = req.body || {};

    if (!name?.trim() || !email?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required.",
      });
    }

    if (!CONTACT_TO) {
      throw new Error("CONTACT_TO is not configured.");
    }

    const transporter = await createTransporter();
    const fromAddress = env("SMTP_FROM") || env("SMTP_USER");

    await transporter.sendMail({
      from: fromAddress,
      to: CONTACT_TO,
      replyTo: email,
      subject: `Newsletter subscription: ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "N/A"}`,
        "",
        "Source: Website newsletter popup",
      ].join("\n"),
    });

    return res.json({ success: true });
  } catch (error) {
    console.error("Newsletter form error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Unable to subscribe right now.",
    });
  }
});

// Production (Render): serve the Vite build so /api and the site share one origin.
const distPath = path.join(__dirname, "..", "dist");
app.use(express.static(distPath));
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) {
    return next();
  }
  res.sendFile(path.join(distPath, "index.html"), (err) => {
    if (err) next();
  });
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
