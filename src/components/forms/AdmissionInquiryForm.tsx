"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { submitEnquiry } from "@/lib/forms/submit-enquiry";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Select } from "./Select";
import { Label } from "./Label";
import { FormGroup, FieldError } from "./FormGroup";

export function AdmissionInquiryForm() {
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
    if (!data.get("stream")) newErrors.stream = "Please select a stream of interest.";

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
        type: "admission",
        name: String(data.get("name") ?? "").trim(),
        email: String(data.get("email") ?? "").trim(),
        phone: String(data.get("phone") ?? "").trim() || undefined,
        stream: String(data.get("stream") ?? "").trim(),
        message: String(data.get("message") ?? "").trim() || undefined,
      });
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We could not send your enquiry. Please try again."
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
          Thank you for your enquiry.
        </Text>
        <Text variant="body" muted className="mt-4">
          We have received your admission enquiry. The school office will respond during working hours.
        </Text>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-prose-wide space-y-6">
      <FormGroup>
        <Label htmlFor="inquiry-name" required>Student / guardian name</Label>
        <Input
          id="inquiry-name"
          name="name"
          type="text"
          autoComplete="name"
          hasError={!!errors.name}
          aria-invalid={!!errors.name}
        />
        <FieldError id="inquiry-name-error" message={errors.name} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="inquiry-email" required>Email address</Label>
        <Input
          id="inquiry-email"
          name="email"
          type="email"
          autoComplete="email"
          hasError={!!errors.email}
          aria-invalid={!!errors.email}
        />
        <FieldError id="inquiry-email-error" message={errors.email} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="inquiry-phone">Phone number</Label>
        <Input id="inquiry-phone" name="phone" type="tel" autoComplete="tel" />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="inquiry-stream" required>Stream of interest</Label>
        <Select
          id="inquiry-stream"
          name="stream"
          defaultValue=""
          hasError={!!errors.stream}
          aria-invalid={!!errors.stream}
        >
          <option value="" disabled>Select stream</option>
          <option value="arts">Arts</option>
          <option value="undecided">Not yet decided</option>
        </Select>
        <FieldError id="inquiry-stream-error" message={errors.stream} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="inquiry-message">Your questions</Label>
        <Textarea id="inquiry-message" name="message" rows={4} placeholder="Any specific questions about admission..." />
      </FormGroup>

      {submitError ? (
        <p className="font-body text-body-sm text-error" role="alert">
          {submitError}
        </p>
      ) : null}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit enquiry"}
      </Button>
    </form>
  );
}
