import type { Metadata } from "next";
import { Poppins, Black_Han_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

// Analytics
import { Analytics } from "@vercel/analytics/next"

// Declaring the fonts (Poppings and Black_Han_Sans)
const poppinsSans = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const blackHanSans = Black_Han_Sans({
  variable: "--font-black-han",
  subsets: ["latin"],
  weight: ["400"],
});

// Page metadata
export const metadata: Metadata = {
  authors: [{ name: "Nathanael Martinez" }],
  creator: "Nathanael Martinez",
  publisher: "Nathanael Martinez",
  metadataBase: new URL("https://natmartinez.xyz"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans.variable} ${blackHanSans.variable} antialiased relative top-0 left-0`}
      >
        <Analytics/>
        {/* Adding the Header Component */}
        <Header />
        <main className="w-full min-h-dvh flex bg-gradient-to-bl from-black-two via-dark-green to-black-two py-24 px-5 lg:py-36">
          {children}
        </main>
      </body>
    </html>
  );
}
