import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://denalitech.ai"),
  title: {
    default: "Denali Tech | AI-Powered Software Solutions",
    template: "%s | Denali Tech"
  },
  description:
    "Denali Tech builds AI systems, automation workflows, geospatial applications, cloud platforms, SaaS products, and modern software for growing organizations.",
  keywords: [
    "AI consulting",
    "software development",
    "workflow automation",
    "GIS applications",
    "SaaS development",
    "analytics dashboards",
    "cloud software"
  ],
  openGraph: {
    title: "Denali Tech | AI-Powered Software Solutions",
    description:
      "AI, automation, geospatial, SaaS, and full-stack software consulting for modern businesses.",
    url: "https://denalitech.ai",
    siteName: "Denali Tech",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Denali Tech | AI-Powered Software Solutions",
    description:
      "Build scalable digital products, AI workflows, and enterprise platforms with Denali Tech."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
