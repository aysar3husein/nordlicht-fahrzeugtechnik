import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Nordlicht Fahrzeugtechnik GmbH",
  description:
    "Datenschutzerklärung der Nordlicht Fahrzeugtechnik GmbH: Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.",
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Datenschutzerklärung
          </h1>

          <h2 className="mt-8 text-xl font-semibold text-ink">
            1. Verantwortlicher
          </h2>
          <p className="mt-3 text-body">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            Nordlicht Fahrzeugtechnik GmbH
            <br />
            Thomas Bergmann
            <br />
            Musterstraße 12, 26129 Musterstadt
            <br />
            E-Mail: kontakt@nordlicht-fahrzeugtechnik.de
          </p>

          <h2 className="mt-8 text-xl font-semibold text-ink">
            2. Allgemeines zur Datenverarbeitung
          </h2>
          <p className="mt-3 text-body">
            Wir verarbeiten personenbezogene Daten unserer Nutzer nur, soweit
            dies zur Bereitstellung einer funktionsfähigen Website sowie
            unserer Inhalte und Leistungen erforderlich ist. Die
            Verarbeitung personenbezogener Daten erfolgt nur mit
            Einwilligung des Nutzers oder auf Grundlage einer anderen
            gesetzlichen Erlaubnis (Art. 6 DSGVO).
          </p>

          <h2 className="mt-8 text-xl font-semibold text-ink">
            3. Ihre Rechte
          </h2>
          <p className="mt-3 text-body">
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
            Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
            Empfänger sowie den Zweck der Datenverarbeitung sowie ein Recht
            auf Berichtigung, Sperrung, Löschung oder Einschränkung der
            Verarbeitung dieser Daten. Ebenso steht Ihnen ein Recht auf
            Datenübertragbarkeit sowie ein Beschwerderecht bei der
            zuständigen Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen
            zum Thema personenbezogene Daten können Sie sich jederzeit über
            die im Impressum aufgeführte Adresse an uns wenden.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-ink">
            4. Erhebung von Daten beim Besuch der Website
          </h2>
          <p className="mt-3 text-body">
            Beim Aufrufen unserer Website werden durch den auf Ihrem
            Endgerät zum Einsatz kommenden Browser automatisch
            Informationen an den Server unserer Website gesendet
            (Server-Logfiles), z. B. Browsertyp, verwendetes
            Betriebssystem, Referrer-URL, Hostname des zugreifenden
            Rechners und Uhrzeit der Serveranfrage. Diese Daten sind nicht
            bestimmten Personen zuordenbar und werden ausschließlich zur
            technischen Bereitstellung und Absicherung der Website
            verwendet.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-ink">
            5. Terminanfrage-Formular
          </h2>
          <p className="mt-3 text-body">
            Über unser Formular &bdquo;Termin anfragen&ldquo; können Sie uns Ihre
            Kontaktdaten sowie Angaben zu Ihrem Anliegen übermitteln. Beim
            Absenden des Formulars öffnet sich Ihr lokal eingerichtetes
            E-Mail-Programm mit einer vorausgefüllten Nachricht an
            kontakt@nordlicht-fahrzeugtechnik.de; die Daten werden dabei über Ihr
            eigenes E-Mail-Konto versendet und nicht direkt über unsere
            Website an uns übertragen oder auf unserem Server gespeichert.
            Die von Ihnen übermittelten Daten (z. B. Name, Telefonnummer,
            Fahrzeugangaben) verwenden wir ausschließlich zur Bearbeitung
            Ihrer Terminanfrage, Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
            DSGVO (vorvertragliche Maßnahme).
          </p>

          <h2 className="mt-8 text-xl font-semibold text-ink">
            6. Google Maps
          </h2>
          <p className="mt-3 text-body">
            Auf unserer Website binden wir eine Karte des Kartendienstes
            Google Maps ein, betrieben von Google Ireland Limited, Gordon
            House, Barrow Street, Dublin 4, Irland (&bdquo;Google&ldquo;). Die
            Karte wird erst geladen, nachdem Sie im Bereich &bdquo;Standort &
            Anfahrt&ldquo; aktiv auf &bdquo;Cookies & externe Medien
            akzeptieren&ldquo; geklickt haben.
            Erst durch diese Einwilligung wird eine Verbindung zu den
            Servern von Google hergestellt, wodurch unter anderem Ihre
            IP-Adresse und weitere Nutzungsdaten an Google übertragen und
            ggf. auch auf Servern in den USA verarbeitet werden können.
            Rechtsgrundlage für diese Verarbeitung ist Ihre Einwilligung
            gemäß Art. 6 Abs. 1 lit. a DSGVO. Ihre Einwilligung können Sie
            jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie die
            entsprechenden Daten in den Einstellungen Ihres Browsers
            löschen (z. B. den lokalen Speicher/localStorage dieser
            Website). Weitere Informationen zum Umgang mit Nutzerdaten
            durch Google finden Sie in der Datenschutzerklärung von Google:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand"
            >
              https://policies.google.com/privacy
            </a>
            .
          </p>

          <h2 className="mt-8 text-xl font-semibold text-ink">
            7. Cookies und lokaler Speicher
          </h2>
          <p className="mt-3 text-body">
            Diese Website verwendet technisch notwendige Daten im lokalen
            Speicher (localStorage) Ihres Browsers, um sich Ihre
            Einwilligung zum Laden der Google-Maps-Karte zu merken, damit
            Sie diese nicht bei jedem Besuch erneut bestätigen müssen.
            Darüber hinaus setzen wir auf dieser Website keine
            Tracking- oder Marketing-Cookies ein.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-ink">
            8. SSL-/TLS-Verschlüsselung
          </h2>
          <p className="mt-3 text-body">
            Diese Seite nutzt aus Sicherheitsgründen eine SSL-/TLS-
            Verschlüsselung, um die Übertragung vertraulicher Inhalte zu
            schützen. Eine verschlüsselte Verbindung erkennen Sie an dem
            Schloss-Symbol in Ihrer Browserzeile.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-ink">
            9. Änderung dieser Datenschutzerklärung
          </h2>
          <p className="mt-3 text-body">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
            damit sie stets den aktuellen rechtlichen Anforderungen
            entspricht oder um Änderungen unserer Leistungen umzusetzen.
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
