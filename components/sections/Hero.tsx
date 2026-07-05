import Image from "next/image";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TrustGauge } from "@/components/motion/TrustGauge";
import { company, cta, heroImage, phoneHref, rating } from "@/lib/content";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-tr from-ink/95 via-ink/80 to-brand-dark/70"
      />

      <Container className="relative grid gap-12 py-24 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wide text-white/80">
            {company.name} · {company.address.city}
          </span>
          <h1
            id="hero-heading"
            className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]"
          >
            Reparatur, Wartung und ehrliche Beratung – ganz in Ihrer Nähe.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Thomas Bergmann und sein Team kümmern sich um Inspektion, Diagnose
            und Reparatur Ihres Fahrzeugs – unabhängig von Marke und Modell.
            Persönlich und zuverlässig, seit Jahren in Musterstadt.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="#termin" variant="primary">
              {cta.primary}
            </ButtonLink>
            <ButtonLink
              href={phoneHref(company.phones[0])}
              variant="secondary"
              icon={<Phone size={18} aria-hidden="true" />}
            >
              {cta.secondary}
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <div className="rounded-3xl border border-white/10 bg-surface p-8 shadow-2xl">
            <TrustGauge
              value={rating.value}
              outOf={rating.outOf}
              label={`Bewertungen bei ${rating.source}`}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
