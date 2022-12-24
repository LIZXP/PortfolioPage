import React from "react";

function Contact() {
  return (
    <div name="contact" className="w-full h-screen p-4 text-black">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">Contact</p>
          <p>Email me</p>
        </div>
        <div>
          <form action="submit" className="">
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <textarea
              name="message"
              rows={10}
              className="p-2 bg-transparent border-2 text-black focus:outline-none"
            ></textarea>
            <button className="text-black bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
