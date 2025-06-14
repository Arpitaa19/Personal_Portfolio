import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectsData from "../data/projects";

const Projects = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-b from-[#0D0221] via-[#141C2D] to-[#102552]">
      <div className="px-3 py-10 mx-auto text-center sm:mx-6 md:mx-12 xl:mx-40">
        <div
          id="projects"
          className="flex flex-wrap w-full flex-col items-center text-center"
        >
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-3 text-gray-300">
            Projects
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-dark-orange"
          >
            My Works
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-x-3 md:gap-x-5 lg:gap-x-2 lg:gap-y-5 xl:gap-y-10 xl:gap-x-5 mt-4 md:mt-8 ">
          {ProjectsData.reverse().map((project) => (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="false"
              key={project.id}
              className="group relative h-80 w-[95%] mx-auto shadow-md md:shadow-lg rounded-xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-80 w-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-darkblue bg-opacity-95 flex flex-col justify-center items-center text-white opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out px-3 text-center rounded-xl">
                <h3 className="text-xl font-medium mt-2 mb-2">{project.name}</h3>
                <p className="px-2 text-base">{project.description}</p>
                <div className="flex flex-wrap items-center gap-3 mt-3">
                  {project?.icons?.map((Icon, index) => (
                    <div className="rounded-full p-2" key={index}>
                      <Icon className="text-white text-4xl font-bold" />
                    </div>
                  ))}
                </div>
                <div className="flex gap-7 justify-center items-center my-5 text-2xl">
                  <a
                    className="text-darkblue text-xl bg-white rounded-full p-2"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    className="text-darkblue text-xl bg-white rounded-full p-2"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="p-[1px]" />
                  </a>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
