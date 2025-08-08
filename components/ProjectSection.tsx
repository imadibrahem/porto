
import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare,BsYoutube,BsDownload } from "react-icons/bs"
import { useState } from 'react';




const ProjectDescription = () => {
  return (
    <div>
      <p>This project is a full Java implementation of the board game Murus Gallicus, featuring a custom AI trained through genetic algorithms. Developed as part of my bachelor thesis, it includes a playable GUI version, several AI difficulty levels, and a Caesar bot that evolves over time using persistent memory and optimization techniques.</p>
      <br></br>
      <p>The work spans three repositories: a standalone Windows installer, a genetic algorithm environment for optimizing the AI agent, and the full source code of the optimized game. The project integrates advanced concepts such as transposition tables, Zobrist hashing, time management, and move evaluation, demonstrating my ability to combine game development and AI research into a robust, interactive application.</p>
      <br></br>
      <p>This project demonstrates both my programming capability in building complex, modular systems from scratch and my ability to apply artificial intelligence techniques—specifically evolutionary computation—to a real-world problem. It combines research, gameplay design, and AI development into a single, cohesive software package that is both interactive and academically grounded.</p>
    </div>
  );
};


const ProjectDescription2 = () => {
  return (
    <div>
      <p>CampusComforts is a cross-platform mobile and web application designed during my internship at the university to enhance student life at TU Berlin by encouraging mindful breaks and better campus exploration.</p>
      <p>Developed with <b>Flutter</b> for the frontend and <b>Spring Boot</b> with <b>PostgreSQL</b> for the backend, the app combines intelligent route planning with personalized activity suggestions.</p>
      <br></br>
      <h1 className="text-1xl font-bold mb-6">Key Features:</h1>
      <ul className="list-disc pl-5">
        <li><h1>Smart Route Planning:</h1>Using a genetic algorithm and the OpenRouteService API, the app generates optimized walking routes between university buildings. Routes guide users through meaningful campus points of interest (POIs) based on distance, similarity, and individual preferences</li>
          <li><h1>AI-Powered Activity Suggestions:</h1>A PyTorch-based neural network suggests short wellness activities (Micro-Activities) at POIs. These are tailored to real-time weather, time of day, and user feedback, promoting healthy routines between classes. </li>
          <li><h1>Dynamic Learning:</h1>User interactions (likes on activities) train the AI in-place, making future suggestions increasingly relevant.</li>
          <li><h1>Admin Interface:</h1>A web-based admin tool simplifies POI management, including adding/editing locations with the help of an interactive coordinate picker, and Adding pictures and description.</li>
      </ul>
      <br></br>
      <h1 className="text-1xl font-bold mb-6">Technologies Used:</h1>
      <p>Flutter · Java Spring Boot · PostgreSQL · PyTorch · OpenRouteService API</p>
    </div>
  );
};

const projects = [
  {
    imageWidth: 430,
    imageHeight: 430,
    name: "'Murus Gallicus' AI – Game & Genetic Algorithm Optimization",
    description: <ProjectDescription />,
    images: ["/MurusGalicus_StartWindow.jpg", "/MurusGalicus_GamePlay.jpg"], // Array of images
    github: "https://github.com/imadibrahem/Murus-Galicus-game",
    link: "",
    link2: "https://github.com/imadibrahem/Murus-Galicus",
    download:"https://github.com/imadibrahem/Murus-Galicus-Windows-installer"
  },
  {
    imageWidth: 300,
    imageHeight: 300,
    name: "CampusComforts App",
    description: <ProjectDescription2 />,
    images: ["/rout.png", "/microActions1.jpg", "/microActions2.jpg"], // Array of images
    github: "",
    link: "",
    link2: "",
    download:""
  },
  {
    imageWidth: 600,  
    imageHeight: 600, 
    name: "Pacman AI Project",
    description:
      "This project is based on the Berkeley Pacman AI project. It allows students to apply various AI techniques. The visualizations and modular structure support experimentation with intelligent agents in the classic Pacman game.",
    images: ["/pacman.jpg"],
    github: "https://github.com/imadibrahem/Pacman",
    link: "",
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
        {projects.map(({description, download, github, imageHeight, imageWidth, images, link, link2, name}, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    {images ? (
                      images.map((image, imageIdx) => (
                        <div key={imageIdx} className="mb-4">
                          <Image
                            src={image}
                            alt=""
                            width={imageWidth}
                            height={imageHeight}
                            className="rounded-xl shadow-xl hover:opacity-70"
                          />
                        </div>
                      ))
                    ) : (
                      <Image
                        src={images}
                        alt=""
                        width={imageWidth}
                        height={imageHeight}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    )}
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{name}</h1>

                    {/* Links Section Moved Here */}
                    <div className="flex flex-row align-bottom space-x-4 mb-6">
                      {github && (
                        <Link href={github} target="_blank">
                          <span className="flex items-center hover:-translate-y-1 transition-transform cursor-pointer">
                            <BsGithub size={25} />
                            <span className="ml-2">GitHub</span>
                          </span>
                        </Link>
                      )}
                        {link2 && (
                            <Link href={link2} target="_blank">
                             <span className="flex items-center hover:-translate-y-1 transition-transform cursor-pointer">
                               <BsGithub size={25} />
                               <span className="ml-2">GA repository</span>
                             </span>
                            </Link>
                        )}

                      {link && (
                        <Link href={link} target="_blank">
                          <span className="flex items-center hover:-translate-y-1 transition-transform cursor-pointer">
                            <BsYoutube size={25} />
                            <span className="ml-2">Watch Demo</span>
                          </span>
                        </Link>
                      )}
                      {download && (
                        <Link href={download} target="_blank">
                          <span className="flex items-center hover:-translate-y-1 transition-transform cursor-pointer">
                            <BsDownload size={25} />
                            <span className="ml-2">Download for Windows</span>
                          </span>
                        </Link>
                      )}
                    </div>

                    {/* Description Section */}
                    <div className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {typeof description === "string"
                        ? description
                        : description}
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
