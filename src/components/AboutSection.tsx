// components/AboutSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AboutCard from "@/components/AboutCard";

// Icons
import { FaGithub } from "react-icons/fa";
import { MdLink } from "react-icons/md";
import { PiGraduationCapLight } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import { GoOrganization } from "react-icons/go";
import { FaDatabase } from "react-icons/fa"; // New icon for Data Science

import projects from "@/data/projects.json";

export default function AboutSection() {
  // Dynamic Experience Calculator
  const calculateExperience = (startDateStr: string): string => {
    const startDate = new Date(startDateStr);
    const today = new Date();

    const diffInMs = today.getTime() - startDate.getTime();
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);

    // If experience is less than a year, display it in months
    if (diffInYears < 1) {
      const diffInMonths = Math.floor(diffInYears * 12);
      return `${diffInMonths} Mos`;
    }

    // Otherwise, display decimal years (e.g., "1.7")
    return `${diffInYears.toFixed(1)}`;
  };

  const aboutMe = [
    {
      icon: <PiGraduationCapLight size={25} color="#FFFFFF" />,
      title: "Education",
      secondTitle: "UST - Computer Science",
      description: "2022 - 2026",
    },
    {
      icon: <FaCode size={25} color="#FFFFFF" />,
      title: "Projects",
      secondTitle: "Full-Stack & Data Science",
      description: "Projects that built futures",
      href: "/portfolio?tab=projects",
      count: projects.length - 1,
    },
    {
      icon: <GoOrganization size={25} color="#FFFFFF" />,
      title: "Full-Stack",
      secondTitle: "Web Systems",
      description: "Since Aug 2024",
      href: "/portfolio?tab=experiences",
      count: calculateExperience("2024-08-01"),
    },
    {
      icon: <FaDatabase size={22} color="#FFFFFF" />,
      title: "Data Science",
      secondTitle: "ML & Analytics",
      description: "Since Feb 2026",
      href: "/portfolio?tab=experiences",
      count: calculateExperience("2026-02-01"),
    },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="w-full max-w-7xl mx-auto h-full font-poppins pt-24 md:pt-32 px-5">
      {/* Introduction */}
      <motion.article
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full flex flex-col items-center gap-10 xl:flex-row xl:items-center xl:gap-x-16"
      >
        <motion.div variants={itemVariants} className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-dirty-white to-dark-green rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <Image
            src="/Nathan.jpg"
            alt="Nathanael Martinez"
            width={500}
            height={500}
            priority
            className="relative aspect-square w-48 h-48 md:w-56 md:h-56 rounded-full object-cover object-center border-2 border-white/10 shadow-2xl"
          />
        </motion.div>

        <div className="w-full flex flex-col items-center xl:items-start text-center xl:text-left">
          <motion.h5
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-black-han text-gray-400 select-none"
          >
            Hello, I am
          </motion.h5>
          <motion.h6
            variants={itemVariants}
            className="uppercase mt-2 font-black-han text-white text-4xl md:text-5xl lg:text-6xl select-none tracking-wide"
          >
            Nathanael A. Martinez
          </motion.h6>
          <motion.div
            variants={itemVariants}
            className="flex gap-4 flex-wrap mt-6 text-white font-medium justify-center xl:justify-start"
          >
            <span className="py-2 px-5 bg-white/10 border border-white/20 rounded-full text-sm backdrop-blur-sm shadow-lg">
              Full-Stack Developer
            </span>
            <span className="py-2 px-5 bg-white/10 border border-white/20 rounded-full text-sm backdrop-blur-sm shadow-lg">
              Data Scientist
            </span>
            <span className="py-2 px-5 bg-white/10 border border-white/20 rounded-full text-sm backdrop-blur-sm shadow-lg">
              Data Analyst (BI)
            </span>
          </motion.div>
        </div>
      </motion.article>

      {/* Description */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="w-full mt-12 lg:mt-16 bg-black-two/40 p-6 md:p-10 rounded-2xl border border-white/5 shadow-xl"
      >
        <p className="text-gray-300 text-justify text-base md:text-lg leading-relaxed select-none">
          Graduating from the University of Santo Tomas in June 2026 with a
          degree in Computer Science, I bring a unique blend of software
          engineering and data analytics expertise. On the development side, I
          deliver scalable, client-focused web applications using the MERN
          stack. 
          <br/>
          <br/>
          On the data side, I hold an Alteryx Designer Core Certification
          and utilize Python, SQL, and Power BI to drive strategic
          decision-making through actionable dashboards. My machine learning
          foundation is grounded in PyTorch, allowing me to develop predictive
          models and integrate modern neural networks into production
          environments. I am passionate about continuous upskilling and thrive
          in technically demanding development cycles.
        </p>

        <div className="w-full flex items-center justify-center lg:justify-end mt-10 gap-6 flex-wrap">
          <Link
            href="https://drive.google.com/drive/folders/1kBe3ymYaxSNbSms9RarbGKDDlMmXvr3s?usp=sharing"
            target="_blank"
            className="group flex items-center text-white gap-x-3 px-6 py-3 w-48 justify-center rounded-xl shadow-lg bg-gradient-to-r from-black-two via-green-gray/80 to-green-gray font-medium hover:scale-105 transition-all border border-white/10"
          >
            <MdLink
              size={24}
              className="group-hover:text-dirty-white transition-colors"
            />{" "}
            Resume
          </Link>
          <Link
            href="https://github.com/Gurlly"
            target="_blank"
            className="group flex items-center text-white gap-x-3 px-6 py-3 w-48 justify-center rounded-xl shadow-lg bg-gradient-to-r from-black-two via-green-gray/80 to-green-gray font-medium hover:scale-105 transition-all border border-white/10"
          >
            <FaGithub
              size={24}
              className="group-hover:text-dirty-white transition-colors"
            />{" "}
            GitHub
          </Link>
        </div>
      </motion.article>

      {/* Experiences Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="w-full grid mt-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-20"
      >
        {aboutMe.map((experience, index) => (
          <motion.div key={index} variants={itemVariants} className="h-full">
            <AboutCard
              icon={experience.icon}
              title={experience.title}
              secondTitle={experience.secondTitle}
              description={experience.description}
              href={experience.href}
              count={experience.count}
            />
          </motion.div>
        ))}
      </motion.section>
    </section>
  );
}
