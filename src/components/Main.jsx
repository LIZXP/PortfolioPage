import React from "react";
import background from "../assets/bg.svg";
import { HiArrowNarrowRight } from "react-icons/hi";
import mtm from "../assets/eve.svg";

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
      <div className="mx-auto px-4 flex flex-col items-center justify-center h-full text-black md:flex-row max-w-screen-2xl">
        <div className="flex flex-col justify-center px-6 h-2/4 max-w-screen-lg md:w-2/4">
          <h2 className="text-5xl md:text-7xl font-bold pb-5">
            I am a Full Stack Developer
          </h2>
          <p className="text-black py-4 text-justify font-medium">
            With a unique blend of technical expertise and real-world business
            experience. My skills include proficiency in a variety of languages
            and frameworks, as well as experience working with systems and SQL
            and NoSQL databases. I am passionate about using my skills to
            streamline and automate processes in apps, saving users time and
            prioritizing focus on business functions.
          </p>
          <div>
            <button>
              Portfolio
              <span>
                <HiArrowNarrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="max-w-screen-lg px-6 md:w-2/4">
          <img src={mtm} alt="evolution monkey to man picture" />
        </div>
      </div>
    </div>
  );
}

export default Main;
