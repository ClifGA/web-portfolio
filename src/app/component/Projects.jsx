import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Projects = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-11/12 md:w-1/2 p-4">
        <Carousel className="carousel" showArrows={true} infiniteLoop={true}>
          <div>
            <img
              className="w-full h-auto"
              src="https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-Shopping-Infographics.png"
              alt="Project 1"
            />
            <a
              href="https://github.com/ClifGA/FlatBuy"
              target="_blank"
              className="legend"
            >
              E-Commerce Web Application{" "}
            </a>
          </div>
          <div>
            <img
              className="w-full h-auto"
              src="https://clockly.com/images/blog/employee-time-tracking-app.png?v=1665570482598076408"
              alt="Project 2"
            />
            <a
              href="https://github.com/ClifGA/Flat_Project"
              target="_blank"
              className="legend"
            >
              {" "}
              TimeSheet Mobile App{" "}
            </a>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
