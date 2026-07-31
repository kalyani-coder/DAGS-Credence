# CITS Website (React + Vite)

## Run from scratch

1. Install dependencies:

```bash
npm install
```

2. Create an environment file:

```bash
copy .env.example .env
```

3. Fill your SMTP values in `.env`:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`

4. Start backend API (email sender):

```bash
npm run server
```

5. In another terminal, start frontend:

```bash
npm run dev
```

6. Open the Vite URL and test `Contact Us`.

## Notes

- Contact form submits to `/api/contact` and sends mail to `info@citspartners.com`.
- In development, Vite proxies `/api/*` requests to `http://localhost:5001`.

## Deploy on Render (Web Service)

Use **one** Web Service so the site and `/api` share the same URL.

| Setting | Value |
|--------|--------|
| Root Directory | `final-project-credence-finance` |
| Build Command | `npm install --include=dev && npm run build` |
| Start Command | `npm start` |

Environment variables (Dashboard → Environment):

- `CONTACT_TO`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`

`PORT` is set by Render automatically. After deploy, open the Render URL and test Contact Us (same origin `/api/contact`).
