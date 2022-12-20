import React from "react";
import background from "../assets/bg.svg";
import { HiArrowNarrowRight } from "react-icons/hi";
import mtm from "../assets/eve.svg";
import "./title.scss";

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
      <div className="mx-auto px-4 flex flex-col items-center justify-center h-full md:flex-row">
        <div className="flex flex-col justify-center px-6 h-1/4 max-w-screen-lg md:w-2/5">
          <h1 className="text-5xl md:text-6xl font-bold" id="title">
            Hola, I'am Peter, <br />
            <span id="full-stack">a Full Stack Developer</span>
          </h1>
          <p className="font-semibold pt-8 pb-6 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            mollitia veniam, quod, ab qui in quisquam, et impedit unde
            accusantium pariatur at. Magni temporibus voluptatum perspiciatis
            earum dolorum ipsam harum!
          </p>
          <div>
            <button className="text-white">
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
      </div>
    </div>
  );
}

export default Main;
