// app/about/page.tsx
import { Metadata } from "next";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "About Nathanael Martinez | Full-Stack & ML",
  description:
    "Learn more about Nathanael, a Computer Science student at the University of Santo Tomas specializing in backend development, machine learning, and scalable web systems.",
  keywords: [
    "About Nathanael",
    "Backend Developer",
    "Machine Learning",
    "Data Science",
    "Next.js",
    "Python",
    "API Design",
    "Philippines",
  ],
  alternates: {
    canonical: "https://natmartinez.xyz/about",
  },
};

export default function AboutPage() {
  return <AboutSection />;
}