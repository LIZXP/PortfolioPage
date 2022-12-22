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
import Wave from "react-wavify";

function About() {
  return (
    <div
      name="about"
      className="w-full min-h-screen md:pt-[13rem] text-white bg-[#001122]"
    >
      <div className="mx-auto px-10 pt-[12rem] flex flex-col justify-center max-[360px]:pt-[2rem] w-full max-w-screen-2xl">
        <div className="font-bold md:text-5xl pb-6 text-[#f87171]">
          <p>About</p>
        </div>
        <p className="font-medium text-justify text-xs md:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          cumque doloremque impedit culpa voluptatum ipsam omnis non
          consequuntur iure quis et eos facere quam dolore, excepturi nostrum in
          laudantium ea? Aspernatur odio, doloremque labore sit expedita tempore
          sequi eaque impedit quibusdam dicta fugiat delectus corrupti repellat
          perspiciatis? Aut possimus ut quo? Similique consequuntur est totam
          dolorem unde sed sequi saepe. Ut pariatur error odit, labore, eius
          aliquid, impedit ea laudantium perspiciatis ipsam maxime fugiat
          commodi. Numquam consequatur placeat eum deserunt itaque
          exercitationem maxime nam ea et nulla, quisquam officia odio. Tenetur
          eos nam nisi obcaecati, omnis delectus sapiente laudantium modi ex
          explicabo officia iure laboriosam corporis, rem maxime, optio ipsa
          exercitationem ea quaerat itaque nobis temporibus non! Quae, aliquid
          voluptatum. Consequuntur atque nostrum quidem iste deleniti labore
          quia harum exercitationem! Voluptas perspiciatis illo in eaque totam
          ad, voluptate quis officiis dolores, amet odit sed vero voluptatem
          unde fuga nostrum labore.
        </p>
      </div>
      <div className="flex flex-col relative pt-[2rem] md:pt-[8rem] overflow-y-hidden h-full max-md:sticky max-md:top-[100%]">
        <div className="flex justify-between mx-[5rem] pt-[8rem] md:pt-[8rem]  pb-[6rem] max-[360px]:pb-[3rem] z-10">
          <img
            src={javascript}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[5rem]"
          />
          <img
            src={sass}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[5rem]"
          />
          <img
            src={react}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[5rem]"
          />
          <img
            src={typescript}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[5rem]"
          />
          <img
            src={html}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[5rem]"
          />
          <img
            src={python}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[5rem]"
          />
          <img
            src={redux}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[5rem]"
          />
        </div>
        <div className="flex justify-evenly pb-[2rem] md:pb-[6rem] z-10">
          <img
            src={django}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[5rem]"
          />
          <img
            src={css}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[5rem]"
          />
          <img
            src={mongodb}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[5rem]"
          />
          <img
            src={graphql}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[5rem]"
          />
          <img
            src={tailwind}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[5rem]"
          />
          <img
            src={firebase}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[5rem]"
          />
          <img
            src={next}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[5rem]"
          />
          <img
            src={graphql}
            alt="programming languages"
            className="w-5 md:w-10 xl:w-[5rem]"
          />
        </div>
        <Wave
          fill="#fac662"
          paused={false}
          options={{
            height: 60,
            amplitude: 50,
            speed: 0.2,
            points: 3,
          }}
          className="h-[60rem] absolute z-0"
        />
      </div>
    </div>
  );
}

export default About;
