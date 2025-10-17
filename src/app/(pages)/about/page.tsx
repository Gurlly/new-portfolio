import AboutCard from "@/components/AboutCard";
import Image from "next/image";
import Link from "next/link";

// Icons
import { FaGithub } from "react-icons/fa";
import { MdLink } from "react-icons/md";

// Card Icons
import { PiGraduationCapLight } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import { GoOrganization } from "react-icons/go";

// Projects are stored in a JSON file
import projects from "@/data/projects.json";

const page = () => {
  const calculateYearsOfExperience = (): number => {
    const today: Date = new Date();
    const year: number = today.getFullYear(); // Extract the current year

    return year - 2024; // 2024 Is the year I started my career
  };

  const aboutMe = [
    {
      icon: <PiGraduationCapLight size={25} color="#FFFFFF" />,
      title: "The University of Santo Tomas",
      description: "2022 - 2026",
    },
    {
      icon: <FaCode size={25} color="#FFFFFF" />,
      title: "Projects",
      description: "Projects that built futures",
      href: "/portfolio",
      count: projects.length - 1, // Gets the length to show dynamic values
    },
    {
      icon: <GoOrganization size={25} color="#FFFFFF" />,
      title: "Years of Experiences",
      description: "Projects that built futures",
      href: "/portfolio",
      count: calculateYearsOfExperience(),
    },
  ];

  return (
    <>
      <section className="w-full h-full font-poppins pt-10">
        {/* Introduction */}
        <article className="w-full flex flex-col items-center gap-7">
          <Image
            src="/Nathan.jpg"
            alt="Nathanael Martinez"
            width={500}
            height={500}
            className="w-52 h-52 rounded-full border-dirty-green/80 shadow-md shadow-dirty-green hover:scale-110 transition-transform ease-in-out"
          />
          <div className="w-full">
            <h5 className="text-3xl font-black-han bg-clip-text text-transparent bg-gradient-to-r from-dirty-white to-beige select-none">
              Hello, I am
            </h5>
            <h6 className="uppercase mt-2 font-black-han text-dirty-white text-xl">
              Nathanael Martinez
            </h6>
            <div className="w-full flex gap-x-3 flex-wrap mt-5 text-white font-light">
              <p className="py-1.5 px-3.5 border border-beige rounded-full text-sm hover:shadow hover:shadow-beige/50 transition-shadow ease-in-out">
                Full-Stack Developer
              </p>
              <p className="py-1.5 px-3.5 border border-beige rounded-full text-sm hover:shadow hover:shadow-beige/50 transition-shadow ease-in-out">
                Data Scientist
              </p>
            </div>
          </div>
        </article>

        {/* Description */}
        <article className="w-full mt-7 text-white text-justify text-sm">
          <p>
            I’m a Computer Science major specializing in Data Science, with a
            unique blend of full-stack development and machine learning
            expertise that allows me to build intelligent, end-to-end systems. I
            design and develop secure, scalable web applications using React
            (Next.js) and Node.js, and I’m equally skilled in curating datasets,
            applying statistical methods, and deploying ML models into
            production. My full-stack capabilities enable me to integrate these
            models directly into real-world platforms—serving predictions via
            FastAPI backends and connecting them to responsive frontends with
            clean UI and robust authentication. This combination empowers me to
            deliver data-driven solutions that are not only technically sound
            but also user-friendly, maintainable, and optimized for performance.
            I thrive in fast-paced environments where clarity, adaptability, and
            strategic thinking are key, and I’m passionate about creating
            systems that learn, scale, and solve meaningful problems.
          </p>
          <div className="w-fit flex items-center mt-10 gap-x-7 lg:gap-x-12 xl:gap-x-16 flex-wrap justify-center gap-y-5 md:gap-y-0">
            <Link
              href="https://drive.google.com/drive/folders/1l9vN3TWjthNEg_4J_iOXnWWY8hPdYO8W?usp=sharing"
              target="_blank"
              className="flex items-center text-white gap-x-3 px-2 py-2.5 xl:px-3 xl:py-3.5 w-36 xl:w-56 justify-center rounded-lg shadow shadow-dirty-white bg-linear-90 from-black-two via-green-gray/50 to-green-gray font-medium md:text-lg xl:text-xl hover:scale-105 transition-transform ease-in-out"
            >
              <MdLink size={28} color="#FFFFFF" /> CV
            </Link>
            <Link
              href="/about"
              className="flex items-center text-white gap-x-3 px-2 py-2.5 xl:px-3 xl:py-3.5 w-36 xl:w-56 justify-center rounded-lg shadow shadow-dirty-white bg-linear-90 from-black-two via-green-gray/50 to-green-gray font-medium md:text-lg xl:text-xl hover:scale-105 transition-transform ease-in-out"
            >
              <FaGithub size={28} color="#FFFFFF" /> GitHub
            </Link>
          </div>
        </article>

        {/* Experiences */}
        <section className="w-full grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AboutCard icon={aboutMe[1].icon} title={aboutMe[1].title} description={aboutMe[1].description} href={aboutMe[1].href} count={aboutMe[1].count}/>
        </section>
      </section>
    </>
  );
};

export default page;
