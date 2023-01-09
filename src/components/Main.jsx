import React from "react";
import background from "../assets/bg.svg";
import { HiArrowNarrowRight } from "react-icons/hi";
import mtm from "../assets/astro.png";
import "./title.scss";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Main() {
  return (
    <motion.div
      className="h-screen w-screen overflow-auto scrollbar-hide"
      style={{
        backgroundImage: "url(" + background + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        weight: "100vw",
      }}
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      name="home"
    >
      <div className="mx-auto px-4 flex flex-col items-center justify-center pt-36 max-[360px]:pt-[6rem] md:flex-row md:h-full container flex-shrink">
        <div className="flex flex-col justify-center px-6 max-sm:pb-[6rem] max-[412px]:pb-[2.4rem] max-[360px]:pb-[1rem] max-[391px]:pb-[0rem] h-1/4 max-w-screen-xl lg:w-[53%]">
          <motion.h1
            className="text-2xl lg:text-6xl font-bold"
            id="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hola, I am Peter, <br />
            <motion.span
              id="full-stack"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("A Full Stack Developer")
                    .start()
                    .pauseFor(3000);
                }}
                options={{
                  cursor: "",
                  loop: true,
                }}
              />
            </motion.span>
          </motion.h1>
          <motion.p
            className="font-semibold pt-8 text-sm lg:text-base pb-6 text-white text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Motivated and detail-oriented Full stack developer with expertise in
            JavaScript, React, and Python, seeking a challenging and dynamic
            role where I can use my technical skills and real-world business
            experience to create innovative solutions and drive positive impact.
            Proven ability to streamline processes and prioritize business
            functions, and a passion for continuously learning and staying up to
            date on the latest technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Link
              to="/project"
              className="w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer group bg-gradient-to-r from-[#fba2a2] to-[#f87171] text-xl text-white font-extrabold"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={18} className="ml-2" />
              </span>
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="max-w-screen-lg w-fit lg:w-[45%] md:items-center flex-shrink-[0.5] max-[414px]:w-[86%] max-[360px]:w-[55%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <img
            src={mtm}
            alt="evolution monkey to man"
            className="animate-space"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Main;
