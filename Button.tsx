import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nordlicht Fahrzeugtechnik GmbH – Freie Kfz-Werkstatt in Musterstadt",
  description:
    "Nordlicht Fahrzeugtechnik GmbH: Ihre freie Kfz-Werkstatt in Musterstadt. Inspektion, Diagnose, Bremsen-Service, Reifenwechsel und mehr – mit 4,9 von 5 Sternen bei Google.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${lexend.variable} ${sourceSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
