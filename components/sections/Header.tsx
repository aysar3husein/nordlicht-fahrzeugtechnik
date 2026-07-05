import { Phone } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { ButtonLink } from "@/components/ui/Button";
import { company, phoneHref } from "@/lib/content";

const navLinks = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#werkstatt", label: "Einblicke" },
  { href: "/#bewertungen", label: "Bewertungen" },
  { href: "/#termin", label: "Termin anfragen" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="shrink-0">
          <Wordmark />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-body hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <ButtonLink
          href={phoneHref(company.phones[0])}
          variant="primary"
          icon={<Phone size={16} aria-hidden="true" />}
        >
          <span className="hidden sm:inline">Jetzt anrufen</span>
          <span className="sm:hidden">Anrufen</span>
        </ButtonLink>
      </Container>
    </header>
  );
}
