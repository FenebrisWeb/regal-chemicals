import type { ContactPoint } from "@/types/sections";

// Demo placeholder data, to be replaced with real contact details later.
export const PHONE_NUMBERS: ContactPoint[] = [
  { label: "Phone", value: "+1 555 010 2020", href: "tel:+15550102020" },
  { label: "Phone", value: "+1 555 010 2021", href: "tel:+15550102021" },
];

export const EMAILS: ContactPoint[] = [
  { label: "General Inquiries", value: "info@regalchemicals.co.uk", href: "mailto:info@regalchemicals.co.uk" },
  { label: "Support", value: "support@regalchemicals.co.uk", href: "mailto:support@regalchemicals.co.uk" },
];

export const POSTAL_ADDRESS = {
  company: "Regal Chemicals",
  lines: ["123 Demo Business Park", "Suite 400", "Springfield, ST 12345", "United States"],
};
