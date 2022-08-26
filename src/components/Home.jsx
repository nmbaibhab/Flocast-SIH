import { Carousel } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font font-extrabold sm:text-4xl text-3xl mb-4 font-medium text-blue-800">
              Introducing Instant Flood Forecasts and Inundation levels.
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">
              Flood Forecasts Beforehand powered by crowd source{" "}
            </p>
            <div class="flex justify-center">
              <Link to="/inundations">
                <button class="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded-full text-lg font-semibold">
                  {" "}
                  Your Inundation Status
                </button>
              </Link>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://source.unsplash.com/random//720x600/?flood"
            />
          </div>
        </div>
      </section>
      <div className="h-96 sm:h-64 xl:h-80 2xl:h-96 mt-1">
        <Carousel>
          <img
            src="./images/sliderbannerM30.jpg"
            alt="..."
          />
          <img
            src="./images/sliderbannerM32.jpg"
            alt="..."
          />
          <img
            src="./images/sliderbannerM30.jpg"
            alt="..."
          />
        </Carousel>
      </div>
    </>
  );
};
export default Home;
