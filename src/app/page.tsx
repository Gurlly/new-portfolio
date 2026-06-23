import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

// Structured data so search engines understand who Nathanael is and what he does
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nathanael Martinez",
  url: "https://natmartinez.xyz",
  jobTitle: "Data Analyst & Full-Stack Developer",
  email: "mailto:jp.martinez.nathanael123@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/nathanael-martinez-1ab5b2280/",
    "https://github.com/Gurlly",
  ],
  knowsAbout: [
    "Data Analysis",
    "Python",
    "SQL",
    "Power BI",
    "Alteryx",
    "Machine Learning",
    "Next.js",
    "React",
    "FastAPI",
    "MongoDB",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "PH",
  },
};

// Page metadata (title is inherited from the root layout's default)
export const metadata: Metadata = {
  description:
    "Portfolio of Nathanael Martinez — a data analyst and full-stack developer from the Philippines. Explore projects spanning data analytics (Python, SQL, Power BI, Alteryx) and full-stack web development (Next.js, MongoDB, FastAPI).",
  keywords: [
    "Nathanael Martinez",
    "Portfolio",
    "Data Analyst",
    "Full-Stack Developer",
    "Data Analytics",
    "Power BI",
    "Alteryx",
    "Python",
    "SQL",
    "Next.js",
    "Machine Learning",
    "Philippines",
  ],
  alternates: {
    canonical: "https://natmartinez.xyz",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <HeroSection />
    </>
  );
}
