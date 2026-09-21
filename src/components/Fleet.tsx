import Image from "next/image";
import { BusIcon, CarIcon, CheckIcon, MusicIcon, PhoneIcon, ZapIcon } from "./icons";
import SectionHead from "./SectionHead";
import { fleet, type Vehicle } from "@/lib/site-data";

const amenityIcon: Record<string, typeof CheckIcon> = {
  "Charging point": ZapIcon,
  "Music system": MusicIcon,
  "Driver on call": PhoneIcon,
};

export default function Fleet() {
  return (
    <section id="fleet" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          eyebrow="The Fleet"
          title="Seven vehicles, sized to the trip."
          body="Sedans, MPVs and SUVs run AC only. The Force Urbania and Tempo Traveller are available in both AC and Non-AC, for larger groups working to a budget. Hover a card to see the vehicle."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.map((vehicle) => (
            <VehicleCard key={vehicle.name} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const Icon = vehicle.icon === "van" ? BusIcon : CarIcon;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-line shadow-[0_18px_40px_-26px_rgba(19,32,37,0.5)]">
      <Image
        src={vehicle.image}
        alt={vehicle.imageAlt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="absolute inset-0 scale-105 object-cover opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />

      <div className="relative flex h-full flex-col gap-4 bg-background p-6 transition-colors duration-500 ease-out group-hover:bg-transparent">
        <div className="flex items-start justify-between gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-strong transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white">
            <Icon className="h-5 w-5" />
          </span>
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-bold transition-colors duration-500 group-hover:bg-white group-hover:text-ink ${
              vehicle.ac === "AC"
                ? "bg-secondary/15 text-secondary"
                : "bg-accent/15 text-accent-strong"
            }`}
          >
            {vehicle.ac}
          </span>
        </div>

        <div>
          <h3 className="font-display text-xl font-bold text-primary-strong transition-colors duration-500 group-hover:text-white">
            {vehicle.name}
          </h3>
          <p className="mt-0.5 text-sm text-ink-soft transition-colors duration-500 group-hover:text-white/75">
            {vehicle.vehicleClass} · {vehicle.seats}
          </p>
        </div>

        <p className="text-sm text-ink-soft transition-colors duration-500 group-hover:text-white/85">
          {vehicle.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {vehicle.amenities.map((amenity) => {
            const AmenityIcon = amenityIcon[amenity] ?? CheckIcon;
            return (
              <span
                key={amenity}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-2.5 py-1 text-xs text-ink-soft transition-colors duration-500 group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white"
              >
                <AmenityIcon className="h-3.5 w-3.5 text-primary transition-colors duration-500 group-hover:text-white" />
                {amenity}
              </span>
            );
          })}
        </div>
      </div>
    </article>
  );
}
