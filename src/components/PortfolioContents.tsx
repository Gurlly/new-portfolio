"use client";

import { useRouter, useSearchParams } from "next/navigation";

// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PortfolioCard from "@/components/PortfolioCard";
import TechStackContainer from "./TechStackContainer";

// Lists
import projects from "@/data/projects.json";
import experiences from "@/data/experiences.json";
import certificates from "@/data/certificates.json";

// Tech Stack Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import {
  SiShadcnui,
  SiFastapi,
  SiMysql,
  SiMongodb,
  SiScikitlearn,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiJupyter,
} from "react-icons/si";

const PortfolioContents = ({ defaultTab }: { defaultTab?: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Updates the tab without refreshing the page
  const onChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", value);
    router.replace(`/portfolio?${params.toString()}`);
  };

  // Tech Stacks
  const techStacks = [
    {
      title: "Front-End:",
      technologies: [
        {
          icon: FaHtml5,
          color: "#dc4521",
        },
        {
          icon: FaCss3Alt,
          color: "#244ad9",
        },
        {
          icon: IoLogoJavascript,
          color: "#f7e01d",
        },
        {
          icon: FaReact,
          color: "#01d3f4",
        },
        {
          icon: RiNextjsFill,
          color: "#000",
        },
        {
          icon: FaBootstrap,
          color: "#740eee",
        },
        {
          icon: RiTailwindCssFill,
          color: "#04b0cd",
        },
        {
          icon: TbBrandRedux,
          color: "#683eae",
        },
        {
          icon: SiShadcnui,
          color: "#fff",
        },
      ],
    },
    {
      title: "Back-End:",
      technologies: [
        {
          icon: FaNodeJs,
          color: "#4d9b3b",
        },
        {
          icon: FaPython,
          color: "#326d9b",
        },
        {
          icon: RiVercelFill,
          color: "#000",
        },
        {
          icon: SiFastapi,
          color: "#019285",
        },
        {
          icon: FaJava,
          color: "#7598e1",
        },
        {
          icon: SiMysql,
          color: "#42749d",
        },
        {
          icon: SiMongodb,
          color: "#56ad42",
        },
      ],
    },
    {
      title: "Data Science:",
      technologies: [
        {
          icon: SiScikitlearn,
          color: "#f09538",
        },
        {
          icon: SiPytorch,
          color: "#e8492b",
        },
        {
          icon: SiPandas,
          color: "#326d9b",
        },
        {
          icon: SiNumpy,
          color: "#4aa6c9",
        },
        {
          icon: SiJupyter,
          color: "#ed7520",
        },
      ],
    },
  ];

  return (
    <>
      <Tabs
        defaultValue={defaultTab}
        className="w-full"
        onValueChange={onChange}
      >
        <TabsList
          className="mb-8 md:mb-14 xl:mb-20 rounded-lg border bg-transparent
              flex w-full flex-wrap gap-2 justify-center h-fit p-2"
        >
          <TabsTrigger value="projects" className="text-dirty-white">
            Projects
          </TabsTrigger>
          <TabsTrigger value="experiences" className="text-dirty-white">
            Experiences
          </TabsTrigger>
          <TabsTrigger value="certificate" className="text-dirty-white">
            Certifications
          </TabsTrigger>
          <TabsTrigger value="stack" className="text-dirty-white">
            Tech Stacks
          </TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <article className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-7">
            {projects.map((project, key) => (
              <PortfolioCard
                key={key}
                title={project?.title}
                imageUrl={project?.imageUrl}
                previewHref={project?.previewHref}
                githubLink={project?.githubLink}
              >
                <div className="text-dirty-white font-light text-sm text-justify mt-1.5">
                  <p>{project?.description}</p>
                  <p className="mt-3">
                    <span className="font-semibold">Skills:</span>{" "}
                    {project?.skills.join(", ")}
                  </p>
                </div>
              </PortfolioCard>
            ))}
          </article>
        </TabsContent>
        <TabsContent value="experiences">
          <article className="w-full flex flex-col gap-10 md:gap-14 lg:gap-16">
            {experiences.map((exp, key) => (
              <div key={key} className="flex flex-col gap-5 select-none">
                <div>
                  <h3 className="text-xl md:text-3xl lg:text-4xl text-dirty-white font-black-han uppercase">
                    {exp.title}
                  </h3>
                  <h4 className="font-medium text-beige text-sm mt-1.5 lg:mt-2.5 md:text-base lg:text-lg">
                    {exp.position}
                  </h4>
                  <p className=" italic font-light text-neutral-300 text-sm md:text-base lg:text-lg">
                    {exp.year}
                  </p>
                </div>
                <p className="text-justify max-w-4xl xl:max-w-5xl text-sm font-light text-dirty-white md:text-base lg:text-lg">
                  {exp.description}
                </p>
              </div>
            ))}
          </article>
        </TabsContent>
        <TabsContent value="certificate">
          <article className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-7">
            {certificates.map((cert, key) => (
              <PortfolioCard
                key={key}
                title={cert?.title}
                imageUrl={cert?.imageUrl}
                previewHref={cert?.credentialLink}
                githubLink=""
              >
                <div className="text-dirty-white font-light text-sm text-justify mt-1.5">
                  <p className=" italic">{cert?.company}</p>
                  <p className="mt-3">
                    <span className="font-semibold">Skills:</span>{" "}
                    {cert?.skills.join(", ")}
                  </p>
                </div>
              </PortfolioCard>
            ))}
          </article>
        </TabsContent>
        <TabsContent value="stack">
          <article className="w-full flex flex-col gap-5">
            {techStacks.map((stack, key) => (
              <TechStackContainer
                title={stack.title}
                technologies={stack.technologies}
                key={key}
              />
            ))}
          </article>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default PortfolioContents;
