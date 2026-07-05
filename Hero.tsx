"use client";

import { useState, type FormEvent } from "react";
import { Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { company, concerns, timeSlots } from "@/lib/content";

type FormState = {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  concern: string;
  date: string;
  timeSlot: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  vehicle: "",
  concern: concerns[0],
  date: "",
  timeSlot: "",
  message: "",
};

const inputClasses =
  "w-full rounded-lg border border-border bg-white px-4 py-2.5 text-base text-ink placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand";

const labelClasses = "text-sm font-medium text-ink";

export function AppointmentForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: { name?: string; phone?: string } = {};
    if (!form.name.trim()) nextErrors.name = "Bitte geben Sie Ihren Namen an.";
    if (!form.phone.trim())
      nextErrors.phone = "Bitte geben Sie Ihre Telefonnummer an.";
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    const bodyLines = [
      `Name: ${form.name}`,
      `Telefon: ${form.phone}`,
      form.email && `E-Mail: ${form.email}`,
      form.vehicle && `Fahrzeug: ${form.vehicle}`,
      `Anliegen: ${form.concern}`,
      form.date && `Wunschtermin: ${form.date}`,
      form.timeSlot && `Wunschzeit: ${form.timeSlot}`,
      form.message && `Nachricht: ${form.message}`,
    ].filter(Boolean);

    const mailto = `mailto:${company.email}?subject=${encodeURIComponent(
      "Terminanfrage über die Website",
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <section id="termin" aria-labelledby="appointment-heading" className="py-20 sm:py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Termin anfragen"
          title="Vereinbaren Sie unverbindlich einen Termin."
          subtitle="Füllen Sie das Formular aus – wir öffnen Ihr E-Mail-Programm mit einer vorausgefüllten Anfrage an Thomas Bergmann."
        />

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-brand-light px-4 py-3.5">
          <Info size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
          <p className="text-sm text-body">
            Hinweis: Bilder von z. B. Fahrzeugscheinen oder Schäden können
            Sie uns gerne im Nachgang per E-Mail zukommen lassen.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-10 grid gap-6 rounded-2xl border border-border bg-surface p-6 shadow-soft sm:grid-cols-2 sm:p-8"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className={labelClasses}>
              Name<span className="text-brand"> *</span>
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              required
              aria-required="true"
              aria-describedby={errors.name ? "name-error" : undefined}
              className={inputClasses}
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
            />
            <p id="name-error" className="min-h-5 text-sm text-red-600">
              {errors.name}
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className={labelClasses}>
              Telefon<span className="text-brand"> *</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              required
              aria-required="true"
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={inputClasses}
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
            <p id="phone-error" className="min-h-5 text-sm text-red-600">
              {errors.phone}
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className={labelClasses}>
              E-Mail
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className={inputClasses}
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
            <p className="min-h-5" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="vehicle" className={labelClasses}>
              Fahrzeug (Marke/Modell)
            </label>
            <input
              id="vehicle"
              type="text"
              placeholder="z. B. VW Golf, Bj. 2016"
              className={inputClasses}
              value={form.vehicle}
              onChange={(e) => update("vehicle", e.target.value)}
            />
            <p className="min-h-5" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="concern" className={labelClasses}>
              Anliegen
            </label>
            <select
              id="concern"
              className={inputClasses}
              value={form.concern}
              onChange={(e) => update("concern", e.target.value)}
            >
              {concerns.map((concern) => (
                <option key={concern} value={concern}>
                  {concern}
                </option>
              ))}
            </select>
            <p className="min-h-5" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="date" className={labelClasses}>
                Wunschtermin
              </label>
              <input
                id="date"
                type="date"
                className={inputClasses}
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
              />
              <p className="min-h-5" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="timeSlot" className={labelClasses}>
                Wunschzeit
              </label>
              <select
                id="timeSlot"
                className={inputClasses}
                value={form.timeSlot}
                onChange={(e) => update("timeSlot", e.target.value)}
              >
                <option value="">Egal</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              <p className="min-h-5" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label htmlFor="message" className={labelClasses}>
              Nachricht
            </label>
            <textarea
              id="message"
              rows={4}
              className={`${inputClasses} resize-none`}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
            />
            <p className="min-h-5" />
          </div>

          <div className="sm:col-span-2">
            <Button type="submit" className="w-full sm:w-auto">
              Anfrage senden
            </Button>
            <p className="mt-3 min-h-5 text-sm text-brand" role="status" aria-live="polite">
              {submitted &&
                "Ihr E-Mail-Programm wird geöffnet – bitte senden Sie die Nachricht ab."}
            </p>
          </div>
        </form>
      </Container>
    </section>
  );
}
