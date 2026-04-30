"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Icons
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail, MdOutlinePerson, MdLink } from "react-icons/md";

export default function HeroSection() {
  const socialLinks = [
    {
      icon: <FaLinkedinIn color="#FFFFFF" size={28} />,
      href: "https://www.linkedin.com/in/nathanael-martinez-1ab5b2280/",
    },
    {
      icon: <FaGithub color="#FFFFFF" size={28} />,
      href: "https://github.com/Gurlly",
    },
    {
      icon: <MdEmail color="#FFFFFF" size={28} />,
      href: "mailto:jp.martinez.nathanael123@gmail.com",
    },
  ];

  // Animation variants for a staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <section className="w-full flex items-center font-poppins pt-20">
      <motion.article 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col justify-center items-center gap-y-7 md:gap-y-10 lg:gap-y-12"
      >
        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex items-center gap-x-7 lg:gap-x-9 xl:gap-x-12">
          {socialLinks.map((social, index) => (
            <Link
              href={social.href}
              key={index}
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-3.5 lg:p-4 rounded-full border-2 border-dirty-green/80 shadow-md shadow-dirty-green hover:scale-110 hover:bg-black-two/60 hover:shadow-dirty-white/80 transition-all ease-in-out cursor-pointer"
            >
              {social.icon}
            </Link>
          ))}
        </motion.div>

        {/* Name with animated gradient text */}
        <motion.h1 
          variants={itemVariants}
          className="max-w-xl lg:max-w-3xl font-black-han text-5xl md:text-[4rem] lg:text-7xl xl:text-[5rem] text-center leading-tight bg-clip-text text-transparent bg-gradient-to-r from-dirty-white via-gray-300 to-beige uppercase select-none tracking-tight"
        >
          Nathanael Martinez
        </motion.h1>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex items-center gap-x-6 lg:gap-x-10 flex-wrap justify-center gap-y-5 md:gap-y-0">
          <Link
            href="/about"
            className="group flex items-center text-white gap-x-3 px-6 py-3.5 w-48 xl:w-56 justify-center rounded-xl shadow-lg shadow-black/50 bg-gradient-to-r from-black-two via-green-gray/80 to-green-gray font-medium md:text-lg hover:scale-105 transition-all ease-in-out border border-white/10 hover:border-white/30"
          >
            <MdOutlinePerson className="size-6 group-hover:text-dirty-white transition-colors" /> 
            About Me
          </Link>
          <Link
            href="https://drive.google.com/drive/folders/1kBe3ymYaxSNbSms9RarbGKDDlMmXvr3s?usp=sharing"
            target="_blank"
            className="group flex items-center text-white gap-x-3 px-6 py-3.5 w-48 xl:w-56 justify-center rounded-xl shadow-lg shadow-black/50 bg-gradient-to-r from-black-two via-green-gray/80 to-green-gray font-medium md:text-lg hover:scale-105 transition-all ease-in-out border border-white/10 hover:border-white/30"
          >
            <MdLink className="size-6 group-hover:text-dirty-white transition-colors" /> 
            Resume
          </Link>
        </motion.div>
      </motion.article>
    </section>
  );
}