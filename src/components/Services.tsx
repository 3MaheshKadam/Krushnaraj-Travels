import {
  BriefcaseIcon,
  StarIcon,
  TempleIcon,
} from "./icons";
import SectionHead from "./SectionHead";
import { services } from "@/lib/site-data";

const iconMap = {
  temple: TempleIcon,
  star: StarIcon,
  briefcase: BriefcaseIcon,
} as const;

export default function Services() {
  return (
    <section id="services" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          eyebrow="What We Book"
          title="One fleet, six kinds of journeys."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.title}
                className="flex flex-col gap-3 rounded-xl border border-line bg-background p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary-strong">
                  <Icon className="h-5 w-5" />
                </span>
                <h4 className="font-display text-base font-bold text-primary-strong">
                  {service.title}
                </h4>
                <p className="text-sm text-ink-soft">{service.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
