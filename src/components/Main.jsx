import React from "react";
import background from "../assets/bg.svg";
import { HiArrowNarrowRight } from "react-icons/hi";
import mtm from "../assets/eve.svg";
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
      <div className="mx-auto px-4 flex flex-col items-center justify-center h-full text-black md:flex-row">
        <div className="w-1/6 h-screen hidden items-start md:flex">
          <div className="h-10 flex">
            <img src={javascript} alt="" className="mr-10" />
            <img src={css} alt="" className="mr-10" />
            <img src={sass} alt="" className="mr-10" />
            <img src={react} alt="" className="mr-10" />
          </div>
          <div className="h-10 flex">
            <img src={typescript} alt="" className="mr-10" />
            <img src={html} alt="" className="mr-10" />
            <img src={python} alt="" className="mr-10" />
            <img src={redux} alt="" className="mr-10" />
          </div>
        </div>
        <div className="flex flex-col justify-center px-6 h-2/4 max-w-screen-lg md:w-1/4">
          <h2 className="text-6xl md:text-5xl font-bold">
            I am a Full Stack Developer
          </h2>
          <div>
            <button>
              Projects
              <span>
                <HiArrowNarrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="max-w-screen-lg px-6 md:w-1/4">
          <img src={mtm} alt="evolution monkey to man" />
        </div>
        <div className="h-screen hidden items-start w-1/6 md:flex">
          <div className="h-10 flex">
            <img src={django} alt="" className="mr-10" />
            <img src={css} alt="" className="mr-10" />
            <img src={mongodb} alt="" className="mr-10" />
            <img src={graphql} alt="" className="mr-10" />
          </div>
          <div className="h-10 flex">
            <img src={tailwind} alt="" className="mr-10" />
            <img src={firebase} alt="" className="mr-10" />
            <img src={next} alt="" className="mr-10" />
            <img src={graphql} alt="" className="mr-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
