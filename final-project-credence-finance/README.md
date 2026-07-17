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
- In development, Vite proxies `/api/*` requests to `http://localhost:5000`.
