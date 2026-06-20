import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Cinnamon Life Digital Discovery Platform — Project Proposal",
  description:
    "AI-powered, mobile-first concierge and guided-discovery experience for Cinnamon Life. Phase 1 proposal covering AI Concierge, Guided Tours, and Design Archive.",
  keywords: [
    "Cinnamon Life",
    "Digital Discovery Platform",
    "AI Concierge",
    "Guided Tours",
    "Design Archive",
    "BLE Beacons",
    "Hospitality Technology",
  ],
  openGraph: {
    title: "Cinnamon Life Digital Discovery Platform",
    description:
      "AI-powered concierge and guided-discovery experience — Phase 1 Proposal",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
