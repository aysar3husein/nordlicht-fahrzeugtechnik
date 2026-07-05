import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="leistungen" aria-labelledby="services-heading" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Unsere Leistungen"
          title="Alles, was Ihr Fahrzeug braucht – aus einer Hand."
          subtitle="Von der Inspektion bis zur Reparatur: Wir arbeiten markenunabhängig und mit moderner Diagnosetechnik."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <Card className="h-full">
                <IconBadge icon={service.icon} />
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {service.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
