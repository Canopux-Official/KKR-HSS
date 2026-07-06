import { NextResponse } from "next/server";

import {
  sendEnquiryEmail,
  type EnquiryPayload,
  type EnquiryType,
} from "@/lib/email/send-enquiry";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isEnquiryType(value: unknown): value is EnquiryType {
  return value === "contact" || value === "admission";
}

function validatePayload(body: unknown): EnquiryPayload | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;
  const type = data.type;
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";

  if (!isEnquiryType(type) || !name || !email || !EMAIL_PATTERN.test(email)) {
    return null;
  }

  const payload: EnquiryPayload = {
    type,
    name,
    email,
    phone: typeof data.phone === "string" ? data.phone.trim() : undefined,
    subject: typeof data.subject === "string" ? data.subject.trim() : undefined,
    message: typeof data.message === "string" ? data.message.trim() : undefined,
    stream: typeof data.stream === "string" ? data.stream.trim() : undefined,
  };

  if (type === "contact" && !payload.message) return null;
  if (type === "admission" && !payload.stream) return null;

  return payload;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = validatePayload(body);

    if (!payload) {
      return NextResponse.json(
        { error: "Please check the form and try again." },
        { status: 400 }
      );
    }

    await sendEnquiryEmail(payload);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Enquiry email failed:", error);

    return NextResponse.json(
      {
        error:
          "We could not send your enquiry right now. Please call the school office or try again later.",
      },
      { status: 500 }
    );
  }
}
