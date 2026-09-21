import { BusIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 text-sm text-ink-soft">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-background">
            <BusIcon className="h-4 w-4" />
          </span>
          <span>Sangam Travels · Karad, Dist. Satara, Maharashtra</span>
        </div>
        <span>Plate series MH-11 · All-India Tourist Permit</span>
      </div>
    </footer>
  );
}
