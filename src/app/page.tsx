import Link from "next/link";

// Icons
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail, MdOutlinePerson, MdLink } from "react-icons/md";

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
      <section className="w-full h-full flex items-center font-poppins">
        <article className="w-full h-fit flex flex-col justify-center items-center gap-7">
          {/* Links */}
          <div className="flex items-center gap-7">
            {socialLinks.map((social, index) => (
              <Link
                href={social.href}
                key={index}
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-3.5 rounded-full border-2 border-dirty-green/80 shadow-md shadow-dirty-green hover:scale-110 hover:bg-black-two/60 hover:shadow-dirty-white/80 hover:shadow transition-all ease-linear cursor-pointer"
              >
                {social.icon}
              </Link>
            ))}
          </div>
          {/* Name */}
          <h1 className="max-w-xl font-black-han text-5xl md:text-6xl text-center leading-normal bg-clip-text text-transparent bg-gradient-to-r from-dirty-white to-beige uppercase">
            Nathanael Martinez
          </h1>

          {/* Links */}
          <div className="w-fit flex items-center gap-x-7 flex-wrap justify-center gap-y-5">
            <Link
              href="/about"
              className="flex items-center text-white gap-x-3 px-2 py-3 w-48 justify-center rounded-lg shadow shadow-dirty-white bg-linear-90 from-black-two via-green-gray/50 to-green-gray font-medium md:text-lg hover:scale-105 transition-transform ease-in-out"
            >
              <MdOutlinePerson size={28} color="#FFFFFF" /> About Me
            </Link>
            <Link
              href="https://drive.google.com/drive/folders/1l9vN3TWjthNEg_4J_iOXnWWY8hPdYO8W?usp=sharing"
              target="_blank"
              className="flex items-center text-white gap-x-3 px-2 py-3 w-48 justify-center rounded-lg shadow shadow-dirty-white bg-linear-90 from-black-two via-green-gray/50 to-green-gray font-medium md:text-lg hover:scale-105 transition-transform ease-in-out"
            >
              <MdLink size={28} color="#FFFFFF" /> CV
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
