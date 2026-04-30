"use client";

import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

// Icons
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);

  const navigationLinks = [
    { name: "Home", href: "/", id: 1 },
    { name: "About Me", href: "/about", id: 2 },
    { name: "Portfolio", href: "/portfolio", id: 3 },
    { name: "Contact", href: "/contact", id: 4 },
  ];

  return (
    <>
      {/* Animated Header Drop-in */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-full h-fit fixed top-6 left-0 z-40"
      >
        <header className="w-11/12 md:max-w-4xl mx-auto py-3 px-6 lg:px-8 lg:py-4 bg-black-two/80 backdrop-blur-md rounded-full shadow-lg shadow-black/50 border border-white/10 flex items-center justify-between">
          <Link href={"/"}>
            <Image
              src="/Logo.png"
              alt="Martinez Logo"
              width={48} 
              height={48}
              priority
              className="w-10 h-auto md:w-12 hover:scale-105 transition-transform"
            />
          </Link>
          <button
            onClick={onOpen}
            aria-label="Menu Button"
            className="cursor-pointer lg:hidden"
          >
            <IoMenu color="#FFFFFF" className="size-7" />
          </button>
          <nav className="hidden lg:flex gap-8 font-poppins text-gray-300 text-sm md:text-base w-fit">
            {navigationLinks.map((link) => (
              <Link 
                key={link.id} 
                href={link.href} 
                className={clsx(
                  "relative py-1 transition-colors hover:text-white", 
                  link.href === pathname && "text-white font-medium"
                )}
              >
                {link.name}
                {/* Framer Motion active link underline indicator */}
                {link.href === pathname && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>
        </header>
      </motion.div>

      {/* Animated Mobile Modal */}
      <AnimatePresence>
        {isOpen && (
          <NavMenuModal links={navigationLinks} onClose={onClose} currentPath={pathname} />
        )}
      </AnimatePresence>
    </>
  );
}

// Modal Component
type NavMenuModalProps = {
  links: { name: string; href: string; id: number }[];
  onClose: () => void;
  currentPath?: string;
};

const NavMenuModal = ({ links, onClose, currentPath = "" }: NavMenuModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-dvw h-dvh fixed top-0 left-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="w-[90%] max-w-sm h-[80%] bg-gradient-to-b from-black-two to-[#1a1a1a] rounded-3xl shadow-2xl border border-white/10 flex flex-col justify-between p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex flex-col gap-10">
          <div className="w-full flex justify-between items-center">
            <Image
              src="/Logo.png"
              alt="Martinez Logo"
              width={48}
              height={48}
              className="w-10 h-auto"
            />
            <button className="cursor-pointer" onClick={onClose} aria-label="Close Button">
              <IoIosClose color="#FFFFFF" size={36} className="hover:text-gray-400 transition-colors" />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={onClose}
                className={clsx(
                  "font-poppins text-2xl tracking-wide transition-colors",
                  link.href === currentPath ? "text-white font-semibold" : "text-gray-400 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <Link
            href="https://www.linkedin.com/in/nathanael-martinez-1ab5b2280/"
            target="_blank"
            referrerPolicy="no-referrer"
            className="inline-block hover:scale-110 transition-transform"
          >
            <FaLinkedin color="#0a66c2" size={36} />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};