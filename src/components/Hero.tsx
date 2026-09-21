import Image from "next/image";
import { ArrowRightIcon, WhatsappIcon } from "./icons";
import { contact, heroStats, tickerDestinations } from "@/lib/site-data";

export default function Hero() {
  const waHref = `https://wa.me/${contact.phoneWhatsapp}?text=${encodeURIComponent(
    "Namaste, I'd like to enquire about booking a bus from Karad."
  )}`;
  const loopedDestinations = [...tickerDestinations, ...tickerDestinations];

  return (
    <section id="top" className="bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-14 pb-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-20 md:pb-16">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-accent-strong">
            AC &amp; Non-AC Coaches · Karad, Dist. Satara
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.08] text-primary-strong md:text-6xl">
            From the Sangam at Karad
            <br />
            to <span className="text-accent">every corner</span> of India.
          </h1>
          <p className="mt-5 max-w-[52ch] text-lg text-ink-soft">
            Sangam Travels runs four coaches out of Karad Bus Stand — two AC,
            two Non-AC — on the NH 48 corridor between Pune and Bengaluru.
            Book a seat on a scheduled route, or charter the whole coach for
            a yatra, a wedding, or a college trip anywhere in the country.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-white shadow-[0_18px_35px_-18px_rgba(233,97,28,0.7)] transition-transform hover:-translate-y-0.5 hover:bg-accent-strong"
            >
              <WhatsappIcon className="h-5 w-5" />
              Enquire on WhatsApp
            </a>
            <a
              href="#fleet"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 font-semibold text-primary-strong transition-colors hover:border-primary hover:bg-surface-2"
            >
              See the fleet
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-xl font-bold text-primary-strong">
                  {stat.value}
                </dd>
                <dd className="text-xs text-ink-soft">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <div className="overflow-hidden rounded-2xl border border-line shadow-[0_25px_50px_-30px_rgba(19,32,37,0.45)]">
            <Image
              src="/images/ac-volvo-highway.jpg"
              alt="AC Volvo multi-axle coach, the comfort class Sangam Travels' AC coaches run to"
              width={1357}
              height={957}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          <p className="mt-2 text-right text-xs text-ink-soft">
            Reference photo of an AC Volvo-class coach — see the{" "}
            <a href="#gallery" className="underline decoration-line underline-offset-2 hover:text-primary-strong">
              gallery note
            </a>
            .
          </p>
        </div>
      </div>

      <div className="border-y border-line bg-surface-2 py-2.5">
        <div className="flex overflow-hidden">
          <div className="ticker-track flex shrink-0 gap-10 whitespace-nowrap pr-10 font-mono text-xs font-bold tracking-wide text-primary-strong">
            {loopedDestinations.map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>
          <div
            aria-hidden
            className="ticker-track flex shrink-0 gap-10 whitespace-nowrap pr-10 font-mono text-xs font-bold tracking-wide text-primary-strong"
          >
            {loopedDestinations.map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
