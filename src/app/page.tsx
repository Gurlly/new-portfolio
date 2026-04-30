import Link from "next/link";

import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

// Icons
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail, MdOutlinePerson, MdLink } from "react-icons/md";

// Page metadata
export const metadata: Metadata = {
  title: "Nathanael Martinez",
  description:
    "Portfolio of Nathanael, a Computer Science student specializing in backend development, machine learning, and scalable web systems. Explore projects in FastAPI, Next.js, and ML-powered solutions.",
  keywords: [
    "Nathanael",
    "Portfolio",
    "Backend Developer",
    "Machine Learning",
    "FastAPI",
    "Next.js",
    "Python",
    "Data Science",
    "API Design",
    "Philippines",
  ],
  alternates: {
    canonical: "https://natmartinez.xyz",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  }
};

export default function Home() {
  const socialLinks: { icon: React.ReactNode; href: string }[] = [
    {
      icon: <FaLinkedinIn color="#FFFFFF" size={33} />,
      href: "https://www.linkedin.com/in/nathanael-martinez-1ab5b2280/",
    },
    {
      icon: <FaGithub color="#FFFFFF" size={33} />,
      href: "https://github.com/Gurlly",
    },
    {
      icon: <MdEmail color="#FFFFFF" size={33} />,
      href: "mailto:jp.martinez.nathanael123@gmail.com",
    },
  ];

  return (
    <>
      <HeroSection/>
    </>
  );
}
