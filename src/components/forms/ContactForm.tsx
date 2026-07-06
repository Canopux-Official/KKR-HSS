"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { submitEnquiry } from "@/lib/forms/submit-enquiry";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Label } from "./Label";
import { FormGroup, FieldError } from "./FormGroup";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};

    if (!data.get("name")) newErrors.name = "Please enter your name.";
    if (!data.get("email")) newErrors.email = "Please enter your email address.";
    if (!data.get("message")) newErrors.message = "Please enter your message.";

    const email = data.get("email") as string;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitError("");
    setIsSubmitting(true);

    try {
      await submitEnquiry({
        type: "contact",
        name: String(data.get("name") ?? "").trim(),
        email: String(data.get("email") ?? "").trim(),
        phone: String(data.get("phone") ?? "").trim() || undefined,
        subject: String(data.get("subject") ?? "").trim() || undefined,
        message: String(data.get("message") ?? "").trim(),
      });
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We could not send your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        className="py-8 border border-border bg-surface-muted p-8 max-w-prose"
        role="status"
        aria-live="polite"
      >
        <Text variant="body-lg" className="font-medium text-ink">
          Thank you for your message.
        </Text>
        <Text variant="body" muted className="mt-4">
          Your enquiry has been received. The school office will respond during working hours.
        </Text>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-prose-wide space-y-6">
      <FormGroup>
        <Label htmlFor="contact-name" required>Full name</Label>
        <Input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          hasError={!!errors.name}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          aria-invalid={!!errors.name}
        />
        <FieldError id="contact-name-error" message={errors.name} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="contact-email" required>Email address</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          hasError={!!errors.email}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          aria-invalid={!!errors.email}
        />
        <FieldError id="contact-email-error" message={errors.email} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="contact-phone">Phone number</Label>
        <Input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="contact-subject">Subject</Label>
        <Input id="contact-subject" name="subject" type="text" />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="contact-message" required>Message</Label>
        <Textarea
          id="contact-message"
          name="message"
          rows={5}
          hasError={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          aria-invalid={!!errors.message}
        />
        <FieldError id="contact-message-error" message={errors.message} />
      </FormGroup>

      {submitError ? (
        <p className="font-body text-body-sm text-error" role="alert">
          {submitError}
        </p>
      ) : null}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
