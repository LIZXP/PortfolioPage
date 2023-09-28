import React from "react";
import django from "../assets/django.svg";
import css from "../assets/css.svg";
import firebase from "../assets/firebase.svg";
import graphql from "../assets/graphql.svg";
import html from "../assets/html.svg";
import javascript from "../assets/javascript.svg";
import mongodb from "../assets/mongodb.svg";
import next from "../assets/next.svg";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import sass from "../assets/sass.svg";
import tailwind from "../assets/tailwind.svg";
import typescript from "../assets/typescript.svg";
import python from "../assets/python.svg";
import apollo from "../assets/apollo.svg";
import Wave from "react-wavify";
import "./hero.scss";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function About() {
  const icon1 = [
    { icon: javascript, style: "w-5 md:w-10 xl:w-[3rem] animate-float" },
    {
      icon: sass,
      style: "w-5 md:w-10 xl:w-[3rem] animate-float animation-delay-2000",
    },
    {
      icon: react,
      style: "w-5 md:w-10 xl:w-[3rem] animate-float animation-delay-3000",
    },
    { icon: typescript, style: "w-5 md:w-10 xl:w-[3rem] animate-float" },
    {
      icon: html,
      style: "w-5 md:w-10 xl:w-[3rem] animate-float animation-delay-2000",
    },
    { icon: python, style: "w-5 md:w-10 xl:w-[3rem] animate-float" },
    {
      icon: redux,
      style: "w-5 md:w-10 xl:w-[3rem] animate-float animation-delay-2000",
    },
  ];
  const icon2 = [
    {
      icon: django,
      style: "w-5 md:w-10 xl:w-[3rem] animate-float animation-delay-2000",
    },
    {
      icon: css,
      style: "w-5 md:w-10 xl:w-[3rem] animate-float animation-delay-3000",
    },
    { icon: mongodb, style: "w-5 md:w-10 xl:w-[3rem] animate-float" },
    {
      icon: graphql,
      style: "w-5 md:w-10 xl:w-[3rem] animate-float animation-delay-3000",
    },
    {
      icon: tailwind,
      style: "w-5 md:w-10 xl:w-[3rem] animate-float animation-delay-2000",
    },
    { icon: firebase, style: "w-5 md:w-10 xl:w-[3rem] animate-float" },
    {
      icon: next,
      style: "w-5 md:w-10 xl:w-[3rem] animate-float animation-delay-2000",
    },
    { icon: apollo, style: "w-5 md:w-10 xl:w-[3rem] animate-float" },
  ];
  const isLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  return (
    <div className="grid grid-cols-12 grid-rows-3 w-full h-screen relative overflow-hidden pt-[6rem] m-auto bg-[#001122]">
      <div className="order-1 col-start-2 col-end-8 row-span-2 overflow-auto items-center justify-center pl-[10%] pr-[3%] scrollbar-hide max-lg:col-span-12 max-lg:px-6">
        <p className="text-4xl font-bold inline w-[11%] border-b-4 border-gray-500 text-[#f87171]">
          About
        </p>
        <motion.p
          className="py-6 max-sm:text-xs text-justify max-[361px]:text-[0.65rem] xl:text-xl text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          As a Software Developer specialized in both front-end and back-end technologies, I offer a balanced skill set that covers JavaScript, React, Redux, C#, and .NET. With a demonstrated history of cross-functional teamwork and agile development methodologies, I have a proven ability to craft scalable solutions and RESTful APIs. In my current role at TechPOS International Inc., I led the redesign of the Point of Sale interface using React and Material UI, significantly improving user experience and operational efficiency. I've also designed and implemented dynamic .NET endpoints complemented with Azure WebJobs, automating processes and cutting manual work time by 90%. I have been recognized for my close collaboration with QA and support teams, which has led to a 15% increase in customer satisfaction. My unique blend of technical acumen and practical experience in project management makes me an ideal candidate to contribute to a challenging new software development role.
        </motion.p>
      </div>
      {isLaptop && (
        <div className="order-2 col-start-8 col-span-5 row-span-2 m-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="home__img max-lg:hidden flex items-center justify-center m-auto mt-[5%]"
          ></motion.div>
        </div>
      )}

      <motion.div
        className="order-3 col-span-12 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="flex flex-row absolute bottom-20 z-10 w-full justify-evenly">
          {icon1.map(({ icon, style }, i) => (
            <img
              src={icon}
              key={i}
              alt="programming languages"
              className={style}
            />
          ))}
        </div>
        <div className="flex flex-row absolute justify-evenly bottom-6 z-10 w-full">
          {icon2.map(({ icon, style }, i) => (
            <img
              src={icon}
              key={i}
              alt="programming languages"
              className={style}
            />
          ))}
        </div>
        <Wave
          fill="url(#gradient)"
          paused={false}
          options={{
            height: 60,
            amplitude: 50,
            speed: 0.2,
            points: 3,
          }}
          className="absolute bottom-0 h-full overflow-auto z-0"
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#FF5F6D" />
              <stop offset="90%" stopColor="#FFC371" />
            </linearGradient>
          </defs>
        </Wave>
      </motion.div>
    </div>
  );
}

export default About;
