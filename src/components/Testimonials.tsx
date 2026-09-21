import { StarIcon } from "./icons";
import SectionHead from "./SectionHead";
import { testimonials } from "@/lib/site-data";

export default function Testimonials() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          eyebrow="Sample Feedback"
          title="What groups say after a trip."
          body="Illustrative quotes for this pitch — swap in real reviews once the page goes live."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.who}
              className="flex flex-col gap-3 rounded-2xl border border-line bg-background p-6"
            >
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="text-sm text-ink">“{t.quote}”</blockquote>
              <figcaption className="text-xs text-ink-soft">{t.who}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
