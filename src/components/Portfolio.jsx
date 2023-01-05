import React from "react";
import stock from "../assets/Stock.mp4";
import jun from "../assets/Jun.mp4";
import sche from "../assets/Sche.mp4";

function Portfolio() {
  const ports = [
    {
      src: stock,
      tech: [
        "React",
        "JavaScript",
        "SaSS",
        "Tailwind",
        "Chartjs",
        "Axios",
        "FireBase",
        "Finnhub API",
      ],
      disc: "StockOverWatch is a user-friendly software application that enables users to manage a simple investment portfolio without the risk of losing real currency. The application's front end is built using the React and Chartjs frameworks, and it utilizes the Finnhub API to retrieve current and historical stock data. The backend is handled using the Firebase platform.",
      git: "https://github.com/LIZXP/StockOverWatch/tree/main/stockoverwatch",
      site: "https://stockoverwatch.netlify.app/",
    },
    {
      src: jun,
      tech: ["Ruby", "Rails", "Stripe API", "PostgreSQL", "Bootstrap"],
      disc: "A mini e-commerce application built with Ruby on Rails that allows visitors to view, purchase, and review products. Email receipts are sent upon a successful order that uses the Stripe API for secure transactions.",
      git: "https://github.com/LIZXP/jungle-rails",
      site: "",
    },
    {
      src: sche,
      tech: [
        "React",
        "JavaScript",
        "CSS",
        "Axios",
        "Jest",
        "Cypress",
        "Storybook",
      ],
      disc: "Interview Scheduler is a single-page application (SPA) that allows users to book technical interviews between students and mentors. The front end of this project is built with React and makes requests to an API to fetch and store appointment data from a database.",
      git: "https://github.com/LIZXP/scheduler",
      site: "",
    },
  ];
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
          {ports.map(({ src, tech, disc, git, site }, i) => (
            <div
              key={i}
              className="shadow-md sm:w-[17rem] md:w-[18rem] lg:w-[24rem] xl:w-[33rem] shadow-gray-600 rounded-lg duration-200 hover:scale-105"
            >
              <video src={src} loop autoPlay muted className="rounded-md" />
              <div className="flex flex-wrap justify-start mt-6">
                {tech.map((d) => (
                  <p className="flex justify-center items-center border-2 border-rose-500 text-xs hover:scale-110 duration-200 text-white m-1 w-[5rem] h-[1.2rem] font-semibold">
                    {d}
                  </p>
                ))}
              </div>
              <div className="flex items-center justify-center">
                {site ? (
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125">
                    <a href={site} target="_blank">
                      Demo
                    </a>
                  </button>
                ) : null}
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125">
                  <a href={git} target="_blank">
                    Code
                  </a>
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
