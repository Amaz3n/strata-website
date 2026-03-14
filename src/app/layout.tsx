import type { Metadata } from "next";
import { Montserrat, Poppins, DM_Serif_Display, Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

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
  title: "Arc | Residential Construction Software",
  description:
    "Arc System is the connected construction system for residential builders, unifying pipeline, scheduling, financials, and warranty in one platform.",
  keywords: [
    "construction system",
    "residential construction system",
    "construction management",
    "residential construction",
    "builder software",
    "Naples FL",
    "Southwest Florida",
    "home builder",
    "construction software",
  ],
  authors: [{ name: "Arc" }],
  openGraph: {
    title: "Arc | Residential Construction Software",
    description:
      "Residential construction software for connected teams.",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${poppins.variable} ${dmSerifDisplay.variable} ${geist.variable} antialiased transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <SmoothScroll>
            <Navigation />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
