import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Cards = ({ content }) => {
  // console.log(content.dist);
  return (
    <div className="my-4 mx-4 ">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure>
          <img src={content.imgBase64} alt="Shoes" />
        </figure>
        <div className=" p-2">
          <h2 className="">
            <span className="text-xl font-semibold"></span>Dist: {content.dist}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <p>PIN: {content.pinCode}</p>
          <p className="flex">
            Lat: {content.latitude}, Lng: {content.longitude}
          </p>
        </div>
      </div>
    </div>
  );
};

const Inundations = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [forecastData, setForeCastData] = useState([]);
  const [pincode, setPincode] = useState();

  const geolocationAPI = navigator.geolocation;

  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      console.log("Geolocation API is not available in your browser!");
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          setLat(coords.latitude);
          setLong(coords.longitude);
        },
        (error) => {
          console.log("Something went wrong getting your position!", error);
        }
      );
    }
  };

  useEffect(() => {
    getUserCoordinates();
    axios
      .get("http://localhost:8000/image/getForecasts")
      .then(function (response) {
        console.log(response.data);
        setForeCastData(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
    forecastData.reverse();
    // console.log(forecastData);
  }, []);

  return (
    <>
      <div className="mx-auto justify-center text-center ">
        <div className="my-4 font-semibold text-blue-600">
          Recent Crowd Source Inundation Data based on your location...
        </div>
        <div className="flex mx-auto items-center justify-center">
          <p className="my-3">
            Your coordinates is:{" "}
            <span className="text-green-500 font-bold">
              {lat} , {long}{" "}
            </span>
          </p>
        </div>
        {/* <div>
          <label for="simple-search" class="sr-only">
            Search
          </label>
          <div class="relative w-1/4 mx-auto rounded">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required=""
            />
            <button
              type="submit"
              class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-gray-700 hover:text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </div>

          
        </div> */}
      </div>
      <div className="grid md:grid-cols-3 gap-4 md:mr-2">
        {forecastData.length &&
          forecastData.map((element, index) => {
            return <Cards key={index} content={element} />;
          })}
      </div>
    </>
  );
};
export default Inundations;
