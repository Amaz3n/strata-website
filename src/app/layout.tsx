import type { Metadata } from "next";
import { Montserrat, Poppins, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Arc | Project Management for Residential Construction",
  description:
    "Comprehensive project management software engineered for residential construction. From lead to warranty, every phase organized under one system.",
  keywords: [
    "construction management",
    "project management",
    "residential construction",
    "builder software",
    "Naples FL",
    "Southwest Florida",
    "home builder",
    "construction software",
  ],
  authors: [{ name: "Arc" }],
  openGraph: {
    title: "Arc | Project Management for Residential Construction",
    description:
      "Comprehensive project management software engineered for residential construction.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${poppins.variable} ${dmSerifDisplay.variable} antialiased`}>
        <SmoothScroll>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
