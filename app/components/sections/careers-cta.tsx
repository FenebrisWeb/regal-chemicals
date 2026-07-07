import Button from "@/app/components/ui/button";

export default function CareersCta() {
  return (
    <section className="bg-[#07245a] py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2596be]">Careers</span>
          <h2 className="mt-2 max-w-md text-2xl font-bold text-white sm:text-3xl">
            Join our team to work in the best environment and shape a bright future.
          </h2>
        </div>

        <p className="max-w-sm text-sm font-medium text-white">
          We&apos;re a team of dedicated professionals who are passionate about innovation and teamwork,
          creating a supportive environment where everyone can grow and build a bright future together.
        </p>

        <Button href="/career/opportunities" variant="outline-light">
          See Available Positions
        </Button>
      </div>
    </section>
  );
}
