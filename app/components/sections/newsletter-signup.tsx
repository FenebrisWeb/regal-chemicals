"use client";

import { useState } from "react";
import AmbientBubbles from "@/app/components/ui/ambient-bubbles";
import Reveal from "@/app/components/ui/reveal";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden bg-[#07245a] py-14">
      <AmbientBubbles tone="dark" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 text-center">
        <Reveal>
          <div className="flex flex-col items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2596be]">Stay Updated</span>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Get New Articles Sent to Your Inbox
            </h2>
            <p className="max-w-xl text-sm font-medium text-white/85">
              Practical guidance on flooring, waterproofing, corrosion protection, and construction chemicals,
              sent only when there is something worth reading.
            </p>

            {submitted ? (
              <p className="mt-2 text-sm font-bold text-white">
                Thanks, we will be in touch at {email}.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-2 flex w-full max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  className="w-full rounded-full border-2 border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white placeholder:text-white/60 focus:border-white/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#07245a] transition-colors hover:bg-black hover:text-white"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
