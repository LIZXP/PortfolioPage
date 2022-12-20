import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
  const links = [
    {
      child: (
        <>
          LinkedIn
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/peterzxli",
      style: "rounded-tr-md",
    },
    {
      child: (
        <>
          GitHub
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/LIZXP",
    },
    {
      child: (
        <>
          Email
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:Peter.xli@hotmail.com",
    },
    {
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/PeterLiResume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ child, href, style, download }, index) => (
          <li
            key={index}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-[#f87171] hover:ml-[-10px] hover:rounded-md duration-300 text-[1.2rem] font-extrabold" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
