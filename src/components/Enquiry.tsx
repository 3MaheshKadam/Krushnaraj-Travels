"use client";

import { useState, type ComponentType, type FormEvent, type ReactNode } from "react";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsappIcon } from "./icons";
import { contact, fleet } from "@/lib/site-data";

const vehicleOptions = ["No preference", ...fleet.map((v) => v.name)];

export default function Enquiry() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    route: "",
    date: "",
    vehicle: vehicleOptions[0],
    pax: "",
    msg: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const lines = ["Namaste, I'd like to enquire about a booking."];
    if (form.name) lines.push(`Name: ${form.name}`);
    if (form.phone) lines.push(`Phone: ${form.phone}`);
    if (form.route) lines.push(`Route: ${form.route}`);
    if (form.date) lines.push(`Date: ${form.date}`);
    if (form.vehicle !== "No preference") lines.push(`Vehicle: ${form.vehicle}`);
    if (form.pax) lines.push(`Passengers: ${form.pax}`);
    if (form.msg) lines.push(`Note: ${form.msg}`);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(
      `https://wa.me/${contact.phonePrimaryWhatsapp}?text=${text}`,
      "_blank",
      "noopener"
    );
  }

  return (
    <section id="enquire" className="bg-surface py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.95fr_1.05fr] md:items-start">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-accent-strong">
            Get In Touch
          </p>
          <h2 className="mt-2 text-2xl font-bold text-primary-strong md:text-3xl">
            Ask about a route or a date.
          </h2>
          <p className="mt-3 text-ink-soft">
            Send the details below on WhatsApp, or call directly — the office
            is open every day.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            <ContactLine
              icon={PhoneIcon}
              title={`${contact.phonePrimaryDisplay} / ${contact.phoneSecondaryDisplay}`}
              sub="Call or WhatsApp"
            />
            <ContactLine icon={MailIcon} title={contact.email} sub="Email" />
            <ContactLine icon={MapPinIcon} title={contact.location} sub="Service base" />
            <ContactLine icon={ClockIcon} title={contact.hours} sub="Booking office" />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 rounded-2xl border border-line bg-background p-6 shadow-[0_20px_45px_-28px_rgba(19,32,37,0.4)]"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name">
              <input
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Full name"
                className="input"
              />
            </Field>
            <Field label="Phone number">
              <input
                required
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="10-digit mobile"
                className="input"
              />
            </Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Route">
              <input
                value={form.route}
                onChange={(e) => update("route", e.target.value)}
                placeholder="e.g. Karad to Pune Airport"
                className="input"
              />
            </Field>
            <Field label="Travel date">
              <input
                type="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                className="input"
              />
            </Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Preferred vehicle">
              <select
                value={form.vehicle}
                onChange={(e) => update("vehicle", e.target.value)}
                className="input"
              >
                {vehicleOptions.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            </Field>
            <Field label="Passengers">
              <input
                type="number"
                min={1}
                value={form.pax}
                onChange={(e) => update("pax", e.target.value)}
                placeholder="e.g. 6"
                className="input"
              />
            </Field>
          </div>
          <Field label="Message">
            <textarea
              value={form.msg}
              onChange={(e) => update("msg", e.target.value)}
              placeholder="Anything else we should know?"
              rows={3}
              className="input resize-y"
            />
          </Field>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-strong sm:w-auto sm:text-base"
            >
              <WhatsappIcon className="h-5 w-5 shrink-0" />
              <span className="sm:hidden">Send on WhatsApp</span>
              <span className="hidden sm:inline">Send enquiry on WhatsApp</span>
            </button>
            <span className="text-xs text-ink-soft">
              Opens WhatsApp with your details pre-filled.
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-ink-soft">{label}</span>
      {children}
    </label>
  );
}

function ContactLine({
  icon: Icon,
  title,
  sub,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  sub: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary-strong">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-sm font-semibold text-ink">{title}</p>
        <p className="text-xs text-ink-soft">{sub}</p>
      </div>
    </div>
  );
}
