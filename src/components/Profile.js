import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import SocialHandles from "./SocialHandles";
import ProfileData from "../data/profile";
import Wave from "./Wave";

const Profile = () => {
  return (
    <section
      id="home"
      className="text-gray-600 bg-darkblue body-font min-h-screen flex flex-col justify-between"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-4 pt-24 pb-10">
        {/* Left: Text Content */}
        <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start text-center lg:text-left">
          <SocialHandles />

          <h2
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Hello, I am{" "}
            <span className="bg-gradient-to-r from-sky-300 via-blue-200 to-indigo-200 bg-clip-text text-transparent">
              {ProfileData.name}
            </span>
          </h2>

          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="text-2xl sm:text-3xl text-white mb-4 font-medium min-h-[48px]"
          >
            <Typewriter
              words={ProfileData.professions}
              loop={false}
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </div>

          {ProfileData.info?.map((item, index) => (
            <p
              key={index}
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              data-aos-once="false"
              className="mb-2 text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl"
            >
              {item}
            </p>
          ))}

          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="false"
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="inline-flex font-medium text-white bg-black border-2 border-white py-3 px-7 hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={750}
              >
                Contact Me
              </Link>
            </button>

            <a href={ProfileData.resume} target="_blank" rel="noreferrer">
              <button className="inline-flex font-medium text-white bg-dark-orange border-2 border-dark-orange py-3 px-7 hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md">
                Get Resume
              </button>
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="false"
          className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3"
        >
          <img
            className="w-full h-auto rounded-full border-4 border-white object-cover"
            alt={ProfileData.name}
            src={ProfileData.img}
          />
        </div>
      </div>

      {/* ✅ Wave now inside section */}
      <Wave />
    </section>
  );
};

export default Profile;
