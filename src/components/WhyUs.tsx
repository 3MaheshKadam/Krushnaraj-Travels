import {
  CheckIcon,
  ClockIcon,
  DriverIcon,
  GpsIcon,
  PhoneIcon,
  ShieldIcon,
} from "./icons";
import SectionHead from "./SectionHead";
import { whyUs } from "@/lib/site-data";

const iconMap = {
  shield: ShieldIcon,
  driver: DriverIcon,
  clock: ClockIcon,
  gps: GpsIcon,
  check: CheckIcon,
  phone: PhoneIcon,
} as const;

export default function WhyUs() {
  return (
    <section id="why" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          eyebrow="Why Sangam Travels"
          title="Built for the ghat sections and the highway alike."
        />
        <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div key={item.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-strong">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-display text-base font-bold text-primary-strong">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-ink-soft">{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
