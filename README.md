# Portfolio — Ashot Grigoryan

Personal portfolio site: home, about (EN / RU / AM), projects and a contact form.

**Stack:** React 19, TypeScript, React Router 7, SCSS, Vite, Firebase (Hosting + Firestore).

## Run locally

```bash
npm install
cp .env.example .env   # Firebase web config + reCAPTCHA site key
npm run dev
```

## Scripts

| Command           | What it does                     |
| ----------------- | -------------------------------- |
| `npm run dev`     | dev server with hot reload       |
| `npm run build`   | type-check and production build  |
| `npm run lint`    | ESLint                           |
| `npm run preview` | serve the production build       |

## Structure

```
src/
  app/router.tsx        routes (pages are lazy-loaded)
  components/           navbar, footer, layout, button, site age
  data/                 profile, projects, About texts/timeline
  pages/                home, About, projects, contact, error
  services/messages.ts  Firebase init + App Check, saves contact messages
```

## Contact form security

Messages go to the Firestore `messages` collection. `firestore.rules` only
allows creating a message with exactly the fields `name`, `email`, `message`,
`createdAt` (length limits, email format, server timestamp); nobody can read,
edit or delete messages from the browser. Read them in the Firebase console.

Extra protection: a hidden honeypot field (bots fill it, the message is dropped),
App Check with reCAPTCHA Enterprise (`VITE_RECAPTCHA_SITE_KEY`), and security
headers (CSP, X-Frame-Options, nosniff) in `firebase.json`.

## Deploy (free Spark plan)

```bash
npm run build
npx firebase deploy --only hosting,firestore:rules
```
