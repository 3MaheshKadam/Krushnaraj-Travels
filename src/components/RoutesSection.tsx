import { MapPinIcon } from "./icons";
import SectionHead from "./SectionHead";
import { maharashtraRoutes, panIndiaRoutes } from "@/lib/site-data";

export default function RoutesSection() {
  return (
    <section id="routes" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          eyebrow="Where We Run"
          title="Regular routes, plus custom charters anywhere in India."
          body="Karad sits on NH 48 between Pune and Kolhapur, at the confluence of the Krishna and Koyna rivers — a natural halting point for both intrastate and long-distance travel. Distances below are from Karad by road."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <RoutePanel
            heading="Within Maharashtra"
            routes={maharashtraRoutes}
            note="Popular for weekend leisure groups, wedding parties and college excursions — usually a day trip in an Innova Crysta, Ertiga or Force Urbania."
          />
          <RoutePanel
            heading="Pilgrimage & Pan-India"
            routes={panIndiaRoutes}
            note="Full India outstation trips available on request — Wari season and multi-day pilgrimage tours usually run in a Tempo Traveller."
          />
        </div>
      </div>
    </section>
  );
}

function RoutePanel({
  heading,
  routes,
  note,
}: {
  heading: string;
  routes: { to: string; km: number }[];
  note: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-6 shadow-[0_18px_40px_-28px_rgba(19,32,37,0.35)]">
      <h3 className="flex items-center gap-2 text-base font-bold text-primary-strong">
        <MapPinIcon className="h-4 w-4 text-accent-strong" />
        {heading}
      </h3>
      <ul className="mt-4 flex flex-col">
        {routes.map((route) => (
          <li
            key={route.to}
            className="flex items-baseline justify-between gap-4 border-b border-line py-2.5 text-sm text-ink last:border-none"
          >
            <span>Karad → {route.to}</span>
            <span className="font-mono text-xs text-ink-soft">{route.km} km</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-ink-soft">{note}</p>
    </div>
  );
}
