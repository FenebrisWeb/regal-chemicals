"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/types/layout";

function isLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Regal's Purpose", href: "/about/purpose" },
      { label: "Our Values & Principles", href: "/about/values-principles" },
      { label: "Regal's Brand", href: "/about/brand" },
      { label: "Our Strategy", href: "/about/strategy" },
      { label: "Our Procurement", href: "/about/procurement" },
      { label: "Operational Efficiency", href: "/about/operational-efficiency" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Anti Corrosion Products", href: "/products/anti-corrosion" },
      { label: "Construction Products", href: "/products/construction" },
      { label: "Floors Products", href: "/products/floors" },
      { label: "Repair and Protect Products", href: "/products/repair-and-protect" },
      { label: "Road Marking Products", href: "/products/road-marking" },
      { label: "Sports Products", href: "/products/sports" },
      { label: "Textures Products", href: "/products/textures" },
      { label: "WaterProofing Products", href: "/products/waterproofing" },
    ],
  },
  {
    label: "Systems",
    href: "/systems",
    children: [
      { label: "Anticorrosion Layer Systems", href: "/systems/anticorrosion-layer" },
      { label: "Construction Layer Systems", href: "/systems/construction-layer" },
      { label: "Floors Layer Systems", href: "/systems/floors-layer" },
      { label: "Repair and Protect Layer Systems", href: "/systems/repair-and-protect-layer" },
      { label: "Road Marking Layer Systems", href: "/systems/road-marking-layer" },
      { label: "Sports Layer Systems", href: "/systems/sports-layer" },
      { label: "Waterproofing Layer Systems", href: "/systems/waterproofing-layer" },
    ],
  },
  {
    label: "Documents",
    href: "/documents",
    children: [
      { label: "Anti Corrosion TDS & MSDS", href: "/documents/anti-corrosion" },
      { label: "Construction TDS & MSDS", href: "/documents/construction" },
      { label: "Floors TDS & MSDS", href: "/documents/floors" },
      { label: "Repair & Protect TDS & MSDS", href: "/documents/repair-and-protect" },
      { label: "Road Marking TDS & MSDS", href: "/documents/road-marking" },
      { label: "Sports TDS & MSDS", href: "/documents/sports" },
      { label: "Textures TDS & MSDS", href: "/documents/textures" },
      { label: "Waterproofing TDS & MSDS", href: "/documents/waterproofing" },
    ],
  },
  { label: "Journal", href: "/journal" },
  {
    label: "Career",
    href: "/career",
    children: [
      { label: "Our Cultures & Values", href: "/career/cultures-and-values" },
      { label: "Available Opportunities", href: "/career/opportunities" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      {/* chemical reaction accent: bubbles rising through the header band */}
      <div className="header-bubbles pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <span className="header-bubble header-bubble-1" />
        <span className="header-bubble header-bubble-2" />
        <span className="header-bubble header-bubble-3" />
        <span className="header-bubble header-bubble-4" />
        <span className="header-bubble header-bubble-5" />
      </div>

      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2.5">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/regal-chemicals-transparent-logo.png"
            alt="Regal Chemicals"
            width={116}
            height={44}
            priority
          />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(pathname, link.href);

              return (
                <li key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-1 rounded-md px-3 py-2 text-[15px] font-semibold transition-colors hover:text-[#2596be] ${
                      active ? "text-[#2596be]" : "text-black"
                    }`}
                  >
                    {link.label}
                    {link.children && (
                      <svg
                        viewBox="0 0 12 8"
                        className="h-2.5 w-2.5 transition-transform duration-200 group-hover:rotate-180"
                        fill="none"
                      >
                        <path
                          d="M1 1.5L6 6.5L11 1.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </Link>

                  {active && (
                    <span className="absolute inset-x-3 -bottom-[1px] h-0.5 rounded-full bg-[#2596be]" />
                  )}

                  {link.children && (
                    <ul className="invisible absolute left-0 top-full z-50 min-w-56 -translate-y-1 rounded-lg border border-black/10 bg-white py-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {link.children.map((child) => {
                        const childActive = isLinkActive(pathname, child.href);

                        return (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              aria-current={childActive ? "page" : undefined}
                              className={`block px-4 py-2 text-sm font-semibold transition-colors hover:bg-[#07245a]/5 hover:text-[#2596be] ${
                                childActive ? "bg-[#07245a]/5 text-[#2596be]" : "text-black"
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="shrink-0 rounded-full border-2 border-[#07245a] px-5 py-2 text-sm font-bold text-[#07245a] transition-colors hover:bg-[#07245a] hover:text-white"
        >
          Contact Now
        </Link>
      </div>

      <style>{`
        .header-bubble {
          position: absolute;
          bottom: -14px;
          border-radius: 9999px;
          background: radial-gradient(circle at 30% 30%, #67e8f9, #2596be);
          opacity: 0.35;
          animation: header-rise linear infinite;
        }
        .header-bubble-1 { left: 8%; width: 6px; height: 6px; animation-duration: 4.5s; animation-delay: 0s; }
        .header-bubble-2 { left: 34%; width: 4px; height: 4px; animation-duration: 5.5s; animation-delay: 1.2s; }
        .header-bubble-3 { left: 58%; width: 7px; height: 7px; animation-duration: 5s; animation-delay: 0.4s; }
        .header-bubble-4 { left: 76%; width: 5px; height: 5px; animation-duration: 6s; animation-delay: 2s; }
        .header-bubble-5 { left: 92%; width: 4px; height: 4px; animation-duration: 4.8s; animation-delay: 0.8s; }

        @keyframes header-rise {
          0% { transform: translateY(0); opacity: 0; }
          15% { opacity: 0.35; }
          100% { transform: translateY(-70px); opacity: 0; }
        }
      `}</style>
    </header>
  );
}
