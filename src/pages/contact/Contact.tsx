import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import Button from "../../components/ui/button/Button";
import "./Contact.scss";

import ContactBg from "../../assets/contact-bg.jpg"; // пример картинки

export default function Contact() {
  const user = useAppSelector((state) => state.auth.user);
  const [comment, setComment] = useState("");
  const [sending, setSending] = useState(false);

  const sendComment = async () => {
    if (!comment.trim()) return;

    if (!user) {
      alert("You must be logged in to post a comment ❌");
      return;
    }

    setSending(true);

    try {
      await fetch("http://localhost:3000/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: comment,
          createdAt: new Date().toISOString(),
          user: {
            id: user.id,
            email: user.email,
          },
        }),
      });

      setComment("");
      alert("Comment saved✅");
    } catch (err) {
      console.error(err);
      alert("Sending failed ❌");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* 🔹 Новый fixed div с картинкой */}
      <div className="ContactBackground">
        <img src={ContactBg} alt="Contact background" />
      </div>

      {/* 🔹 Старые блоки — НЕ ТРОГАЕМ */}
      <div className="ContactWrapper">
        <div className="ContactContainer ContactContainer--info">
          <h2 className="ContactHeader">Get in Touch</h2>
          <p>📞 No.: +37499769898</p>
          <p>
            ✉ Email:
            <a
              className="ContactWrapper_a_gmail"
              href="mailto:ashotg771@gmail.com"
            >
              ashotg771@gmail.com
            </a>
          </p>
          <p>
            💬 Telegram:
            <a
              className="ContactWrapper_a_tg"
              href="https://t.me/IE_YU"
              target="_blank"
              rel="noopener noreferrer"
            >
              @IE_YU
            </a>
          </p>
        </div>

        <div className="ContactContainer ContactContainer--feedback">
          <div className="ContactHeader">Email reply is coming today!</div>

          <textarea
            className="Feedback_input"
            placeholder="Type your message here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <Button variant="primary" onClick={sendComment} disabled={sending}>
            {sending ? "sending..." : "send"}
          </Button>
        </div>
      </div>
    </>
  );
}
