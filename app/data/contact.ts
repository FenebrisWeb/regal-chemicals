import type { ContactPoint } from "@/types/sections";

export const PHONE_NUMBERS: ContactPoint[] = [
  { label: "Phone", value: "+44 7887 122334", href: "tel:+447887122334" },
];

export const EMAILS: ContactPoint[] = [
  { label: "General Inquiries", value: "info@regalchemicals.co.uk", href: "mailto:info@regalchemicals.co.uk" },
  { label: "Support", value: "support@regalchemicals.co.uk", href: "mailto:support@regalchemicals.co.uk" },
];

export const POSTAL_ADDRESS = {
  company: "Regal Chemicals",
  lines: ["Globe House", "55 Calthorpe Street", "Banbury OX16 5EX", "United Kingdom"],
};
