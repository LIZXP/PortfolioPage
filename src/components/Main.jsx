import React from "react";
import background from "../assets/bg.svg";
import { HiArrowNarrowRight } from "react-icons/hi";
import mtm from "../assets/eve.svg";
import "./title.scss";
import Typewriter from "typewriter-effect";

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
      <div className="mx-auto px-4 flex flex-col items-center justify-center pt-36 md:flex-row md:h-full">
        <div className="flex flex-col justify-center px-6 max-sm:pb-[6rem] h-1/4 max-w-screen-xl lg:w-[40%]">
          <h1 className="text-2xl lg:text-6xl font-bold" id="title">
            Hola, I'am Peter, <br />
            <span id="full-stack">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("A Full Stack Developer").start();
                }}
                options={{
                  cursor: "",
                }}
              />
            </span>
          </h1>
          <p className="font-semibold pt-8 text-sm lg:text-base pb-6 text-white text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            mollitia veniam, quod, ab qui in quisquam, et impedit unde
            accusantium pariatur at. Magni temporibus voluptatum perspiciatis
            earum dolorum ipsam harum!
          </p>
          <div>
            <button className="w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer group bg-gradient-to-r from-[#fba2a2] to-[#f87171] text-xl text-white font-extrabold">
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={18} className="ml-2" />
              </span>
            </button>
          </div>
        </div>
        <div className="max-w-screen-lg w-fit lg:w-1/4 md:items-center">
          <img src={mtm} alt="evolution monkey to man" />
        </div>
      </div>
    </div>
  );
}

export default Main;
