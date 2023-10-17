import React from "react";

function ExperienceTimeline() {
  return (
    <div className="max-w-lg mx-auto">
      <div className="mb-8">
        <div className="text-center p-10">
          <p className="text-black leading-loose">
            As an engineering student, I developed a strong foundation in
            problem-solving, critical thinking, and analytical skills. After
            completing my degree, I entered the IT industry and spent five years
            gaining valuable experience in various roles. During this time, I
            worked on diverse projects, troubleshooted complex issues, and
            collaborated with cross-functional teams. I developed a deep
            understanding of network infrastructure, protocols, and
            troubleshooting techniques, which enabled me to diagnose and address
            network-related problems promptly and effectively.
          </p>
          <p className="text-black leading-loose">
            However, my passion for software development led me to pursue a
            career change in full-stack development. I underwent additional
            training and acquired skills in web technologies, encompassing both
            front-end and back-end development. By harnessing my technical
            background and problem-solving abilities, I now specialize in
            creating innovative and scalable software solutions. I find great
            satisfaction in working with cutting-edge frameworks and tools to
            deliver high-quality software products.
          </p>
          <p className="text-black leading-loose">
            My goal is to contribute my skills and knowledge to projects that
            have a positive impact and drive meaningful change in the digital
            landscape. I continually stay updated with the latest advancements
            in technologies and industry standards to ensure that I am
            well-prepared to tackle complex challenges and deliver exceptional
            results.
          </p>
        </div>
        <h2 className="text-2xl font-bold mb-4">EXPERIENCE</h2>
        <div className="mb-6 relative">
          <div className="flex flex-row items-center">
            <div className="w-4 h-4 rounded-full bg-black"></div>
            <div className="w-px h-6 bg-gray-300"></div>
          </div>
          <div className="ml-4 pl-5 pb-4 border-l-2 border-gray-300">
            <h3 className="text-lg font-bold">
              Quizzy News, Remote, NY
            </h3>
            <p className="text-sm font-semibold">Full Stack Developer</p>
            <p className="text-sm font-semibold">06/2023 - 10/2023</p>
            <ul className="list-disc pl-6"></ul>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="w-4 h-4 rounded-full bg-black"></div>
          <div className="w-px h-6 bg-gray-300"></div>
        </div>
        <div className="ml-4 pl-5 pb-4 border-l-2 border-gray-300">
          <h3 className="text-lg font-bold">Mini-Circuits Lab, Brooklyn, NY</h3>
          <p className="text-sm font-semibold">Infrastructure Support</p>
          <p className="text-sm font-semibold">08/2021 - 12/2022</p>
          <ul className="list-disc pl-6"></ul>
        </div>
        <div className="mb-6 relative">
          <div className="flex flex-row items-center">
            <div className="w-4 h-4 rounded-full bg-black"></div>
            <div className="w-px h-6 bg-gray-300"></div>
          </div>
          <div className="ml-4 pl-5 pb-4 border-l-2 border-gray-300">
            <h3 className="text-lg font-bold">
              Kastle Systems LLC, Manhattan, NY
            </h3>
            <p className="text-sm font-semibold">EPL Programmer</p>
            <p className="text-sm font-semibold">5/2017 - 01/2020</p>
            <ul className="list-disc pl-6">{/* Job responsibilities */}</ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
        <div className="mb-6 relative">
          <div className="flex flex-row items-center">
            <div className="w-4 h-4 rounded-full bg-black"></div>
            <div className="w-px h-6 bg-gray-300"></div>
          </div>
          <div className="ml-4 pl-5 pb-4 border-l-2 border-gray-300">
            <h3 className="text-lg font-bold">
              Flatiron School, Manhattan, NY
            </h3>
            <p className="text-sm font-semibold">Full Stack Web Development</p>
            <p className="text-sm font-semibold">Graduated 03/2023 - 06/2023</p>
          </div>
        </div>
        <div className="relative">
          <div className="flex flex-row items-center">
            <div className="w-4 h-4 rounded-full bg-black"></div>
          </div>
          <div className="ml-4 pl-5 pb-4 border-l-2 border-gray-300">
            <h3 className="text-lg font-bold">
              CUNY New York City College of Technology, Brooklyn, NY
            </h3>
            <p className="text-sm font-semibold">
              Bachelor’s in Computer Engineering
            </p>
            <p className="text-sm font-semibold">Graduated 08/2012 - 01/2017</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceTimeline;
