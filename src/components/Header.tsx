"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

// NextJS Components
import Link from "next/link";
import Image from "next/image";

import clsx from "clsx";

// Icons
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean | null>(false);

  // Creating an array of navigation links
  const navigationLinks: { name: string; href: string; id: number }[] = [
    { name: "Home", href: "/", id: 1 },
    { name: "About Me", href: "/about", id: 2 },
    { name: "Portfolio Showcase", href: "/portfolio", id: 3 },
    { name: "Contact", href: "/contact", id: 4 },
  ];

  return (
    <>
      <div className="w-full h-fit fixed top-6 left-0 z-50">
        <header className="w-11/12 mx-auto py-3 px-5 bg-black-two/90 rounded-4xl shadow shadow-dirty-white flex items-center justify-between">
          <Link href={"/"}>
            <Image
              src="/Logo.png"
              alt="Martinez Logo"
              width={600}
              height={250}
              className="w-12"
            />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu Button" className="cursor-pointer">
            <IoMenu color="#FFFFFF" className="size-6" />
          </button>
        </header>
      </div>
    </>
  );
};

export default Header;
