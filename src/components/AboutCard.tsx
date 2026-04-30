// components/AboutCard.tsx
import React from "react";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";

type CardProps = {
  icon: React.ReactElement;
  title?: string;
  secondTitle?: string;
  description: string;
  href?: string;
  count?: number | string; 
};

const AboutCard = ({ icon, title, secondTitle, description, href, count }: CardProps) => {
  return (
    <div className="w-full min-h-36 lg:min-h-40 rounded-xl p-5 shadow-lg shadow-black/40 bg-gradient-to-br from-dirty-white/10 to-dirty-white/5 border border-white/5 font-poppins hover:scale-[1.02] transition-all ease-out duration-300 flex flex-col justify-between group">
      <div className="w-full flex items-start justify-between">
        <div className="w-fit flex items-center gap-x-3">
          <span className="p-2.5 bg-green-gray/80 rounded-lg shadow-inner group-hover:bg-green-gray transition-colors">
            {icon}
          </span>
          <h3 className="text-xl lg:text-2xl uppercase font-black-han text-dirty-white tracking-wide">
            {title}
          </h3>
        </div>
        <p className="text-2xl lg:text-3xl font-black-han text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          {count}
        </p>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-semibold text-white/90 xl:text-xl">
          {secondTitle}
        </h4>
        <div className="w-full mt-1 flex items-center justify-between">
          <p className="text-sm font-light text-white/60 xl:text-base">
            {description}
          </p>
          {href && (
            <Link href={href} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <GoLinkExternal size={18} color={"#F5F5F5"} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;