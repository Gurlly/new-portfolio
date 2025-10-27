"use client";

import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";

// NextJS Components
import Link from "next/link";
import Image from "next/image";

import clsx from "clsx";

// Icons
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean | null>(false);

  // Setting the functions for the Navigation Menu Modal
  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  // Creating an array of navigation links
  const navigationLinks: { name: string; href: string; id: number }[] = [
    { name: "Home", href: "/", id: 1 },
    { name: "About Me", href: "/about", id: 2 },
    { name: "Portfolio Showcase", href: "/portfolio", id: 3 },
    { name: "Contact", href: "/contact", id: 4 },
  ];

  return (
    <>
      <div className="w-full h-fit fixed top-8 left-0 z-50">
        <header className="w-11/12 md:container md:mx-auto mx-auto py-3 px-5 md:py-3.5 md:px-6 lg:px-7 lg:py-5 bg-black-two/90 rounded-4xl shadow shadow-dirty-white flex items-center justify-between">
          <Link href={"/"}>
            <Image
              src="/Logo.png"
              alt="Martinez Logo"
              width={600}
              height={250}
              className="w-12"
            />
          </Link>
          <button
            onClick={onOpen}
            aria-label="Menu Button"
            className="cursor-pointer lg:hidden"
          >
            <IoMenu color="#FFFFFF" className="size-6" />
          </button>
          <nav className="hidden lg:flex gap-8 font-poppins text-white text-lg w-fit">
            {navigationLinks.map((link) => (
              <Link key={link.id} href={link.href} className={clsx("font-normal hover:font-semibold", link.href === pathname && "font-semibold underline underline-offset-8")}>
                {" "}
                {link.name}{" "}
              </Link>
            ))}
          </nav>
        </header>
      </div>

      {/* Activating the Nav Modal */}
      {isOpen && (
        <NavMenuModal
          links={navigationLinks}
          onClose={onClose}
          currentPath={pathname}
        />
      )}
    </>
  );
};

// Creating the Modal for the navigation links

// Types of the Props for the NavMenuModal component
type NavMenuModalProps = {
  links: { name: string; href: string; id: number }[];
  onClose: () => void;
  currentPath?: string;
};

const NavMenuModal = ({
  links,
  onClose,
  currentPath = "",
}: NavMenuModalProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        className="w-dvw h-dvh fixed top-0 left-0 bg-black/50 z-50 flex justify-center items-center"
        onClick={onClose}
      >
        {/* Modal Contents */}
        <div
          className="w-5/6 h-5/6 md:max-w-xl md:max-h-[45rem] bg-black-two rounded-4xl shadow-dirty-white/30 shadow-md flex flex-col justify-between p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full h-full flex flex-col gap-8">
            {/* Modal Header */}
            <div className="w-full h-fit flex justify-between items-center">
              <Image
                src="/Logo.png"
                alt="Martinez Logo"
                width={600}
                height={250}
                className="w-12 user-select-none"
              />
              <button
                className="cursor-pointer"
                onClick={onClose}
                aria-label="Close Button"
              >
                <IoIosClose color="#FFFFFF" size={30} />
              </button>
            </div>
            {/* Navigation Links */}
            <nav>
              {links.map((link) => (
                <ul
                  key={link.id}
                  className="flex flex-col font-poppins text-white text-lg md:text-xl"
                >
                  <li>
                    <Link
                      href={link.href}
                      className={clsx(
                        link.href === currentPath && "font-semibold",
                        link.href !== currentPath && "font-normal"
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                  {link.id !== 4 ? (
                    <hr className="border border-white my-3 md:my-5" />
                  ) : null}
                </ul>
              ))}
            </nav>
          </div>
          <div>
            <Link
              href="https://www.linkedin.com/in/nathanael-martinez-1ab5b2280/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <FaLinkedin color="#0a66c2" size={33} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
