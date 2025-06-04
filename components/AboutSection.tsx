"use client" // this is a client component
import React from "react";
import Image from "next/image";

const skills = [
  { skill: "Java" },
  { skill: "Python" },
  { skill: "SQL" },
  { skill: "Flutter" },
  { skill: "Scala" },
  { skill: "R" },
  { skill: "Haskell" },
  { skill: "Kotlin" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "C#" },
  { skill: "C++" },
  { skill: "Android Studio" },
  { skill: "React" },
  { skill: "React Native" },
  { skill: "Next.js" },
  { skill: "Spring Boot" },
  { skill: "REST APIs" },
  { skill: "Git" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col md:flex-row md:space-x-10 md:p-4 md:text-left">
          <div className="md:w-1/2">
            {/* Education Section */}
            <h1 className="text-center text-xl font-bold mb-6 md:text-left">Education</h1>
            <div className="flex items-center mb-4 align-bottom mt-9">
              <Image
                src="/TU_Logo.png"
                alt="TU-Berlin Icon"
                width={80}
                height={50}
                className="mr-6" 
              />
              <div>
                <h2 className="font-bold text-xl">Bachelor of Business Informatics </h2>
                <p className="font-bold">TU-Berlin</p>
                <p>2019 - 2025</p>
              </div>
            </div>
            <div className="flex items-center mt-6 ">
              <Image
                src="/tishreen.webp" 
                alt="Tishreen University Icon"
                width={80}
                height={50}
                className="mr-6" 
              />
              <div>
                <h2 className="font-bold text-xl">Bachelor of Architecture</h2>
                <p className="font-bold">Tishreen University, Latakia, Syria</p>
                <p>2011 - 2015</p>
              </div>
            </div>
            
            {/* My Skills Section */}
            <div className="mt-10">
              <h1 className="text-2xl font-bold mb-6">My Skills</h1>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {skills.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          
         {/* Personalized Summary Section */}
<div className="md:w-1/2">
  
  <h2 className="text-xl font-bold mb-4">🎓 Educational Journey:</h2>
  <p className="mb-4">
    My academic journey in Business Informatics has been a blend of learning and practical application. I delved deep into subjects like Data Structures, Algorithms, Artificial Intelligence, Game Development, and Software Engineering Methodologies, equipping myself with a versatile skill set in Java, Python, and JavaScript.
  </p>
  <h2 className="text-xl font-bold mb-4">💼 Professional Experience:</h2>
  <p className="mb-4">
    I&#39;ve gained hands-on experience through diverse roles in full-stack development, IT support, and applied AI. During my internship at TU Berlin, I built a campus navigation app using Java, Spring Boot, Flutter, and PostgreSQL. While working at a dental clinic, I improved their website’s SEO, boosting traffic by 17%. I’ve also developed AI-driven projects, including a thesis on genetic algorithm optimization for Murus Galicus board game and a Pac-Man agents using Python.  </p>
 
  <h2 className="text-xl font-bold mb-4">🌟 Skills & Attributes:</h2>
  <p className="mb-4">
    I&apos;m a self-starter and analytical thinker, with a knack for solving problems and a drive to learn and innovate. My dual background in Business Informatics and Architecture positions me uniquely, enabling me to bring diverse perspectives to both individual and team environments.
  </p>
  <h2 className="text-xl font-bold mb-4">🔗 Connect With Me:</h2>
  <p>
    imadibrahem23@gmail.com
 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
