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

function About() {
  return (
    <div
      name="about"
      className="w-full min-h-screen md:pt-[0rem] text-white bg-[#001122] max-[415px]:pt-[2.4rem] max-[391px]:pt-[2rem] max-[413px]:pt-[2rem] "
    >
      <div className="mx-auto max-[1022px]:px-8 pt-[4rem] max-[413px]:pb-[0rem] pb-[2rem] flex flex-col justify-center max-[360px]:pt-[2rem] w-full max-w-screen-2xl max-[1600px]:pl-[3rem]">
        <div className="font-bold md:text-5xl pb-6 text-[#f87171] p-6 max-[391px]:pt-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-600">
            About
          </p>
        </div>
        <div className="flex flex-row">
          <p className="font-medium text-justify lg:w-[50%] max-[360px]:text-left text-xs md:text-lg max-w-screen-lg pl-6 max-[391px]:pt-0">
            As a full stack developer with a background in financial accounting
            and a passion for streamlining processes, I have the technical
            expertise and real-world business experience necessary to succeed in
            a challenging and dynamic developer role. My technical skills
            include JavaScript, React, and Python, and I have used these
            technologies to build a variety of projects, including a
            user-friendly investment portfolio management application
            (StockOverWatch) using the React and Chartjs frameworks, and a mini
            e-commerce application (Jungle-rails) built with Ruby on Rails. In
            addition to my proficiency in these languages and frameworks, I am
            skilled in using PostgreSQL, Git, and Firebase, and I have
            experience with testing frameworks such as Jest, Storybook, and
            Cypress. In my current role as an accounts payable specialist, I
            have developed VBA scripts that increased the efficiency of client
            disbursement processes by 50%, and I have mentored and trained new
            employees to improve productivity. I am always eager to learn and
            stay up to date on the latest technologies, and I am excited to
            bring my skills and experience to a full stack developer role where
            I can make a meaningful difference for the company.
          </p>
          <div className="home__img ml-[10rem] max-lg:hidden"></div>
        </div>
      </div>
      <div className="flex justify-end flex-col relative lg:pt-[2rem] lg:pb-[4rem] md:pt-[8rem] overflow-y-hidden h-full max-md:sticky max-md:top-[100%]">
        <div className="flex justify-between mx-[5rem] pt-[8rem] md:pt-[8rem]  pb-[2rem] lg:pb-[6rem] max-[390px]:pb-[1rem] max-[360px]:pb-[3rem] z-10">
          <img
            src={javascript}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[3rem] animate-float"
          />
          <img
            src={sass}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[3rem] animate-float animation-delay-2000"
          />
          <img
            src={react}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[3rem] animate-float animation-delay-3000"
          />
          <img
            src={typescript}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[3rem] animate-float"
          />
          <img
            src={html}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[3rem] animate-float animation-delay-2000"
          />
          <img
            src={python}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[3rem] animate-float"
          />
          <img
            src={redux}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[3rem] animate-float animation-delay-2000"
          />
        </div>
        <div className="flex justify-evenly pb-[2rem] md:pb-[6rem] z-10">
          <img
            src={django}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[3rem] animate-float animation-delay-2000"
          />
          <img
            src={css}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[3rem] animate-float animation-delay-3000"
          />
          <img
            src={mongodb}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[3rem] animate-float"
          />
          <img
            src={graphql}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[3rem] animate-float animation-delay-3000"
          />
          <img
            src={tailwind}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[3rem] animate-float animation-delay-2000"
          />
          <img
            src={firebase}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[3rem] animate-float"
          />
          <img
            src={next}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[3rem] animate-float animation-delay-2000"
          />
          <img
            src={apollo}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[3rem] animate-float"
          />
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
          className="h-[30rem] absolute max-[391px]:h-[15rem]  max-[412px]:h-[15rem] z-0"
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#FF5F6D" />
              <stop offset="90%" stopColor="#FFC371" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
    </div>
  );
}

export default About;
