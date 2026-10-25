# Portfolio — Ashot Grigoryan

Personal portfolio site: home, about (EN / RU / AM), projects and a contact form.

**Stack:** React 19, TypeScript, React Router 7, SCSS, Vite, Firebase (Hosting + Firestore).

## Run locally

```bash
npm install
cp .env.example .env   # fill in the Firebase web config
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
  pages/                home, About, projects, contact, error
  services/comments.ts  saves contact-form messages to Firestore
  configs/firebase.ts   Firebase init from VITE_FIREBASE_* env vars
  types/                shared types and About texts
```

## Contact form security

Messages go to the Firestore `messages` collection. `firestore.rules` only
allows creating a message with exactly the fields `name`, `email`, `message`,
`createdAt` (length limits, email format, server timestamp); nobody can read,
edit or delete messages from the browser. Read them in the Firebase console.

## Deploy (free Spark plan)

```bash
npm run build
npx firebase deploy --only hosting,firestore:rules
```
