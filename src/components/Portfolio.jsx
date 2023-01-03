import React from "react";
import stock from "../assets/Stock.mp4";
import jun from "../assets/Jun.mp4";
import sche from "../assets/Sche.mp4";

function Portfolio() {
  const ports = [{ src: stock }, { src: jun }, { src: sche }];
  return (
    <div
      name="project"
      className="w-screen text-[#f87171] pt-[4rem] md:pt-[8rem] lg:pt-[5rem] max-sm:mx-0 bg-[#012] max-[1022px]:pl-[0rem] max-[1600px]:pl-[3rem]"
    >
      <div className="max-w-screen-2xl p-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-1">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out my recent projects</p>
        </div>
        <div className="grid sm:grid-cols-2 max-[420px]:gap-y-[1rem] md:gap-y-[3rem] md:px-[9rem] sm:px-0">
          {ports.map(({ src }, i) => (
            <div
              key={i}
              className="shadow-md sm:w-[17rem] md:w-[18rem] lg:w-[24rem] xl:w-[33rem] shadow-gray-600 rounded-lg duration-200 hover:scale-105"
            >
              <video src={src} loop autoPlay muted className="rounded-md" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
