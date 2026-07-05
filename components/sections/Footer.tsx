import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import {
  addressLine,
  company,
  emailHref,
  mapsUrl,
  openingHours,
  phoneHref,
} from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <Container className="grid gap-10 py-16 sm:grid-cols-3">
        <div>
          <Wordmark />
          <p className="mt-4 text-sm text-muted">{company.specialization}</p>
          <p className="mt-1 text-sm text-muted">Inhaber: {company.owner}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
            Kontakt
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-body">
            <li className="flex items-start gap-2.5">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand"
              >
                {addressLine}
              </a>
            </li>
            {company.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-2.5">
                <Phone size={18} className="shrink-0 text-brand" aria-hidden="true" />
                <a href={phoneHref(phone)} className="hover:text-brand">
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2.5">
              <Mail size={18} className="shrink-0 text-brand" aria-hidden="true" />
              <a href={emailHref} className="hover:text-brand">
                {company.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
            Öffnungszeiten
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-body">
            {openingHours.map((entry) => (
              <li key={entry.days} className="flex items-start gap-2.5">
                <Clock size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  <span className="block font-medium text-ink">{entry.days}</span>
                  {entry.ranges.join(" & ")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-border py-6">
        <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {company.name}
          </p>
          <nav
            aria-label="Rechtliche Hinweise"
            className="flex gap-6 text-sm text-muted"
          >
            <Link href="/impressum" className="hover:text-brand">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-brand">
              Datenschutz
            </Link>
          </nav>
        </Container>
      </div>
    </footer>
  );
}
