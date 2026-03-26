const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { defineSecret } = require("firebase-functions/params");
const { initializeApp } = require("firebase-admin/app");
const nodemailer = require("nodemailer");

initializeApp();

const SMTP_USER = defineSecret("SMTP_USER");
const SMTP_PASS = defineSecret("SMTP_PASS");

exports.sendEmailOnNewComment = onDocumentCreated(
  {
    document: "comments/{commentId}",
    region: "us-central1",
    secrets: [SMTP_USER, SMTP_PASS],
  },
  async (event) => {
    const snapshot = event.data;
    if (!snapshot) return;

    const data = snapshot.data() || {};
    const text = data.text || "";
    const userEmail = data.user?.email || "unknown";
    const userId = data.user?.id || "unknown";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_USER.value(),
        pass: SMTP_PASS.value(),
      },
    });

    await transporter.sendMail({
      from: SMTP_USER.value(),
      to: "ashotg771@gmail.com",
      subject: "New comment from portfolio",
      text: `New comment created\n\nUser: ${userEmail}\nUser ID: ${userId}\nComment: ${text}`,
    });
  }
);
