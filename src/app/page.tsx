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
      <section className="w-full flex items-center font-poppins">
        <article className="w-full full flex flex-col justify-center items-center gap-y-7 md:gap-y-10 lg:gap-y-12">
          {/* Links */}
          <div className="flex items-center gap-x-7 lg:gap-x-10 xl:gap-x-16">
            {socialLinks.map((social, index) => (
              <Link
                href={social.href}
                key={index}
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-3.5 lg:p-4 xl:p-5 rounded-full border-2 border-dirty-green/80 shadow-md shadow-dirty-green hover:scale-110 hover:bg-black-two/60 hover:shadow-dirty-white/80 hover:shadow transition-all ease-in-out cursor-pointer"
              >
                {social.icon}
              </Link>
            ))}
          </div>
          {/* Name */}
          <h1 className="max-w-xl lg:max-w-2xl font-black-han text-5xl md:text-[4rem] lg:text-7xl xl:text-[5.5rem] text-center leading-normal bg-clip-text text-transparent bg-gradient-to-r from-dirty-white to-beige uppercase select-none">
            Nathanael Martinez
          </h1>

          {/* Links */}
          <div className="w-fit flex items-center gap-x-7 lg:gap-x-12 xl:gap-x-16 flex-wrap justify-center gap-y-5 md:gap-y-0">
            <Link
              href="/about"
              className="flex items-center text-white gap-x-3 px-2 py-3 xl:px-3 xl:py-4 w-48 xl:w-56 justify-center rounded-lg shadow shadow-dirty-white bg-linear-90 from-black-two via-green-gray/50 to-green-gray font-medium md:text-lg xl:text-xl hover:scale-105 transition-transform ease-in-out"
            >
              <MdOutlinePerson size={28} color="#FFFFFF" /> About Me
            </Link>
            <Link
              href="https://drive.google.com/drive/folders/1l9vN3TWjthNEg_4J_iOXnWWY8hPdYO8W?usp=sharing"
              target="_blank"
              className="flex items-center text-white gap-x-3 px-2 py-3 xl:px-3 xl:py-4 w-48 xl:w-56 justify-center rounded-lg shadow shadow-dirty-white bg-linear-90 from-black-two via-green-gray/50 to-green-gray font-medium md:text-lg xl:text-xl hover:scale-105 transition-transform ease-in-out"
            >
              <MdLink size={28} color="#FFFFFF" /> CV
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
