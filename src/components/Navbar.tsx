import Link from "next/link";
import { BusIcon, PhoneIcon } from "./icons";
import { brand, contact } from "@/lib/site-data";

const links = [
  { href: "#fleet", label: "Fleet" },
  { href: "#routes", label: "Routes" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#enquire", label: "Enquire" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6">
        <Link href="#top" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-background sm:h-10 sm:w-10">
            <BusIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-base font-bold text-primary-strong sm:text-lg">
              {brand.name}
            </span>
            <span className="block truncate text-[0.62rem] uppercase tracking-wider text-ink-soft sm:text-[0.68rem]">
              Karad · Maharashtra
            </span>
          </span>
        </Link>

        <nav className="hidden gap-7 text-sm font-medium text-ink-soft md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b-2 border-transparent pb-0.5 transition-colors hover:border-accent hover:text-primary-strong"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={`tel:+${contact.phonePrimaryWhatsapp}`}
          className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-accent px-3 py-2 text-xs font-semibold text-white shadow-[0_14px_30px_-16px_rgba(233,97,28,0.7)] transition-transform hover:-translate-y-0.5 hover:bg-accent-strong sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm"
        >
          <PhoneIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Call Now
        </a>
      </div>
    </header>
  );
}
