"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { galleryImages } from "@/lib/content";

export function Gallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector<HTMLElement>("[data-gallery-card]");
    const amount = card ? card.offsetWidth + 24 : scroller.clientWidth * 0.85;
    scroller.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <section
      id="werkstatt"
      aria-labelledby="gallery-heading"
      className="bg-white py-20 sm:py-24"
    >
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Einblicke"
            title="Einblicke in unsere Werkstatt."
            subtitle="Moderne Technik, ordentliche Abläufe und ein Team, das anpackt."
          />
          <div className="hidden gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Vorheriges Bild"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand cursor-pointer"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Nächstes Bild"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand cursor-pointer"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div
            ref={scrollerRef}
            className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {galleryImages.map((image) => (
              <div
                key={image.src}
                data-gallery-card
                className="relative aspect-[4/3] w-[80%] shrink-0 snap-start overflow-hidden rounded-2xl border border-border sm:w-[46%] lg:w-[31%]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 80vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-6 flex justify-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Vorheriges Bild"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand cursor-pointer"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Nächstes Bild"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand cursor-pointer"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </Container>
    </section>
  );
}
