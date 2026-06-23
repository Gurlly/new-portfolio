
import { Metadata } from "next";
import AboutSection from "@/components/AboutSection";

// Structured data — tells search engines this page is Nathanael's profile/about page
const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Nathanael Martinez",
    alternateName: "Nathanael A. Martinez",
    url: "https://natmartinez.xyz/about",
    jobTitle: "Data Analyst & Full-Stack Developer",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Santo Tomas",
    },
    sameAs: [
      "https://www.linkedin.com/in/nathanael-martinez-1ab5b2280/",
      "https://github.com/Gurlly",
    ],
  },
};

export const metadata: Metadata = {
  // Resolves to "About | Nathanael Martinez" via the root layout's title template
  title: "About",
  description:
    "Learn more about Nathanael Martinez — a Computer Science graduate from the University of Santo Tomas working as a data analyst and full-stack developer, with experience in Python, SQL, Power BI, Alteryx, Next.js, and MongoDB.",
  keywords: [
    "About Nathanael Martinez",
    "Data Analyst",
    "Full-Stack Developer",
    "University of Santo Tomas",
    "Power BI",
    "Alteryx",
    "Python",
    "SQL",
    "Next.js",
    "Philippines",
  ],
  alternates: {
    canonical: "https://natmartinez.xyz/about",
  },
  openGraph: {
    title: "About | Nathanael Martinez",
    description:
      "Computer Science graduate turned data analyst and full-stack developer — here's my background, skills, and experience.",
    url: "https://natmartinez.xyz/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
      <AboutSection />
    </>
  );
}
