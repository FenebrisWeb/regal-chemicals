import type { ContactPoint } from "@/types/sections";

export const PHONE_NUMBERS: ContactPoint[] = [
  { label: "Phone", value: "+91 88850 99551", href: "tel:+918885099551" },
  { label: "Phone", value: "+91 92463 99551", href: "tel:+919246399551" },
  { label: "Phone", value: "+91 90304 32769", href: "tel:+919030432769" },
];

export const EMAIL: ContactPoint = {
  label: "Email",
  value: "info@regalchemicals.co.uk",
  href: "mailto:info@regalchemicals.co.uk",
};

export const POSTAL_ADDRESS = {
  company: "Regal Chemicals",
  lines: ["2nd Floor, Fairmount Fortune One", "212, Sanath Nagar", "Hyderabad, Telangana 500018", "India"],
};
