import ContactForm from "@/components/ContactForm"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Form",
  description:
    "Get in touch with Nathanael through an AI-powered contact form. Whether for collaborations, internships, or project discussions, reach out easily and securely.",
  keywords: [
    "Contact Nathanael",
    "AI Contact Form",
    "Backend Developer",
    "Machine Learning",
    "FastAPI",
    "Next.js",
    "Portfolio",
    "Philippines",
    "Collaboration",
    "Internship",
  ],
  alternates: {
    canonical: "https://natmartinez.xyz/contact",
  },
};

const page = () => {

  return (
    <>
        <section className="w-full md:container md:mx-auto h-full font-poppins pt-10 md:pt-16">
            <ContactForm/>
        </section>
    </>
  )
}

export default page
