import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../configs/firebase";

interface CommentAuthor {
  id: number | string;
  email: string;
}

export const saveComment = async (text: string, user: CommentAuthor) => {
  const trimmedText = text.trim();
  if (!trimmedText) return;

  await addDoc(collection(db, "comments"), {
    text: trimmedText,
    createdAt: serverTimestamp(),
    user: {
      id: user.id,
      email: user.email,
    },
  });
};
