import type { EnquiryPayload } from "@/lib/email/send-enquiry";

export async function submitEnquiry(payload: EnquiryPayload) {
  const response = await fetch("/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => ({}))) as { error?: string };

  if (!response.ok) {
    throw new Error(data.error ?? "Failed to send enquiry.");
  }
}
