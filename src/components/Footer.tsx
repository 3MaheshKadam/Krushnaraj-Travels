import { BusIcon, MailIcon, PhoneIcon } from "./icons";
import { brand, contact } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-ink-soft">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-background">
            <BusIcon className="h-4 w-4" />
          </span>
          <span>
            {brand.name} · {brand.location}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href={`tel:+${contact.phonePrimaryWhatsapp}`}
            className="inline-flex items-center gap-1.5 hover:text-primary-strong"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            {contact.phonePrimaryDisplay}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-1.5 hover:text-primary-strong"
          >
            <MailIcon className="h-3.5 w-3.5" />
            {contact.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
