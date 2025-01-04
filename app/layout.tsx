import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Static path for the logo image
const logoPath = "/images/logo.png"; // Path relative to the public folder

export const metadata: Metadata = {
  title: "SJD Roofing & Exterior Cleaning | Coventry Roofers", // Default title for the website
  description:
    "Trusted roofing and exterior cleaning services in Coventry and the West Midlands. Quality roof repairs, cleaning, and maintenance by SJD Roofing.",
  openGraph: {
    type: "website",
    title: "SJD Roofing & Exterior Cleaning | Coventry Roofers",
    description:
      "Trusted roofing and exterior cleaning services in Coventry and the West Midlands. Quality roof repairs, cleaning, and maintenance by SJD Roofing.",
    url: "https://www.sjdroofing.com",
    images: [logoPath], // Path to the image in the public folder
  },
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/images/logo.png" type="image/png" />

        {/* Trustpilot Domain Verification */}
        <meta
          name="trustpilot-one-time-domain-verification-id"
          content="c7f2fb0b-0dd6-4948-b594-33f47fb4a75a"
        />

        {/* Additional Metadata */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}