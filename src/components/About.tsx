import { about } from "@/lib/site-data";

export default function About() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-accent-strong">
            {about.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-primary-strong md:text-3xl">
            {about.title}
          </h2>
          <div className="mt-4 flex flex-col gap-4 text-ink-soft">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1">
          {about.facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-xl border border-line bg-background px-5 py-4"
            >
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                {fact.label}
              </dt>
              <dd className="mt-1 font-display text-lg font-bold text-primary-strong">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
