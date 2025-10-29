import React from "react";

import Link from "next/link";

type CardProps = {
  icon: React.ReactElement;
  title?: string;
  secondTitle?: string;
  description: string;
  href?: string;
  count?: number;
};

import { GoLinkExternal } from "react-icons/go";

const AboutCard = ({
  icon,
  title,
  secondTitle,
  description,
  href,
  count,
}: CardProps) => {
  return (
    <>
      <div className="w-full min-h-36 lg:min-h-40 rounded-lg p-3.5 shadow shadow-dirty-white bg-dirty-white/30 font-poppins hover:scale-105 transition-transform ease-linear duration-300 flex flex-col justify-between">
        <div className="w-full flex items-center justify-between">
          <div className="w-fit flex items-center gap-x-3">
            <span className="p-2 bg-green-gray/80 rounded-full">{icon}</span>
            <h3 className="text-2xl uppercase font-black-han text-dirty-white">
              {title}
            </h3>
          </div>
          <p className="text-2xl font-black-han text-dirty-white">{count}</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-dirty-white xl:text-xl">
            {secondTitle}
          </h4>
          <div className="w-full mt-0.5 flex items-center justify-between">
            <p className="text-sm font-light text-dirty-white xl:text-base">{description}</p>
            {href && (
              <Link href={href}>
                <GoLinkExternal size={17} color={"#F5F5F5"} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
