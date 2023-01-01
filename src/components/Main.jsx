import React from "react";
import background from "../assets/bg.svg";
import { HiArrowNarrowRight } from "react-icons/hi";
import mtm from "../assets/astro.png";
import "./title.scss";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

function Main() {
  return (
    <div
      className="h-screen w-screen"
      style={{
        backgroundImage: "url(" + background + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        weight: "100vw",
      }}
      name="home"
    >
      <div className="mx-auto px-4 flex flex-col items-center justify-center pt-36 max-[360px]:pt-[6rem] md:flex-row md:h-full container">
        <div className="flex flex-col justify-center px-6 max-sm:pb-[6rem] max-[412px]:pb-[2.4rem] max-[360px]:pb-[1rem] h-1/4 max-w-screen-xl lg:w-[53%]">
          <h1 className="text-2xl lg:text-6xl font-bold" id="title">
            Hola, I'am Peter, <br />
            <span id="full-stack">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("A Full Stack Developer").start();
                }}
                options={{
                  cursor: "",
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p className="font-semibold pt-8 text-sm lg:text-base pb-6 text-white text-justify">
            Motivated and detail-oriented Full stack developer with expertise in
            JavaScript, React, and Python, seeking a challenging and dynamic
            role where I can use my technical skills and real-world business
            experience to create innovative solutions and drive positive impact.
            Proven ability to streamline processes and prioritize business
            functions, and a passion for continuously learning and staying up to
            date on the latest technologies.
          </p>
          <div>
            <Link
              to="project"
              smooth
              duration={600}
              className="w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer group bg-gradient-to-r from-[#fba2a2] to-[#f87171] text-xl text-white font-extrabold"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={18} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
        <div className="max-w-screen-lg w-fit lg:w-[33%] md:items-center flex-shrink-[0.5] max-[412px]:w-[86%] max-[360px]:w-[55%]">
          <img
            src={mtm}
            alt="evolution monkey to man"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
