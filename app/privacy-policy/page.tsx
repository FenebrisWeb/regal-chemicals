import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import Reveal from "@/app/components/ui/reveal";
import { EMAILS, POSTAL_ADDRESS } from "@/app/data/contact";

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy",
  description: "How Regal Chemicals collects, uses, and protects your information.",
};

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly to us, such as your name, email address, phone number, and company details when you submit an enquiry, request a quote, or contact our team through this website. We also automatically collect certain technical information, including your IP address, browser type, and pages visited, through cookies and similar technologies.",
  },
  {
    title: "How We Use Your Information",
    body: "We use the information we collect to respond to enquiries, provide product and technical support, process tender or documentation requests, improve our website and services, and communicate updates relevant to your account or request. We do not sell your personal information to third parties.",
  },
  {
    title: "Cookies",
    body: "This website uses cookies to remember your preferences, understand how visitors use our site, and improve overall performance. You can control or disable cookies through your browser settings, though some parts of the site may not function as intended if cookies are disabled.",
  },
  {
    title: "Data Sharing",
    body: "We may share your information with trusted service providers who assist us in operating our website and conducting our business, such as hosting and analytics providers, provided they agree to keep this information confidential. We may also disclose information when required by law.",
  },
  {
    title: "Data Retention & Security",
    body: "We retain personal information only as long as necessary to fulfil the purposes outlined in this policy or as required by law. We take reasonable technical and organisational measures to protect your information against unauthorised access, loss, or misuse.",
  },
  {
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of the personal information we hold about you at any time by contacting us using the details below.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this policy from time to time to reflect changes in our practices or for legal reasons. Any updates will be posted on this page with a revised effective date.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy & Cookie Policy"
        description="This policy explains how Regal Chemicals collects, uses, and protects your personal information."
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
                If you have any questions about this Privacy & Cookie Policy, please contact us at{" "}
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
