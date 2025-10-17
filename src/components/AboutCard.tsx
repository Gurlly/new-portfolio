import React from "react";

type CardProps = {
  icon: React.ReactElement;
  title?: string;
  secondTitle?: string;
  description: string;
  href?: string;
  count?: number;
};

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
      <div className="w-full rounded-lg p-3.5 shadow shadow-dirty-white bg-dirty-white/30 font-poppins">
        <div className="w-full flex items-center justify-between">
          <div className="w-fit flex items-center gap-x-3">
            <span className="p-2 bg-green-gray/80 rounded-full">{icon}</span>
            <h3 className="text-2xl uppercase font-black-han text-dirty-white">{title}</h3>
          </div>
          <p className="text-2xl font-black-han text-dirty-white">{count}</p>
        </div>
        
      </div>
    </>
  );
};

export default AboutCard;
