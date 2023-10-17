"use client";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import { useRef, useState } from "react";
import ExperienceTimeline from "./component/ExperienceTimeline";
import Projects from "./component/Projects";

export default function Home() {
  const projectRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToProjects = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <div className="flex items-center">
            <h1 className="text-xl">Clifton G._</h1>
            <ul className="ml-4 flex items-center space-x-2">
              <li>
                <a
                  className="bg-black text-white px-4 py-2 rounded-md"
                  href="https://docs.google.com/document/d/1sEWEdToH3bLmEV3_4np8P-rY2FEhakUNQ_H941lM3kc/edit?usp=sharing"
                  target="_blank"
                >
                  ./Resume
                </a>
              </li>
              <li className="bg-black text-white px-4 py-2 rounded-md">
                <button
                  className="focus:outline-none"
                  onClick={scrollToProjects}
                >
                  ./Projects
                </button>
              </li>
              <li className="bg-black text-white px-4 py-2 rounded-md">
                <button className="focus:outline-none" onClick={scrollToAbout}>
                  ./About
                </button>
              </li>
            </ul>
          </div>

          <div className="text-black px-4 py-2 rounded-md">
            {/* Acceptance: 0 Rejections: 453 Interviews: 3{" "} */}
          </div>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 mb-4">Hello World!, I'm Clifton.</h2>
          <h3 className="text-2xl py-2 mb-4"> Full-Stack Developer</h3>
          <p>
            {" "}
            I'm a passionate software engineer with expertise in full-stack
            development, specializing in web technologies. Currently based in
            New York City, I thrive on creating innovative and scalable
            solutions to solve complex problems. With a strong foundation in
            front-end and back-end development, I enjoy working with
            cutting-edge frameworks and tools to deliver high-quality software
            products. My goal is to contribute my skills and knowledge to
            projects that make a positive impact and drive meaningful change in
            the digital landscape.
          </p>
        </div>
        <div className="text-5xl flex justify-center">
          <a href="https://github.com/ClifGA" target="_blank">
            <AiFillGithub className="inline-block mr-4" />
          </a>
          <a href="https://www.linkedin.com/in/clifton-gockul/" target="_blank">
            <AiFillLinkedin className="inline-block" />
          </a>
        </div>
        <div className="relative mx-auto first-letter:rounded-full w-80 h-80 mt-20">
          <Image
            className="rounded-full 
         "
            src="/bwg.jpg"
            alt="Picture of the author"
            layout="fill"
          />
        </div>
      </section>

      <section className="py-10" ref={projectRef}>
        <h2 className="text-3xl mb-4">Projects</h2>

        <Projects />
      </section>
      <section id="about" ref={aboutRef}>
        <h2 className="text-3xl mb-4">About Me</h2>
        <ExperienceTimeline />
      </section>
    </main>
  );
}
