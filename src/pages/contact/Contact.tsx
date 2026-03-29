import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../../components/ui/button/Button";
import { saveMessage } from "../../services/comments";
import "./Contact.scss";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !name.trim() || !email.trim()) return;

    setSending(true);

    try {
      await saveMessage({ name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent! I'll reply soon.");
    } catch {
      toast.error("Failed to send. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="ContactPage">
      <div className="ContactPage_header">
        <h1 className="ContactPage_title">Get in Touch</h1>
        <p className="ContactPage_subtitle">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>
      </div>

      <div className="ContactPage_grid">
        <form className="ContactForm" onSubmit={handleSubmit}>
          <h2 className="ContactForm_heading">Send a Message</h2>

          <input
            type="text"
            placeholder="Your name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Your message..."
            value={message}
            required
            minLength={1}
            maxLength={1000}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button variant="primary" type="submit" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </Button>
        </form>

        <div className="ContactInfo">
          <h2 className="ContactInfo_heading">Contact Info</h2>

          <div className="ContactInfo_item">
            <span className="ContactInfo_label">Email</span>
            <a href="mailto:ashotg771@gmail.com">ashotg771@gmail.com</a>
          </div>

          <div className="ContactInfo_item">
            <span className="ContactInfo_label">Phone</span>
            <a href="tel:+37499769898">+374 99 769 898</a>
          </div>

          <div className="ContactInfo_item">
            <span className="ContactInfo_label">Location</span>
            <span>Yerevan, Armenia</span>
          </div>

          <div className="ContactInfo_item">
            <span className="ContactInfo_label">GitHub</span>
            <a href="https://github.com/Ashot-js" target="_blank" rel="noreferrer">
              github.com/Ashot-js
            </a>
          </div>

          <p className="ContactInfo_hint">
            Fast replies &middot; Open to collaboration &middot; Freelance friendly
          </p>
        </div>
      </div>
    </div>
  );
}
