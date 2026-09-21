import Image from "next/image";
import SectionHead from "./SectionHead";
import { gallery, galleryCredit } from "@/lib/site-data";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          eyebrow="The Fleet, In Photos"
          title="What these vehicle classes look like on the road."
          body="Krushnaraj Travels' own Innova Crysta and Force Urbania / Tempo Traveller run to these same vehicle classes — an AC MPV for families and airport runs, and a van for larger groups."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {gallery.map((photo) => (
            <figure
              key={photo.src}
              className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_18px_40px_-28px_rgba(19,32,37,0.4)]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="h-56 w-full object-cover sm:h-64"
              />
              <figcaption className="px-4 py-3 text-sm text-ink-soft">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-5 max-w-[70ch] text-xs text-ink-soft">
          {galleryCredit.text}{" "}
          <a
            href={galleryCredit.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-line underline-offset-2 hover:text-primary-strong"
          >
            Source
          </a>
        </p>
      </div>
    </section>
  );
}
