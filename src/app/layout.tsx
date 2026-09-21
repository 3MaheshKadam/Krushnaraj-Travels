import type { Metadata } from "next";
import { Baloo_2, Work_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Krushnaraj Travels | Karad Car & Tempo Traveller Hire",
  description:
    "Krushnaraj Travels runs a mixed fleet — Innova Crysta, Fortuner, Kia Carens, Ertiga, Swift Dzire, Force Urbania and Tempo Traveller — out of Karad for airport transfers, weddings, corporate travel and pan-India outstation trips.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${baloo.variable} ${workSans.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-ink">
        {children}
      </body>
    </html>
  );
}
