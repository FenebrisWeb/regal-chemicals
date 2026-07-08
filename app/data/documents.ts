import type { PillarItem } from "@/types/ui";

export const DOCUMENT_TYPES: PillarItem[] = [
  {
    icon: "quality",
    title: "Technical Data Sheet (TDS)",
    description: "Composition, application method, coverage rate, curing time, and performance specifications for each product.",
  },
  {
    icon: "trust",
    title: "Material Safety Data Sheet (MSDS)",
    description: "Handling, storage, and safety information needed for site safety compliance and tender submissions.",
  },
  {
    icon: "analytics",
    title: "Test and Compliance Reports",
    description: "Batch testing records and compliance references that support verification during evaluation.",
  },
  {
    icon: "operations",
    title: "Application Guidelines",
    description: "Surface preparation and application steps written for consistent results on site.",
  },
];

export const REQUEST_STEPS: PillarItem[] = [
  {
    icon: "customer",
    title: "Tell Us What You Need",
    description: "Share the product name or system, and let us know if the request is for a tender, project file, or site team.",
  },
  {
    icon: "operations",
    title: "Our Team Prepares the Set",
    description: "We compile the current TDS, MSDS, and any supporting compliance documents for the exact products you need.",
  },
  {
    icon: "growth",
    title: "Documents Delivered to You",
    description: "Sent by email in a format ready for submission, filing, or sharing with your project consultant.",
  },
];

export const TENDER_PILLARS: PillarItem[] = [
  {
    icon: "trust",
    title: "Consistent, Verifiable Information",
    description: "Every data sheet reflects the same formulation used in production, so what is submitted matches what is supplied.",
  },
  {
    icon: "quality",
    title: "Kept Current",
    description: "Documentation is reviewed and updated whenever a formulation or packaging detail changes.",
  },
  {
    icon: "operations",
    title: "Responsive Documentation Support",
    description: "Our technical team responds directly to procurement and tender queries, not just a general inbox.",
  },
];
