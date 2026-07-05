import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Impressum – Nordlicht Fahrzeugtechnik GmbH",
  description: "Impressum der Nordlicht Fahrzeugtechnik GmbH in Musterstadt.",
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Impressum
          </h1>

          <h2 className="mt-8 text-xl font-semibold text-ink">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="mt-3 text-body">
            Nordlicht Fahrzeugtechnik GmbH
            <br />
            Musterstraße 12, 26129 Musterstadt
          </p>

          <h2 className="mt-8 text-xl font-semibold text-ink">
            Vertreten durch
          </h2>
          <p className="mt-3 text-body">Geschäftsführer: Thomas Bergmann</p>

          <h2 className="mt-8 text-xl font-semibold text-ink">Kontakt</h2>
          <p className="mt-3 text-body">
            Telefon: 0441 1234567
            <br />
            Mobil: 0170 1234567
            <br />
            E-Mail: kontakt@nordlicht-fahrzeugtechnik.de
          </p>

          <h2 className="mt-8 text-xl font-semibold text-ink">
            Registereintrag
          </h2>
          <p className="mt-3 text-body">
            Eintragung im Handelsregister.
            <br />
            Registergericht: [Registergericht einfügen]
            <br />
            Registernummer: [HRB-Nummer einfügen]
          </p>

          <h2 className="mt-8 text-xl font-semibold text-ink">
            Umsatzsteuer-ID
          </h2>
          <p className="mt-3 text-body">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
            <br />
            [USt-IdNr. einfügen]
          </p>

          <h2 className="mt-8 text-xl font-semibold text-ink">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="mt-3 text-body">
            Thomas Bergmann
            <br />
            Musterstraße 12, 26129 Musterstadt
          </p>

          <h2 className="mt-8 text-xl font-semibold text-ink">
            EU-Streitschlichtung
          </h2>
          <p className="mt-3 text-body">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind
            nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-ink">
            Haftung für Inhalte
          </h2>
          <p className="mt-3 text-body">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen oder nach
            Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
            hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
            Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
            hiervon unberührt.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-ink">
            Haftung für Links
          </h2>
          <p className="mt-3 text-body">
            Unser Angebot enthält Links zu externen Websites Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter
            verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden
            wir derartige Links umgehend entfernen.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-ink">
            Urheberrecht
          </h2>
          <p className="mt-3 text-body">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge
            Dritter sind als solche gekennzeichnet. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb
            der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
