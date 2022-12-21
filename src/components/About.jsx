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
    <div className="h-full bg-[#001122]">
      <div name="about" className="w-full h-screen">
        <p>About</p>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
        cumque doloremque impedit culpa voluptatum ipsam omnis non consequuntur
        iure quis et eos facere quam dolore, excepturi nostrum in laudantium ea?
        Aspernatur odio, doloremque labore sit expedita tempore sequi eaque
        impedit quibusdam dicta fugiat delectus corrupti repellat perspiciatis?
        Aut possimus ut quo? Similique consequuntur est totam dolorem unde sed
        sequi saepe. Ut pariatur error odit, labore, eius aliquid, impedit ea
        laudantium perspiciatis ipsam maxime fugiat commodi. Numquam consequatur
        placeat eum deserunt itaque exercitationem maxime nam ea et nulla,
        quisquam officia odio. Tenetur eos nam nisi obcaecati, omnis delectus
        sapiente laudantium modi ex explicabo officia iure laboriosam corporis,
        rem maxime, optio ipsa exercitationem ea quaerat itaque nobis temporibus
        non! Quae, aliquid voluptatum. Consequuntur atque nostrum quidem iste
        deleniti labore quia harum exercitationem! Voluptas perspiciatis illo in
        eaque totam ad, voluptate quis officiis dolores, amet odit sed vero
        voluptatem unde fuga nostrum labore.
      </p>
      <div className="w-10 m-auto flex">
        <img src={javascript} alt="programming languages" />
        <img src={css} alt="programming languages" />
        <img src={sass} alt="programming languages" />
        <img src={react} alt="programming languages" />
        <img src={typescript} alt="programming languages" />
        <img src={html} alt="programming languages" />
        <img src={python} alt="programming languages" />
        <img src={redux} alt="programming languages" />
      </div>
      <div className="w-10 m-auto flex">
        <img src={django} alt="programming languages" />
        <img src={css} alt="programming languages" />
        <img src={mongodb} alt="programming languages" />
        <img src={graphql} alt="programming languages" />
        <img src={tailwind} alt="programming languages" />
        <img src={firebase} alt="programming languages" />
        <img src={next} alt="programming languages" />
        <img src={graphql} alt="programming languages" />
      </div>
    </div>
  );
}

export default About;
