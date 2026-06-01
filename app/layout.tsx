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
  metadataBase: new URL("https://denalixtech.ai"),
  title: {
    default: "Denalix Tech | Better Business Systems",
    template: "%s | Denalix Tech"
  },
  description:
    "Denalix Tech helps businesses reduce manual work, organize operations, improve customer experiences, and launch useful digital tools.",
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
    title: "Denalix Tech | Better Business Systems",
    description:
      "Practical digital systems, automation, dashboards, custom tools, and product builds for modern businesses.",
    url: "https://denalixtech.ai",
    siteName: "Denalix Tech",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Denalix Tech | Better Business Systems",
    description:
      "Reduce manual work, organize operations, and build useful digital tools with Denalix Tech."
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
