import { useState } from "react";
import Button from "../../components/ui/button/Button";
import { saveMessage } from "../../services/messages";
import { PROFILE, displayUrl } from "../../data/profile";
import "./Contact.scss";

const CONTACTS = [
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { label: "Location", value: PROFILE.location },
  { label: "GitHub", value: displayUrl(PROFILE.github), href: PROFILE.github },
  { label: "LinkedIn", value: displayUrl(PROFILE.linkedin), href: PROFILE.linkedin },
];

const STATUS_TEXT = {
  idle: "",
  sending: "",
  sent: "Message sent! I'll reply soon.",
  error: "Failed to send. Please email me directly.",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<keyof typeof STATUS_TEXT>("idle");

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };
    if (!data.name || !data.email || !data.message) return;

    // Honeypot: real users never see this field, bots fill it. Pretend success.
    const isBot = new FormData(e.currentTarget).get("website");

    setStatus("sending");
    try {
      if (!isBot) await saveMessage(data);
      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
    } catch {
      setStatus("error");
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
            name="name"
            placeholder="Your name"
            aria-label="Your name"
            autoComplete="name"
            maxLength={100}
            value={form.name}
            required
            onChange={update}
          />

          <input
            name="email"
            type="email"
            placeholder="Your email"
            aria-label="Your email"
            autoComplete="email"
            maxLength={254}
            value={form.email}
            required
            onChange={update}
          />

          <textarea
            name="message"
            placeholder="Your message..."
            aria-label="Your message"
            maxLength={1000}
            value={form.message}
            required
            onChange={update}
          />

          <input name="website" className="ContactForm_hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <Button variant="primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </Button>

          <p className={`ContactForm_status ContactForm_status--${status}`} role="status">
            {STATUS_TEXT[status]}
          </p>
        </form>

        <div className="ContactInfo">
          <h2 className="ContactInfo_heading">Contact Info</h2>

          {CONTACTS.map(({ label, value, href }) => (
            <div key={label} className="ContactInfo_item">
              <span className="ContactInfo_label">{label}</span>
              {href ? (
                <a href={href} {...(href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}>
                  {value}
                </a>
              ) : (
                <span>{value}</span>
              )}
            </div>
          ))}

          <p className="ContactInfo_hint">
            Fast replies &middot; Open to collaboration &middot; Freelance friendly
          </p>
        </div>
      </div>
    </div>
  );
}
