import SectionHead from "./SectionHead";
import { bookingSteps } from "@/lib/site-data";

export default function HowItWorks() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          eyebrow="How Booking Works"
          title="Three steps, no booking portal to sign into."
        />
        <ol className="grid gap-6 md:grid-cols-3">
          {bookingSteps.map((step) => (
            <li
              key={step.step}
              className="rounded-2xl border border-line bg-background p-6"
            >
              <span className="font-mono text-3xl font-bold text-accent">
                {step.step}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-primary-strong">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
