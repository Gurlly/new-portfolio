import React from "react";

import Image from "next/image";
import Link from "next/link";

// Icons
import { GoLinkExternal } from "react-icons/go";
import { IoLogoGithub } from "react-icons/io";

type Props = {
  title: string;
  imageUrl: string;
  previewHref: string;
  githubLink: string;
  children: React.ReactNode;
};

const PortfolioCard = ({
  title,
  imageUrl,
  previewHref,
  githubLink,
  children,
}: Props) => {
  return (
    <>
      <div className="w-full p-4 md:p-5 bg-gradient-to-tr from-black-two/90 to-green-gray/90 shadow-dirty-white/50 shadow rounded-lg hover:shadow-lg transition-all ease-linear duration-500 hover:scale-105 ">
        <Image
          width={600}
          height={400}
          src={imageUrl}
          alt={title}
          className="w-full h-auto rounded-lg"
        />
        <div className="mt-5">
          <h2 className="text-xl font-bold text-dirty-white">{title}</h2>
          {children}
          <div className="w-full flex items-center justify-between mt-7">
            {
              // Handle preview and github link conditionally
              previewHref && (
                <Link
                  className="flex items-center gap-x-2 text-blue-500 text-sm"
                  href={previewHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GoLinkExternal size={20} /> Preview
                </Link>
              )
            }

            {githubLink && (
              <Link
                className="px-5 py-2 text-sm bg-black/80 rounded-lg text-dirty-white flex items-center gap-x-2"
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoGithub size={20} /> GitHub
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
