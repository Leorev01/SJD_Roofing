import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Static path for the logo image
const logoPath = "/images/logo.png"; // This path is relative to the public folder

export const metadata: Metadata = {
  title: "Coventry Roofers and Cleaners", // Default title for the website
  description: "Welcome to our website. We provide quality services and products.",
  openGraph: {
    type: "website",
    title: "SJD Exterior cleaning and roofing",
    description: "We provide quality services and products to our clients.",
    url: "https://www.yourdomain.com", // Replace with your website URL
    images: [logoPath], // Use the path to the image in the public folder
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
        {/* Favicon Link */}
        <link rel="icon" href="/images/logo.png" type="image/png" />
        {/* Other metadata */}
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
