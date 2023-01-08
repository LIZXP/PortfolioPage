import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_briokgl",
        "template_39bv6ho",
        form.current,
        "bcxNIMGXEvYqptkNq"
      )
      .then(
        (result) => {
          alert("Thank you very much for contacting me");
          console.log(result.text);
        },
        (error) => {
          alert("there is something wrong, email didnt sent");
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <motion.div
      name="contact"
      className="w-full h-screen p-4 text-[#f87171] bg-[#001122] max-[1022px]:pl-[0rem] max-[1600px]:pl-[3rem]"
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col p-6 justify-center max-w-screen-2xl mx-auto h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 text-xl font-semibold">
            Submit the form to get in touch with me
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            action="submit"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="user_name"
              placeholder="enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="user_email"
              placeholder="enter your email"
              className="p-2 my-6 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={10}
              className="p-2 bg-transparent border-2 text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-[#fba2a2] to-[#f87171] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
