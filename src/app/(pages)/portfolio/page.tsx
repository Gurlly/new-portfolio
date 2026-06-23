import PortfolioContents from "@/components/PortfolioContents";

import { Metadata } from "next";

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "PortfolioPage",
  mainEntity: {
    "@type": "Person",
    name: "Nathanael Martinez",
    alternateName: "Nathanael A. Martinez",
    url: "https://natmartinez.xyz/portfolio",
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
  title: "Portfolio",
  description:
    "Explore Nathanael Martinez’s portfolio showcasing full‑stack development, data analytics, AI integration, and secure system design projects.",
  keywords: [
    "Data Analyst",
    "Full-Stack Developer",
    "University of Santo Tomas",
    "Power BI",
    "Alteryx",
    "Python",
    "SQL",
    "Next.js",
    "Philippines",
    "Certifications",
    "Tech Stack",
  ],
  alternates: {
    canonical: "https://natmartinez.xyz/portfolio",
  },
  openGraph: {
    title: "Portfolio | Nathanael Martinez",
    description:
      "Showcasing full‑stack development, data analytics, and AI integration projects by Nathanael Martinez. Explore secure, scalable systems, HIPAA‑compliant medical apps, and innovative web solutions with automated notifications and chatbot engagement.",
    url: "https://natmartinez.xyz/portfolio",
  },
};

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  const defaultTab = (params.tab as string) ?? "projects";

  console.log(defaultTab);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />

      <section className="w-full md:container md:mx-auto h-full font-poppins pt-10 md:pt-16">
        <div className="w-full h-fit">
          <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase font-black-han bg-clip-text text-transparent bg-gradient-to-r from-dirty-white to-beige select-none">
            My Portfolio
          </h1>
          <hr className="w-full border-t border-dirty-white my-4" />
        </div>

        <article className="mt-5 w-full">
          <PortfolioContents defaultTab={defaultTab} />
        </article>
      </section>
    </>
  );
};

export default page;
