import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Load Inter font with subsets
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Improve performance by swapping font immediately when loaded
});

// Define metadata for SEO
export const metadata: Metadata = {
  title: "Luxury Furniture Collections",
  description:
    "Explore our exclusive furniture collections crafted with the finest materials",
  keywords: "luxury furniture, collections, interior design, home decor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        {/* Include the site styles directly */}
        <link rel="stylesheet" href="/css/site.min.css" />
      </head>
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
