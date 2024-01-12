import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Fitness App",
    description:
      "Fitness App is a web app that gives you exercise videos to perform and lets you sort them according to your body part and specific exercise.",
    image: "/fitness-app.png",
    github: "https://github.com/VivekShrirame/beluga-gym",
    link: "https://beluga-fitness.netlify.app/",
  },
  {
    name: "TextUtils",
    description:
      "Textutils helps you analyse the text by removing spaces and edit the text with Uppercase and Lowercase for a given text.. We can also listen to the text as it provides speak screen.",
    image: "/textutils.png",
    github: "https://github.com/VivekShrirame/textutils",
    link: "https://vivekshrirame.github.io/textutils/",
  },
  {
    name: "Resumer",
    description:
      "Resumer is a Resume/CV maker which helps you create your Resume and let you preview it while making.",
    image: "/resumer.png",
    github: "https://github.com/VivekShrirame/resumer",
    link: "https://resumer-maker.netlify.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
