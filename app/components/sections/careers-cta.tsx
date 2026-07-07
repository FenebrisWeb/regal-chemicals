import Button from "@/app/components/ui/button";

export default function CareersCta() {
  return (
    <section className="bg-[#07245a] py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2596be]">Get Started</span>
          <h2 className="mt-2 max-w-md text-2xl font-bold text-white sm:text-3xl">
            Let&apos;s build something reliable together.
          </h2>
        </div>

        <p className="max-w-sm text-sm font-medium text-white">
          Talk to our team about the right Regal products and systems for your next project, backed
          by certified quality and dedicated technical support.
        </p>

        <Button href="/contact" variant="outline-light">
          Get in Touch
        </Button>
      </div>
    </section>
  );
}
