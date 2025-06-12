import React from "react";
import { Link } from "react-scroll";
import AboutData from "../data/about";
import ProfileData from "../data/profile";

const About = () => {
  return (
    <section className="body-font bg-gradient-to-b from-[#0D0221] via-[#141C2D] to-[#102552] py-10 text-gray-100">
      <div className="p-5 mx-auto md:mx-10 lg:mx-16">

        <div id="about" className="flex flex-col text-center w-full mb-3">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-300">
            About Me
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg mx-auto leading-relaxed font-medium text-dark-orange text-center"
          >
            {/* Why hire me ? */}
          </p>
        </div>
        <div className="mx-auto flex lg:flex-row flex-col items-center justify-center lg:gap-x-12 xl:gap-x-40">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="mb-10 md:mb-0 flex justify-center"
          >
            <div className="relative w-[280px] h-[280px]">
              {/* Background rhombus that fills corners */}
              <div className="absolute inset-0 rotate-[45deg] rounded-[50px] bg-gradient-to-b from-[#0D0221] via-[#141C2D] to-[#102552] z-0"></div>

              {/* Foreground image */}
              <div className="relative w-full h-full rotate-[45deg] overflow-hidden rounded-[50px] z-10 shadow-xl">
                <img
                  src={AboutData.image}
                  alt="hero"
                  className="w-full h-full object-cover object-center -rotate-[45deg] rounded-[50px]"
                />
              </div>
            </div>
          </div>




          <div className="lg:w-1/2 justify-center lg:p-5 xl:p-7 md:p-5 flex flex-col items-center text-justify">
            {AboutData.description?.map((item, index) => (
              <p
                key={index}
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="false"
                className="font-medium text-gray-400 text-lg lg:text-base xl:text-xl leading-loose xl:leading-8 mb-4"
              >
                {item}
              </p>
            ))}
            {/* <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="false"
              className="mt-7 flex gap-x-4 md:gap-x-5 justify-center md:justify-between"
            >
              <button className="inline-flex font-medium text-white bg-black border-2 border-black py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Contact Me
                </Link>
              </button>
              <a href={ProfileData.resume} target="_blank" rel="noreferrer">
                <button className="inline-flex font-medium text-white bg-dark-orange border-2 border-dark-orange py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
                  Get Resume
                </button>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
