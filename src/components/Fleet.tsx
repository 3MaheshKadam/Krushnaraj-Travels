import type { ComponentType } from "react";
import {
  BlanketIcon,
  CameraIcon,
  CheckIcon,
  FanIcon,
  GpsIcon,
  MusicIcon,
  SnowflakeIcon,
  ZapIcon,
} from "./icons";
import SectionHead from "./SectionHead";
import { fleet, type Coach } from "@/lib/site-data";

const amenityIcon: Record<string, ComponentType<{ className?: string }>> = {
  "Charging point": ZapIcon,
  "CCTV onboard": CameraIcon,
  "GPS tracked": GpsIcon,
  "Music system": MusicIcon,
  "On-time runs": CheckIcon,
  "Sanitised daily": CheckIcon,
  "Blankets provided": BlanketIcon,
};

export default function Fleet() {
  return (
    <section id="fleet" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          eyebrow="The Fleet"
          title="Four coaches, two ways to travel."
          body="Every coach carries an MH-11 Satara-RTO plate and runs an All-India Tourist Permit, so the same bus that does a Karad–Pune school trip on Monday can run Karad–Bengaluru on Friday."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {fleet.map((coach) => (
            <CoachCard key={coach.name} coach={coach} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CoachCard({ coach }: { coach: Coach }) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-line bg-background p-6 shadow-[0_18px_40px_-26px_rgba(19,32,37,0.5)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="font-display text-2xl font-bold text-primary-strong">
            {coach.name}
          </div>
          <span
            className={`mt-1 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${
              coach.ac
                ? "bg-secondary/15 text-secondary"
                : "bg-accent/15 text-accent-strong"
            }`}
          >
            {coach.ac ? (
              <SnowflakeIcon className="h-3.5 w-3.5" />
            ) : (
              <FanIcon className="h-3.5 w-3.5" />
            )}
            {coach.type}
          </span>
        </div>
        <span className="whitespace-nowrap rounded border-2 border-ink bg-white px-2 py-0.5 font-mono text-xs font-bold text-ink">
          {coach.plate}
        </span>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-soft">
        <span>
          <strong className="text-ink">{coach.capacity.split(" ")[0]}</strong>{" "}
          {coach.capacity.split(" ").slice(1).join(" ")}
        </span>
        <span>{coach.layout}</span>
      </div>

      <p className="text-sm text-ink-soft">{coach.description}</p>

      <SeatMap cols={coach.seatCols} berth={coach.berth} note={coach.note} />

      <div className="flex flex-wrap gap-2">
        {coach.amenities.map((amenity) => {
          const Icon = amenityIcon[amenity] ?? CheckIcon;
          return (
            <span
              key={amenity}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-2.5 py-1 text-xs text-ink-soft"
            >
              <Icon className="h-3.5 w-3.5 text-primary" />
              {amenity}
            </span>
          );
        })}
      </div>
    </article>
  );
}

function SeatMap({
  cols,
  berth,
  note,
}: {
  cols: number;
  berth: boolean;
  note: string;
}) {
  const rows = 3;
  const left = 2;
  const right = cols - left;
  const seatClass = `h-3.5 flex-1 bg-primary/40 ${
    berth ? "rounded-t-md rounded-b-sm" : "rounded"
  }`;

  return (
    <div className="rounded-xl bg-surface-2 p-3">
      <div className="flex flex-col gap-1.5">
        {Array.from({ length: rows }).map((_, r) => (
          <div key={r} className="flex items-center gap-1.5">
            {Array.from({ length: left }).map((_, c) => (
              <div key={`l${c}`} className={seatClass} />
            ))}
            <div className="w-3 shrink-0" aria-hidden />
            {Array.from({ length: right }).map((_, c) => (
              <div key={`r${c}`} className={seatClass} />
            ))}
          </div>
        ))}
      </div>
      <p className="mt-2 text-right text-[0.7rem] text-ink-soft">{note}</p>
    </div>
  );
}
