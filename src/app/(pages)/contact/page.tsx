import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "Person",
    name: "Nathanael Martinez",
    alternateName: "Nathanael A. Martinez",
    url: "https://natmartinez.xyz/contact",
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
  title: "Contact",
  description:
    "Get in touch with Nathanael Martinez — freelance software developer and data analyst. Connect for projects, collaborations, or professional inquiries.",
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
    "Contact Me",
    "Inquiries",
  ],
  alternates: {
    canonical: "https://natmartinez.xyz/contact",
  },
  openGraph: {
    title: "Contact | Nathanael Martinez",
    description:
      "Reach out to Nathanael Martinez through the contact page. Whether for freelance software development, data analytics, or collaborative projects, this page makes connecting simple and professional.",
    url: "https://natmartinez.xyz/contact",
  },
};

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />

      <section className="w-full md:container md:mx-auto h-full font-poppins pt-10 md:pt-16">
        <ContactForm />
      </section>
    </>
  );
};

export default page;
