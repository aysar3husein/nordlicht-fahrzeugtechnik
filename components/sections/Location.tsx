"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { addressLine, mapsEmbedUrl, mapsUrl } from "@/lib/content";

const CONSENT_KEY = "maps-consent";

export function Location() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(CONSENT_KEY) === "true") {
      setConsent(true);
    }
  }, []);

  function acceptConsent() {
    setConsent(true);
    window.localStorage.setItem(CONSENT_KEY, "true");
  }

  return (
    <section
      id="standort"
      aria-labelledby="location-heading"
      className="bg-bg py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Standort & Anfahrt"
          title="So finden Sie zu uns."
          subtitle={addressLine}
        />

        <div className="relative mt-10 aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border shadow-soft sm:aspect-[16/7]">
          {consent ? (
            <iframe
              title="Standort von Nordlicht Fahrzeugtechnik GmbH auf Google Maps"
              src={mapsEmbedUrl}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-brand-light px-6 py-8 text-center">
              <MapPin size={32} className="text-brand" aria-hidden="true" />
              <p className="max-w-md text-sm text-body">
                Beim Laden der Karte stellt Ihr Browser eine Verbindung zu
                Google Maps her. Dabei können Cookies gesetzt und Daten an
                Google übertragen werden.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={acceptConsent}
                  className="cursor-pointer rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  Cookies & externe Medien akzeptieren
                </button>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  In Google Maps öffnen
                </a>
              </div>
              <p className="text-xs text-muted">
                Weitere Informationen in unserer{" "}
                <Link href="/datenschutz" className="underline hover:text-brand">
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
