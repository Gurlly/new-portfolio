import type { Metadata, Viewport } from "next";
import { Poppins, Black_Han_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ChatWidget from "@/components/ChatWidget";

// Analytics
import { Analytics } from "@vercel/analytics/next";

// Declaring the fonts (Poppins and Black_Han_Sans)
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

const siteUrl = "https://natmartinez.xyz";
const siteName = "Nathanael Martinez";
const siteTitle = `${siteName} | Data Analyst & Full-Stack Developer`;
const siteDescription =
  "Portfolio of Nathanael Martinez, a data analyst and full-stack developer building data-driven solutions and modern web applications with Python, SQL, Power BI, Alteryx, Next.js, and more.";

// Page metadata
export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  authors: [{ name: "Nathanael Martinez" }],
  creator: "Nathanael Martinez",
  publisher: "Nathanael Martinez",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteName} — Data Analyst & Full-Stack Developer`,
      },
    ],
  },
  formatDetection: {
    telephone: false,
  },
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
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1E201E",
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
        <Analytics />
        {/* Adding the Header Component */}
        <Header />
        <main className="w-full min-h-dvh flex bg-gradient-to-bl from-black-two via-dark-green to-black-two py-24 px-5 lg:py-36">
          {children}
        </main>
        <ChatWidget />
      </body>
    </html>
  );
}
