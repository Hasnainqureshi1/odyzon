import React from "react";

const About = () => {
  return (
    <>
      <div>
        <img
          src="/images/about.png"
          alt="music"
          className="object-contain w-full h-full rounded-lg  "
        />
      </div>
      <div className="center flex-col ">
      <div className="flex justify-center items-center flex-col ">
        <div className="w-16 h-[2px] bg-white mt-20"></div>
        <h4 className=" mt-10 uppercase text-[0.89rem] font-bold  text-white ">
          My Story
        </h4>
      </div>
      <div className="flex justify-center items-center flex-col ">
      <h1 className=" about-title text-center mt-10 uppercase text-[0.89rem] font-bold  text-white ">
      i make music, because 
      <br/>
      i want to hug you with my voice
        </h1>
      </div>
      </div>
      <article className=" w-full px-[80px] py-[7rem] relative">
        <div className="text-white text-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </article>
    </>
  );
};

export default About;
