import { useState } from "react";
import { toast } from "react-toastify";
import { useAppSelector } from "../../app/hooks";
import Button from "../../components/ui/button/Button";
import { saveComment } from "../../services/comments";
import "./Contact.scss";

import ContactBg from "../../assets/contact-bg.jpg"; // пример картинки

export default function Contact() {
  const user = useAppSelector((state) => state.auth.user);
  const [comment, setComment] = useState("");
  const [sending, setSending] = useState(false);

  const sendComment = async () => {
    if (!comment.trim()) return;

    if (!user) {
      toast.error("You must be logged in to post a comment");
      return;
    }

    setSending(true);

    try {
      await saveComment(comment, { id: user.id, email: user.email });

      setComment("");

    } catch (err) {
      console.error(err);
      toast.error("Sending failed");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <div className="ContactBackground">
        <img src={ContactBg} alt="Contact background" />
      </div>

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
        </div>
        <div className="ContactContainer ContactContainer--extra">
          <h2 className="ContactHeader">More ways to connect</h2>

          <p>
            🌍 Location:
            <span className="ContactText"> Armenia, Yerevan</span>
          </p>

          <p>
            💼 GitHub:
            <a
              className="ContactWrapper_a_github"
              href="https://github.com/Ashot-js/Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Ashot-js/Portfolio
            </a>
          </p>

          <p className="ContactHint">
            Fast replies • Open to collaboration • Freelance friendly
          </p>
        </div>

        <div className="ContactContainer ContactContainer--feedback">
          <div className="ContactHeader">Email reply is coming today!</div>

          <textarea
            className="Feedback_input"
            placeholder="Type your message here..."
            value={comment}
            minLength={1}
            maxLength={500}
            onChange={(e) => setComment(e.target.value)}
          />

          <Button variant="comment" onClick={sendComment} disabled={sending}>
            {sending ? "sending..." : "send"}
          </Button>
        </div>
      </div>
    </>
  );
}
