import type { LucideIcon } from "lucide-react";
import {
  Gauge,
  Search,
  Disc3,
  CircleGauge,
  Snowflake,
  ClipboardCheck,
} from "lucide-react";

export const company = {
  name: "Nordlicht Fahrzeugtechnik GmbH",
  owner: "Thomas Bergmann",
  address: {
    street: "Musterstraße 12",
    zip: "26129",
    city: "Musterstadt",
  },
  phones: ["0441 1234567", "0170 1234567"],
  email: "kontakt@nordlicht-fahrzeugtechnik.de",
  specialization: "Autoreparatur, freie Kfz-Werkstatt",
} as const;

export const addressLine = `${company.address.street}, ${company.address.zip} ${company.address.city}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${company.name}, ${addressLine}`,
)}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${company.name}, ${addressLine}`,
)}&output=embed`;

export const phoneHref = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;
export const emailHref = `mailto:${company.email}`;

export const openingHours = [
  { days: "Montag – Donnerstag", ranges: ["08:00 – 12:00", "14:00 – 19:00"] },
  { days: "Freitag", ranges: ["08:00 – 12:00", "14:00 – 17:00"] },
] as const;

export const rating = {
  value: 4.9,
  outOf: 5,
  source: "Google",
} as const;

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// Platzhalter-Leistungen einer typischen freien Kfz-Werkstatt – bitte von
// Thomas Bergmann final bestätigen/anpassen lassen, sobald die echte Liste vorliegt.
export const services: Service[] = [
  {
    icon: ClipboardCheck,
    title: "Inspektion & Wartung",
    description:
      "Regelmäßige Wartung nach Herstellervorgaben, damit Ihr Fahrzeug zuverlässig und sicher bleibt.",
  },
  {
    icon: Search,
    title: "Diagnose & Fehlersuche",
    description:
      "Moderne Diagnosetechnik zur schnellen und präzisen Fehlersuche bei allen Marken.",
  },
  {
    icon: Gauge,
    title: "Bremsen-Service",
    description:
      "Prüfung, Wartung und Reparatur Ihrer Bremsanlage für maximale Fahrsicherheit.",
  },
  {
    icon: Disc3,
    title: "Reifenwechsel & Einlagerung",
    description:
      "Saisonaler Reifenwechsel sowie fachgerechte Einlagerung Ihrer Räder.",
  },
  {
    icon: Snowflake,
    title: "Klimaservice",
    description:
      "Prüfung, Wartung und Befüllung Ihrer Klimaanlage für angenehmes Fahren im Sommer.",
  },
  {
    icon: CircleGauge,
    title: "HU/AU-Vorbereitung",
    description:
      "Gründliche Vorbereitung Ihres Fahrzeugs auf die Hauptuntersuchung und Abgasuntersuchung.",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Top Werkstatt.",
    author: "M. Feldmann",
  },
  {
    quote: "Alle sehr nett schnelle Hilfe.",
    author: "T. Brandt",
  },
  {
    quote: "Super nettes Team.",
    author: "S. Wieczorek",
  },
];

export const cta = {
  primary: "Termin anfragen",
  secondary: "Jetzt anrufen",
} as const;

export const concerns = [
  "Inspektion",
  "Reparatur",
  "Diagnose / Fehlersuche",
  "Reifenwechsel",
  "HU/AU-Vorbereitung",
  "Sonstiges",
] as const;

export const timeSlots = ["Vormittag", "Nachmittag"] as const;

// Platzhalter-Aufnahme (Unsplash) für den Hero-Hintergrund – durch echtes
// Werkstattfoto ersetzen, sobald verfügbar.
export const heroImage = {
  src: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=2070&auto=format&fit=crop",
  alt: "Fahrzeug wird in einer Kfz-Werkstatt gewartet",
};

export type GalleryImage = {
  src: string;
  alt: string;
};

// Platzhalter-Aufnahmen (Unsplash) für die Werkstatt-Galerie – durch echte
// Fotos der Werkstatt ersetzen, sobald verfügbar.
export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1200&auto=format&fit=crop",
    alt: "Mechaniker bei der Arbeit am Motor",
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    alt: "Blick in den Motorraum eines Fahrzeugs",
  },
  {
    src: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1200&auto=format&fit=crop",
    alt: "Werkzeuge und Ausstattung in unserer Werkstatt",
  },
  {
    src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1200&auto=format&fit=crop",
    alt: "Detailaufnahme eines Fahrzeugrads",
  },
];
