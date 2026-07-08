import Button from "@/app/components/ui/button";
import Reveal from "@/app/components/ui/reveal";
import { slugify } from "@/app/lib/slug";
import type { JobOpening } from "@/types/sections";

interface JobListProps {
  items: JobOpening[];
}

export default function JobList({ items }: JobListProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6">
        {items.map((job, index) => (
          <Reveal key={job.slug} delayMs={index * 60}>
            <article className="flex flex-col gap-5 rounded-2xl bg-black/[0.03] p-6 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-black">{job.title}</h3>
                  <p className="mt-1 text-sm font-medium text-black">{job.description}</p>
                </div>
                <Button
                  href={`mailto:careers@regalchemicals.co.uk?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                  variant="dark"
                  className="shrink-0"
                >
                  Apply Now
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {[job.department, job.location, job.type, job.experience].map((tag) => (
                  <span
                    key={`${job.slug}-${slugify(tag)}`}
                    className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#07245a]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#2596be]">Responsibilities</h4>
                  <ul className="flex flex-col gap-1.5 text-sm font-medium text-black">
                    {job.responsibilities.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2596be]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#2596be]">Requirements</h4>
                  <ul className="flex flex-col gap-1.5 text-sm font-medium text-black">
                    {job.requirements.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2596be]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
