import PlaceholderVisual from "@/app/components/ui/placeholder-visual";
import AmbientBubbles from "@/app/components/ui/ambient-bubbles";
import Reveal from "@/app/components/ui/reveal";
import { PHONE_NUMBERS, EMAILS, POSTAL_ADDRESS } from "@/app/data/contact";

export default function ContactInfo() {
  return (
    <section className="relative overflow-hidden bg-black/[0.03] py-16">
      <AmbientBubbles tone="light" className="opacity-70" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
        <Reveal>
          <PlaceholderVisual label="Contact Us" tone="brand" className="h-full min-h-[220px]" />
        </Reveal>

        <Reveal delayMs={120} className="h-full">
          <div className="flex h-full flex-col gap-3 rounded-2xl bg-white p-8">
            <h3 className="text-lg font-bold text-black">Get in touch</h3>
            <p className="text-sm font-bold text-black">Work and general inquiries</p>
            <ul className="flex flex-col gap-1">
              {PHONE_NUMBERS.map((phone) => (
                <li key={phone.value}>
                  <a href={phone.href} className="text-sm font-medium text-black hover:text-[#2596be]">
                    {phone.value}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm font-bold text-black">Email us at</p>
            <ul className="flex flex-col gap-1">
              {EMAILS.map((email) => (
                <li key={email.value}>
                  <a href={email.href} className="text-sm font-medium text-black hover:text-[#2596be]">
                    {email.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delayMs={240} className="h-full">
          <div className="flex h-full flex-col gap-3 rounded-2xl bg-white p-8">
            <h3 className="text-lg font-bold text-black">Post address</h3>
            <p className="text-sm font-bold text-black">{POSTAL_ADDRESS.company}</p>
            <address className="text-sm font-medium not-italic text-black">
              {POSTAL_ADDRESS.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
