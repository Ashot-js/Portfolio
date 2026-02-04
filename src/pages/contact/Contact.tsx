import { useState } from "react";
import { useAppSelector } from "../../app/hooks"; // Redux selector для пользователя
import Button from "../../components/ui/button/Button";
import "./Contact.scss";

export default function Contact() {
  const user = useAppSelector((state) => state.auth.user); // текущий пользователь
  const [comment, setComment] = useState("");
  const [sending, setSending] = useState(false);

  const sendComment = async () => {
    if (!comment.trim()) return;

    if (!user) {
      alert("Вы должны быть залогинены, чтобы отправить комментарий ❌");
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
      alert("Комментарий сохранён ✅");
    } catch (err) {
      console.error(err);
      alert("Ошибка при сохранении ❌");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="ContactWrapper">
      {/* Информация */}
      <div className="ContactContainer ContactContainer--info">
        <h2 className="ContactHeader">Contact me</h2>
        <p>📞 No.: +37499769898</p>
        <p>
          ✉ Email:{" "}
          <a
            className="ContactWrapper_a_gmail"
            href={`mailto:${"ashotg771" + "@gmail.com"}`}
          >
            ashotg771@gmail.com
          </a>
        </p>
        <p>
          💬 Telegram:{" "}
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

      {/* Форма обратной связи */}
      <div className="ContactContainer ContactContainer--feedback">
        <div className="ContactHeader">
          We'll get back to your email address sometime today.
        </div>

        <textarea
          className="Feedback_input"
          placeholder="Type your message here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <Button variant="primary" onClick={sendComment} disabled={sending}>
          {sending ? "Отправка..." : "Отправить"}
        </Button>
      </div>
    </div>
  );
}
