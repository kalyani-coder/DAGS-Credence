import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "..", ".env") });

const env = (key) => process.env[key]?.trim() || "";

const app = express();
const PORT = env("PORT") || 5001;
const CONTACT_TO = env("CONTACT_TO") || env("SMTP_FROM") || env("SMTP_USER");

app.use(cors());
app.use(express.json());

const createTransporter = () => {
  const SMTP_HOST = env("SMTP_HOST");
  const SMTP_PORT = env("SMTP_PORT");
  const SMTP_USER = env("SMTP_USER");
  const SMTP_PASS = env("SMTP_PASS");

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP environment variables are not configured.");
  }

  const port = Number(SMTP_PORT);

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    requireTLS: port === 587,
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

    const transporter = createTransporter();
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

    const transporter = createTransporter();
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

app.listen(PORT, () => {
  console.log(`Contact API running on http://localhost:${PORT}`);
});
