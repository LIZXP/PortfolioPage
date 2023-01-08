import React from "react";
import stock from "../assets/Stock.mp4";
import jun from "../assets/Jun.mp4";
import sche from "../assets/Sche.mp4";
import { GiSpiderWeb } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

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
      tech: [
        "Ruby",
        "Rails",
        "Stripe API",
        "PostgreSQL",
        "Bootstrap",
        "CSS",
        "Cypress",
        "RSpec",
      ],
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
    <motion.div
      name="project"
      className="w-screen text-[#f87171] pt-[6rem] md:pt-[8rem] lg:pt-[5rem] max-sm:mx-0 bg-[#012] max-[1022px]:pl-[0rem] max-[1600px]:pl-[3rem]"
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-screen-2xl p-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-1">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out my recent projects</p>
        </div>
        <div className="grid w-full sm:grid-cols-2 max-[420px]:gap-y-[1rem] md:gap-[3rem] pr-[2rem]">
          {ports.map(({ src, tech, disc, git, site }, i) => (
            <div
              key={i}
              className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 w-full relative"
            >
              <video src={src} loop autoPlay muted className="rounded-md" />
              <div className="flex flex-wrap justify-start mt-6">
                {tech.map((d, i) => (
                  <p
                    className="flex justify-center items-center border-2 border-[#f87171] text-xs hover:scale-110 duration-200 text-white m-1 w-[5rem] h-[1.2rem] font-semibold"
                    key={i}
                  >
                    {d}
                  </p>
                ))}
              </div>
              <div className="flex justify-center">
                {site ? (
                  <button className="px-6 py-3 m-4 duration-200 hover:scale-125">
                    <a href={site} target="_blank" rel="noreferrer">
                      <GiSpiderWeb size={30} />
                    </a>
                  </button>
                ) : null}
                <button className="px-6 py-3 m-4 duration-200 hover:scale-125">
                  <a href={git} target="_blank" rel="noreferrer">
                    <FaGithub size={30} />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Portfolio;
