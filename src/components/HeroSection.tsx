"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  Variants,
} from "framer-motion";

// Icons
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail, MdOutlinePerson, MdLink } from "react-icons/md";

// The two identities that make up Nathanael's profile — shown as a cycling line under his name
const ROLES = ["Data Analyst", "Data Scientist", "Full-Stack Developer"];

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const socialLinks = [
    {
      icon: <FaLinkedinIn color="#FFFFFF" size={28} />,
      href: "https://www.linkedin.com/in/nathanael-martinez-1ab5b2280/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub color="#FFFFFF" size={28} />,
      href: "https://github.com/Gurlly",
      label: "GitHub",
    },
    {
      icon: <MdEmail color="#FFFFFF" size={28} />,
      href: "mailto:jp.martinez.nathanael123@gmail.com",
      label: "Email",
    },
  ];

  // Animation variants for a staggered entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: shouldReduceMotion ? 0 : 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <section className="relative w-full flex items-center justify-center font-poppins pt-16 md:pt-20 overflow-hidden">
      {/* Ambient background accents — quiet, on-palette, contained to the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-20 -left-16 w-64 h-64 md:w-96 md:h-96 rounded-full bg-dirty-green/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full bg-beige/10 blur-3xl" />
      </div>

      <motion.article
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col justify-center items-center gap-y-6 md:gap-y-8 lg:gap-y-10 px-4"
      >
        {/* Status Pill */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-x-2 px-4 py-1.5 rounded-full border border-dirty-green/40 bg-white/5 text-xs md:text-sm text-dirty-white/80 tracking-wide"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-beige opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full size-2 bg-beige" />
          </span>
          Open to new opportunities
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-x-6 sm:gap-x-7 lg:gap-x-9 xl:gap-x-12"
        >
          {socialLinks.map((social, index) => (
            <Link
              href={social.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 sm:p-3.5 lg:p-4 rounded-full border-2 border-dirty-green/80 shadow-md shadow-dirty-green hover:scale-110 hover:bg-black-two/60 hover:shadow-dirty-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beige/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black-two transition-all ease-in-out cursor-pointer"
            >
              {social.icon}
            </Link>
          ))}
        </motion.div>

        {/* Name with animated gradient text */}
        <motion.h1
          variants={itemVariants}
          className="max-w-[18ch] lg:max-w-3xl font-black-han text-4xl sm:text-5xl md:text-[4rem] lg:text-7xl xl:text-[5rem] text-center leading-tight bg-clip-text text-transparent bg-gradient-to-r from-dirty-white via-gray-300 to-beige uppercase select-none tracking-tight"
        >
          Nathanael Martinez
        </motion.h1>

        {/* Role Cycler — the duality of the profile, in motion */}
        <motion.div
          variants={itemVariants}
          className="h-7 md:h-8 flex items-center justify-center overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={ROLES[roleIndex]}
              initial={{ y: shouldReduceMotion ? 0 : 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: shouldReduceMotion ? 0 : -16, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="font-medium text-base md:text-lg text-beige tracking-wide"
            >
              {ROLES[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Bio line */}
        <motion.p
          variants={itemVariants}
          className="max-w-[26ch] md:max-w-xl text-center text-sm md:text-base text-gray-300/90 leading-relaxed"
        >
          Turning raw data into clear decisions and ideas into full-stack
          products — from ETL pipelines to production-ready web apps.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-x-6 lg:gap-x-10 flex-wrap justify-center gap-y-4 md:gap-y-0 mt-2"
        >
          <Link
            href="/about"
            className="group flex items-center text-white gap-x-3 px-6 py-3.5 w-44 sm:w-48 xl:w-56 justify-center rounded-xl shadow-lg shadow-black/50 bg-gradient-to-r from-black-two via-green-gray/80 to-green-gray font-medium md:text-lg hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beige/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black-two transition-all ease-in-out border border-white/10 hover:border-white/30"
          >
            <MdOutlinePerson className="size-6 group-hover:text-dirty-white transition-colors" />
            About Me
          </Link>
          <Link
            href="https://drive.google.com/drive/folders/1kBe3ymYaxSNbSms9RarbGKDDlMmXvr3s?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center text-white gap-x-3 px-6 py-3.5 w-44 sm:w-48 xl:w-56 justify-center rounded-xl shadow-lg shadow-black/50 bg-gradient-to-r from-black-two via-green-gray/80 to-green-gray font-medium md:text-lg hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beige/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black-two transition-all ease-in-out border border-white/10 hover:border-white/30"
          >
            <MdLink className="size-6 group-hover:text-dirty-white transition-colors" />
            Resume
          </Link>
        </motion.div>
      </motion.article>
    </section>
  );
}
