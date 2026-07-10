"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { EMAILS } from "@/app/data/contact";

const SUBJECTS = [
  "General Inquiry",
  "Technical Support",
  "Tender or Document Request",
  "Distributor Inquiry",
  "Careers",
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: SUBJECTS[0],
    message: product ? `I would like more information about ${product}.` : "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const recipient = formData.subject === "Technical Support" ? EMAILS[1].value : EMAILS[0].value;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\n\n${formData.message}`;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl bg-black/[0.03] p-8 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2596be]/10 text-[#2596be]">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </span>
        <h3 className="text-xl font-bold text-black">Message Received</h3>
        <p className="max-w-sm text-sm font-medium text-black">
          Thanks {formData.name.split(" ")[0]}, our team will get back to you at {formData.email} shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 rounded-full border-2 border-black px-5 py-2 text-sm font-bold text-black transition-colors hover:bg-black hover:text-white"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl bg-black/[0.03] p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-bold uppercase tracking-[0.1em] text-black/60">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black focus:border-[#2596be] focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-[0.1em] text-black/60">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black focus:border-[#2596be] focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-bold uppercase tracking-[0.1em] text-black/60">
            Phone Number (Optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black focus:border-[#2596be] focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject" className="text-xs font-bold uppercase tracking-[0.1em] text-black/60">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black focus:border-[#2596be] focus:outline-none"
          >
            {SUBJECTS.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-[0.1em] text-black/60">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project, product, or question."
          className="resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black focus:border-[#2596be] focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="mt-2 w-fit rounded-full bg-[#07245a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#2596be]"
      >
        Send Message
      </button>
    </form>
  );
}
