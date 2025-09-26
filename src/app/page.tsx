import Link from "next/link";

// Icons
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  const socialLinks: { icon: React.ReactNode; href: string }[] = [
    {
      icon: <FaLinkedinIn color="#FFFFFF" size={33} />,
      href: "https://www.linkedin.com/in/nathanael-martinez-1ab5b2280/",
    },
    {
      icon: <FaGithub color="#FFFFFF" size={33} />,
      href: "https://github.com/Gurlly",
    },
    {
      icon: <MdEmail color="#FFFFFF" size={33} />,
      href: "mailto:jp.martinez.nathanael123@gmail.com",
    },
  ];

  return (
    <>
      <section className="w-full h-full flex items-center">
        <article className="w-full h-fit flex flex-col justify-center items-center gap-5 ">
          {/* Links */}
          <div className="flex items-center gap-10">
            {socialLinks.map((social, index) => (
              <Link
                href={social.href}
                key={index}
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-4 rounded-full border-2 border-dirty-green/80 shadow-md shadow-dirty-green hover:scale-110 hover:bg-black-two/60 hover:shadow-dirty-white/80 hover:shadow transition-all ease-linear cursor-pointer"
              >
                {social.icon}
              </Link>
            ))}
          </div>
          {/* Name */}
          <h1 className="font-black-han text-5xl text-center leading-normal bg-clip-text text-transparent bg-gradient-to-r from-dirty-white to-beige uppercase">
            Nathanael Martinez
          </h1>
        </article>
      </section>
    </>
  );
}
