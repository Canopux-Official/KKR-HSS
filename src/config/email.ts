import { siteConfig } from "@/config/site";

/** Inbox that receives website contact and admission enquiries */
export const enquiryRecipientEmail =
  process.env.ENQUIRY_TO_EMAIL ?? siteConfig.email;
