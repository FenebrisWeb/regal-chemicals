import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import Reveal from "@/app/components/ui/reveal";
import { EMAILS, POSTAL_ADDRESS } from "@/app/data/contact";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "The terms and conditions governing use of the Regal Chemicals website and services.",
};

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using this website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use this website.",
  },
  {
    title: "Use of This Website",
    body: "This website and its content are provided for general information about Regal Chemicals' products, systems, and services. You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use of, this site by any third party.",
  },
  {
    title: "Product Information",
    body: "Product descriptions, specifications, and technical data provided on this website are for general guidance only. Formulations, availability, and specifications may change without notice. Please contact our technical team to confirm current specifications and suitability for your specific project before use.",
  },
  {
    title: "Enquiries and Quotations",
    body: "Submitting an enquiry or contact form through this website does not constitute a binding order or contract. All orders, pricing, and delivery terms are subject to separate confirmation and agreement with our sales team.",
  },
  {
    title: "Intellectual Property",
    body: "All content on this website, including text, graphics, logos, and images, is the property of Regal Chemicals or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use this content without prior written permission.",
  },
  {
    title: "Limitation of Liability",
    body: "Regal Chemicals makes reasonable efforts to ensure the accuracy of information on this website but does not warrant that the content is complete, accurate, or up to date. Regal Chemicals shall not be liable for any loss or damage arising from the use of, or reliance on, this website.",
  },
  {
    title: "Third Party Links",
    body: "This website may contain links to third party websites. We are not responsible for the content, accuracy, or practices of any third party website linked to or from our site.",
  },
  {
    title: "Changes to These Terms",
    body: "We may revise these Terms and Conditions at any time. Updated terms will be posted on this page, and continued use of the website following any changes constitutes acceptance of the revised terms.",
  },
  {
    title: "Governing Law",
    body: "These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales, and any disputes arising will be subject to the exclusive jurisdiction of the courts of England and Wales.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms and Conditions"
        description="Please read these terms carefully before using the Regal Chemicals website."
      />

      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6">
          {SECTIONS.map((section, index) => (
            <Reveal key={section.title} delayMs={index * 60}>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-black">{section.title}</h2>
                <p className="text-sm font-medium leading-relaxed text-black/80">{section.body}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delayMs={SECTIONS.length * 60}>
            <div className="flex flex-col gap-2 rounded-2xl bg-black/[0.03] p-6">
              <h2 className="text-xl font-bold text-black">Contact Us</h2>
              <p className="text-sm font-medium text-black/80">
                If you have any questions about these Terms and Conditions, please contact us at{" "}
                <a href={EMAILS[0].href} className="font-bold text-[#2596be]">
                  {EMAILS[0].value}
                </a>{" "}
                or write to us at:
              </p>
              <address className="text-sm font-medium not-italic text-black/80">
                {POSTAL_ADDRESS.company}
                <br />
                {POSTAL_ADDRESS.lines.join(", ")}
              </address>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
