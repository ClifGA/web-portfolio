import React from "react";

function ExperienceTimeline() {
  return (
    <div className="max-w-lg mx-auto">
      <div className="mb-8">
        <div className="text-left p-10 ">
          <div>
            <p className="text-black leading-loose">
            I graduated with a degree in computer engineering and have worked in the IT field for over 7 years. After completing a software engineering bootcamp, I realized my true passion lies in development. I'm currently pursuing a master’s in computer science to strengthen my skills and make the shift from IT to a full-time developer. Outside of my professional life, I love watching plays and movies, playing board games, enjoying anime, and attending concerts. I'm excited to focus on growing as a developer and bring my passion to every project I take on.
            </p>
          </div>    
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
