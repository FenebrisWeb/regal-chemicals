"use client";

import { useState } from "react";

interface ShareLinksProps {
  title: string;
}

export default function ShareLinks({ title }: ShareLinksProps) {
  const [copied, setCopied] = useState(false);

  function getUrl() {
    return typeof window !== "undefined" ? window.location.href : "";
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const links = [
    {
      label: "Share on LinkedIn",
      href: () => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getUrl())}`,
    },
    {
      label: "Share on X",
      href: () => `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(getUrl())}`,
    },
    {
      label: "Share on WhatsApp",
      href: () => `https://wa.me/?text=${encodeURIComponent(`${title} ${getUrl()}`)}`,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-bold uppercase tracking-[0.15em] text-black/60">Share</span>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href()}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-black/[0.05] px-3 py-1.5 text-xs font-bold text-black transition-colors hover:bg-black/[0.1]"
        >
          {link.label}
        </a>
      ))}
      <button
        type="button"
        onClick={handleCopy}
        className="rounded-full bg-black/[0.05] px-3 py-1.5 text-xs font-bold text-black transition-colors hover:bg-black/[0.1]"
      >
        {copied ? "Link Copied" : "Copy Link"}
      </button>
    </div>
  );
}
