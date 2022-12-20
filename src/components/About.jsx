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

function About() {
  return (
    <div>
      <div className="h-screen w-1/4 hidden items-start md:flex">
        <div className="h-10 flex">
          <img src={javascript} alt="programming languages" className="mr-10" />
          <img src={css} alt="programming languages" className="mr-10" />
          <img src={sass} alt="programming languages" className="mr-10" />
          <img src={react} alt="programming languages" className="mr-10" />
        </div>
        <div className="h-10 flex">
          <img src={typescript} alt="programming languages" className="mr-10" />
          <img src={html} alt="programming languages" className="mr-10" />
          <img src={python} alt="programming languages" className="mr-10" />
          <img src={redux} alt="programming languages" className="mr-10" />
        </div>
      </div>
      <div className="h-screen hidden items-start w-1/4 md:flex">
        <div className="h-10 flex">
          <img src={django} alt="programming languages" className="mr-10" />
          <img src={css} alt="programming languages" className="mr-10" />
          <img src={mongodb} alt="programming languages" className="mr-10" />
          <img src={graphql} alt="programming languages" className="mr-10" />
        </div>
        <div className="h-10 flex">
          <img src={tailwind} alt="programming languages" className="mr-10" />
          <img src={firebase} alt="programming languages" className="mr-10" />
          <img src={next} alt="programming languages" className="mr-10" />
          <img src={graphql} alt="programming languages" className="mr-10" />
        </div>
      </div>
    </div>
  );
}

export default About;
