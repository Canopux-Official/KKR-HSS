import nodemailer from "nodemailer";

import { enquiryRecipientEmail } from "@/config/email";

export type EnquiryType = "contact" | "admission";

export interface EnquiryPayload {
  type: EnquiryType;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
  stream?: string;
}

function getStreamLabel(stream?: string) {
  if (stream === "arts") return "Arts";
  if (stream === "undecided") return "Not yet decided";
  return stream ?? "—";
}

function buildEmailContent(payload: EnquiryPayload) {
  const lines = [
    `Type: ${payload.type === "admission" ? "Admission enquiry" : "Contact form"}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone?.trim() || "—"}`,
  ];

  if (payload.type === "contact") {
    lines.push(`Subject: ${payload.subject?.trim() || "—"}`);
  }

  if (payload.type === "admission") {
    lines.push(`Stream: ${getStreamLabel(payload.stream)}`);
  }

  lines.push("", "Message:", payload.message?.trim() || "—");

  const text = lines.join("\n");
  const html = lines
    .map((line) => `<p style="margin:0 0 8px">${line.replace(/</g, "&lt;")}</p>`)
    .join("");

  const subject =
    payload.type === "admission"
      ? `Admission enquiry — ${payload.name}`
      : `Website enquiry — ${payload.subject?.trim() || payload.name}`;

  return { subject, text, html };
}

export async function sendEnquiryEmail(payload: EnquiryPayload) {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    throw new Error(
      "Email is not configured. Set SMTP_USER and SMTP_PASS in the server environment."
    );
  }

  const { subject, text, html } = buildEmailContent(payload);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: `"KKR Mahila H.S. School" <${smtpUser}>`,
    to: enquiryRecipientEmail,
    replyTo: payload.email,
    subject,
    text,
    html,
  });
}
