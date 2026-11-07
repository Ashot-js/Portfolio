import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore/lite";

const env = import.meta.env;

const app = initializeApp({
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
});

// App Check: proves requests come from this site, not a bot script. Off until the key is set.
if (env.VITE_RECAPTCHA_SITE_KEY) {
  initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider(env.VITE_RECAPTCHA_SITE_KEY),
    isTokenAutoRefreshEnabled: true,
  });
}

const db = getFirestore(app);

/** Data is validated again server-side by firestore.rules. */
export const saveMessage = (data: { name: string; email: string; message: string }) =>
  addDoc(collection(db, "messages"), { ...data, createdAt: serverTimestamp() });
