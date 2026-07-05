import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { StarRating } from "@/components/ui/StarRating";
import { Reveal } from "@/components/motion/Reveal";
import { rating, testimonials } from "@/lib/content";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section
      id="bewertungen"
      aria-labelledby="testimonials-heading"
      className="bg-white py-20 sm:py-24"
    >
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Kundenbewertungen"
            title="Was unsere Kunden sagen."
          />
          <div className="flex items-center gap-2">
            <StarRating value={rating.value} outOf={rating.outOf} />
            <span className="text-sm font-medium text-muted">
              {rating.value.toString().replace(".", ",")} von {rating.outOf} bei{" "}
              {rating.source}
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={index * 0.05}>
              <Card className="flex h-full flex-col">
                <StarRating value={5} />
                <p className="mt-4 flex-1 text-base leading-relaxed text-body">
                  &bdquo;{testimonial.quote}&ldquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-sm font-semibold text-brand">
                    {initials(testimonial.author)}
                  </span>
                  <span className="text-sm font-semibold text-ink">
                    {testimonial.author}
                  </span>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
