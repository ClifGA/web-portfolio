import React from "react";

const Projects = () => {
  const projectList = [
    {
      name: "EduGuide",
      githubLink: "https://github.com/sofiakatzman/Team3-Hacktember2023",
      demoLink: "https://drive.google.com/file/d/1bmDuhEl4t8JxHCZb7wNX5a-4Lza6WS2-/view?usp=drive_link",
      liveLink: 'https://hackathonsubmission.onrender.com/', 
    },
    {
      name: "Admin Dashboard",
      githubLink: "https://github.com/ClifGA/admin-dashboard",
      demoLink: "https://drive.google.com/file/d/1lUOW0GfxXREClLFSfCbVPNDRDbZdC7OS/view?usp=sharing",
      liveLink: null, 
    },
    {
      name: "E-Commerce Web Application",
      githubLink: "https://github.com/ClifGA/FlatBuy",
      demoLink: null,
      liveLink: null, // Set to null or undefined to not show the link
    },
    {
      name: "TimeSheet Mobile App",
      githubLink: "https://github.com/ClifGA/Flat_Project",
      demoLink: null, // Set to null or undefined to not show the link
      liveLink: null,
    },
    // Add more projects to this array as needed
  ];

  return (
    <div className="w-11/12 md:w-1/2 p-4">
      <ul className="list-disc">
        {projectList.map((project, index) => (
          <li key={index}>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>{project.name}</strong>
            </a>
            {project.demoLink && (
              <>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 ml-1 hover:underline"
                >
                  Demo
                </a>
              </>
            )}
            {project.liveLink && (
              <>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 ml-1 hover:underline"
                >
                  Live
                </a>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
