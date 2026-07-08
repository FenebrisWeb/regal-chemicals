import type { PillarItem } from "@/types/ui";
import type { JobOpening } from "@/types/sections";

export const CULTURE_VALUES: PillarItem[] = [
  {
    icon: "trust",
    title: "Ownership Over Instruction",
    description: "We hire people who take responsibility for outcomes, not just tasks, and give them the room to do that.",
  },
  {
    icon: "innovation",
    title: "Learning on the Job",
    description: "Technical training is built into how we work, from product formulation to on-site application support.",
  },
  {
    icon: "customer",
    title: "Close to the Customer",
    description: "Everyone, from sales to production, understands how their work affects the contractor on site.",
  },
  {
    icon: "sustainability",
    title: "Safety Without Shortcuts",
    description: "Safe handling and manufacturing practices are non-negotiable, on the floor and in the field.",
  },
  {
    icon: "growth",
    title: "Room to Grow",
    description: "We promote from within wherever we can, and back that with real training and mentorship.",
  },
];

export const CAREER_BENEFITS: PillarItem[] = [
  {
    icon: "operations",
    title: "Hands-On Technical Exposure",
    description: "Work directly with formulation, quality control, and real project sites, not just a desk role.",
  },
  {
    icon: "quality",
    title: "Structured Onboarding",
    description: "Every new hire gets proper product and process training before being expected to perform independently.",
  },
  {
    icon: "growth",
    title: "Clear Growth Paths",
    description: "Defined progression from entry-level roles into senior technical and management positions.",
  },
  {
    icon: "analytics",
    title: "Performance That Is Recognised",
    description: "Regular reviews and recognition tied to real contribution, not just tenure.",
  },
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    slug: "technical-sales-engineer",
    title: "Technical Sales Engineer",
    department: "Sales",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "2 to 5 years",
    description:
      "Work directly with contractors, architects, and procurement teams to recommend the right Regal system for their project, and support them through specification and application.",
    responsibilities: [
      "Visit project sites to understand application requirements and recommend suitable products",
      "Prepare technical proposals and product comparisons for architects and consultants",
      "Coordinate with the technical team on product performance queries",
      "Maintain relationships with existing distributors and contractors",
    ],
    requirements: [
      "Degree or diploma in Civil Engineering or a related field",
      "Prior experience in construction chemicals or building materials sales preferred",
      "Comfortable with regular site visits and client meetings",
      "Clear communication skills, both written and verbal",
    ],
  },
  {
    slug: "business-development-manager",
    title: "Business Development Manager",
    department: "Sales",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "5 to 8 years",
    description:
      "Lead new market development for Regal's product and system ranges, building distributor and institutional relationships across the region.",
    responsibilities: [
      "Identify and develop new distributor and dealer partnerships",
      "Build relationships with government and institutional procurement teams",
      "Track market trends and competitor activity to inform strategy",
      "Own revenue targets for the assigned territory",
    ],
    requirements: [
      "MBA or equivalent experience in business development",
      "Strong track record in B2B sales, ideally in construction materials",
      "Willingness to travel within the assigned territory",
      "Confident presenting to senior stakeholders and procurement committees",
    ],
  },
  {
    slug: "quality-control-chemist",
    title: "Quality Control Chemist",
    department: "Manufacturing",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "1 to 4 years",
    description:
      "Support batch testing and quality assurance across raw material inspection, in-process checks, and final product release.",
    responsibilities: [
      "Conduct quality checks on incoming raw materials and finished batches",
      "Maintain accurate testing records and batch documentation",
      "Investigate and report on any quality deviations",
      "Support continuous improvement of testing procedures",
    ],
    requirements: [
      "Bachelor's or Master's degree in Chemistry or a related science",
      "Familiarity with laboratory testing equipment and procedures",
      "Attention to detail and accurate record keeping",
      "Prior experience in a manufacturing quality lab preferred",
    ],
  },
  {
    slug: "autocad-designer",
    title: "AutoCAD Designer",
    department: "Technical Services",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "1 to 3 years",
    description:
      "Prepare application drawings and technical layouts to support the sales and technical teams on project specifications.",
    responsibilities: [
      "Prepare detailed application and system layout drawings in AutoCAD",
      "Support technical proposals with accurate visual documentation",
      "Coordinate with site engineers to reflect real project conditions",
      "Maintain a library of standard system drawings for reuse",
    ],
    requirements: [
      "Diploma or degree in Civil or Architectural Engineering",
      "Proficiency in AutoCAD, additional design software is a plus",
      "Good understanding of construction drawings and detailing",
      "Ability to manage multiple drawing requests to deadline",
    ],
  },
  {
    slug: "accountant",
    title: "Accountant",
    department: "Finance",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "2 to 5 years",
    description:
      "Manage day to day accounting operations, including invoicing, reconciliations, and support for statutory compliance.",
    responsibilities: [
      "Handle accounts payable, receivable, and bank reconciliations",
      "Prepare monthly reports for management review",
      "Support statutory filings and audit requirements",
      "Coordinate with sales and procurement on invoicing accuracy",
    ],
    requirements: [
      "Bachelor's degree in Commerce or Accounting, part-qualified CA or CMA is a plus",
      "Working knowledge of accounting software and GST compliance",
      "Strong attention to detail and reconciliation accuracy",
      "Ability to work independently against monthly deadlines",
    ],
  },
  {
    slug: "digital-marketing-intern",
    title: "Digital Marketing Intern",
    department: "Marketing",
    location: "Hyderabad, India",
    type: "Internship",
    experience: "Entry level",
    description:
      "Support the marketing team with content, social media, and website updates across Regal's product and systems ranges.",
    responsibilities: [
      "Assist with content creation for social media and the website",
      "Support basic website updates and product page content",
      "Help track engagement and performance across marketing channels",
      "Coordinate with the design team on visual assets",
    ],
    requirements: [
      "Currently pursuing or recently completed a degree in Marketing, Communications, or a related field",
      "Familiarity with common social media and content tools",
      "Willingness to learn the technical side of the products being marketed",
      "Good written communication skills",
    ],
  },
];
