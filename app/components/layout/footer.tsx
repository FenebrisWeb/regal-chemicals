import Link from "next/link";
import Image from "next/image";
import { PRODUCT_SYSTEMS } from "@/app/data/systems";
import { PHONE_NUMBERS, EMAILS, POSTAL_ADDRESS } from "@/app/data/contact";

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "X", href: "https://x.com" },
];

const LEGAL_LINKS = [
  { label: "Sitemap", href: "/sitemap" },
  { label: "Privacy & Cookie Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-[#07245a] text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link href="/" className="w-fit rounded-lg bg-white px-4 py-2">
            <Image
              src="/regal-chemicals-transparent-logo.png"
              alt="Regal Chemicals"
              width={140}
              height={56}
            />
          </Link>

          <div>
            <p className="text-sm font-bold text-white">{POSTAL_ADDRESS.company}</p>
            <address className="mt-1 text-sm font-medium not-italic text-white">
              {POSTAL_ADDRESS.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <ul className="flex gap-4">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-white hover:text-[#2596be]"
                >
                  {social.label[0]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#2596be]">Contact</h3>
          <p className="text-sm font-bold text-white">{POSTAL_ADDRESS.company}</p>
          <ul className="flex flex-col gap-1">
            {EMAILS.map((email) => (
              <li key={email.value}>
                <a href={email.href} className="text-sm font-medium text-white hover:text-[#2596be]">
                  {email.value}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-1">
            {PHONE_NUMBERS.map((phone) => (
              <li key={phone.value}>
                <a href={phone.href} className="text-sm font-medium text-white hover:text-[#2596be]">
                  {phone.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#2596be]">Our Products</h3>
          <ul className="flex flex-col gap-2">
            {PRODUCT_SYSTEMS.map((system) => (
              <li key={system.slug}>
                <Link
                  href={system.productsHref}
                  className="text-sm font-medium text-white hover:text-[#2596be]"
                >
                  {system.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#2596be]">Systems</h3>
          <ul className="flex flex-col gap-2">
            {PRODUCT_SYSTEMS.map((system) => (
              <li key={system.slug}>
                <Link
                  href={system.systemsHref}
                  className="text-sm font-medium text-white hover:text-[#2596be]"
                >
                  {system.name} Systems
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-white">
            &copy; {year} Regal Chemicals. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm font-medium text-white hover:text-[#2596be]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
