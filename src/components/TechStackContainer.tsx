import React from "react";
import { IconType } from "react-icons";

type Props = {
  title: string; // Title
  // Technology Icons
  technologies: {
    icon: IconType;
    color: string;
  }[];
};

const TechStackContainer = ({ title, technologies }: Props) => {
  return (
    <>
      <div className="w-full md:w-9/12 md:mx-auto bg-black-two/80 hover:bg-black-two/90 transition-[background] duration-150 ease-linear rounded-xl px-5 py-7">
        <h3 className="font-black-han uppercase text-2xl lg:text-3xl text-dirty-white select-none">
          {title}
        </h3>
        <div className="w-full mt-5 grid grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center select-none">
          {technologies.map((tech, key) => (
            <tech.icon key={key} className="size-14 lg:size-16" color={tech.color} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStackContainer;
