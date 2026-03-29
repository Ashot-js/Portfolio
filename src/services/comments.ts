import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../configs/firebase";

interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export const saveMessage = async (data: ContactMessage) => {
  const trimmed = data.message.trim();
  if (!trimmed) return;

  await addDoc(collection(db, "messages"), {
    name: data.name.trim(),
    email: data.email.trim(),
    message: trimmed,
    createdAt: serverTimestamp(),
  });
};
