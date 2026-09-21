"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { heroSlides } from "@/lib/site-data";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const current = heroSlides[index];

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line shadow-[0_25px_50px_-30px_rgba(19,32,37,0.45)]">
        {heroSlides.map((slide, i) => (
          <Image
            key={slide.src + i}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="(min-width: 768px) 40vw, 100vw"
            className={`object-cover transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between gap-3">
        <p className="text-xs text-ink-soft">
          Reference photo of a {current.caption} — see the{" "}
          <a
            href="#gallery"
            className="underline decoration-line underline-offset-2 hover:text-primary-strong"
          >
            gallery note
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-1.5">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.src + i}
              type="button"
              aria-label={`Show ${slide.caption}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-1.5 w-4 rounded-full transition-colors ${
                i === index ? "bg-accent" : "bg-line hover:bg-ink-soft"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
