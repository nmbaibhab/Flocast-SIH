import { Carousel } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../images/sliderbannerM30.jpg";
import Image2 from "../images/sliderbannerM32.jpg";

const Home = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font font-extrabold sm:text-4xl text-3xl mb-4 font-medium text-blue-800">
              Introducing Instant Flood Forecasts and Inundation levels.
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
            FLOCAST is a NextGen web application developed by Team Nexalus that aims to serve as a solution for Two-way mobile communication (G2C and C2G) for the dissemination of flood forecasts to end-users with the collection of real-time data of inundation areas through crowd sourcing. The project is hosted under the problem statement of the Central Water Commission, Ministry of Jal Shakti, Department of Water Resources, RD and GR, Govt. of India.{" "}
            </p>
            <div className="flex justify-center">
              <Link to="/inundations">
                <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded-full text-lg font-semibold">
                  {" "}
                  Your Inundation Status
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://source.unsplash.com/random//720x600/?flood"
            />
          </div>
        </div>
      </section>
      <div className="h-110 sm:h-64 xl:h-80 2xl:h-110 mt-1">
        <Carousel>
          <img
            src={Image1}
            style={{height:"100%"}}
            alt="..."
          />
          <img
            src={Image2}
            style={{height:"100%"}}
            alt="..."
          />
          <img
            src={Image1}
            style={{height:"100%"}}
            alt="..."
          />
        </Carousel>
      </div>
    </>
  );
};
export default Home;
