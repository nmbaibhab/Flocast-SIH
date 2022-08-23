import React, { useEffect, useState } from "react";
import axios from "axios";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
// import ImagePreview from "./ImagePreview";
import { TbCameraRotate } from "react-icons/tb";

import "react-html5-camera-photo/build/css/index.css";

const GeotaggedImageUpload = () => {
  //getting user coordinates
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [username, setUsername] = useState("");
  const [waterLevel, setWaterLevel] = useState(0);
  const [facingMode, setFacingMode] = useState(FACING_MODES.ENVIRONMENT);

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
  }, []);

  //getting user images

  const handleTakePhotoAnimationDone = (dataUri) => {
    // console.log("takePhoto");
    setImgData(dataUri);
  };
  //   console.log("takePhoto", imgData);
  const rotateCamera = () => {
    if (facingMode === FACING_MODES.ENVIRONMENT)
      setFacingMode(FACING_MODES.USER);
    else setFacingMode(FACING_MODES.ENVIRONMENT);
    // console.log(facingMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!lat || !long)
      alert("Please allow location to get your area coordinates");
    else if (!imgData)
      alert("Please capture an image of flood indundation area");
    else {
      console.log(username, waterLevel, imgData);
      // send  to server
      var data = {
        name: username,
        image: imgData,
        level: waterLevel,
      };
      // send message to service worker via postMessage
      var msg = {
        form_data: data,
      };
      navigator.serviceWorker.controller.postMessage(msg); // <--- This line right here sends our data to sw.js

      const headers = {
        contentType: "application/json",
      };
      try {
        axios
          .post("http://localhost:5000/submit", data, { headers })
          .then((response) => console.log(response));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <form id="my_form" onSubmit={handleSubmit}>
        <span id="message"></span>
        <div>
          <div className="flex mx-auto items-center justify-center">
            <p className="my-4">
              Your coordinates are:{" "}
              <span className="text-green-500 font-bold">
                {lat} , {long}{" "}
              </span>
            </p>
          </div>
          <div className="flex mx-auto items-center justify-center px-4">
            {imgData ? (
              <div className="mx-auto items-center justify-center border-2 border-amber-500">
                <img
                  src={imgData}
                  className="mx-auto items-center justify-center"
                  alt="FloodImage"
                />
              </div>
            ) : (
              <div className="mx-auto items-center justify-center border-2 border-amber-500 relative cursor-pointer">
                <Camera
                  onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
                  // isFullscreen={true}
                  idealFacingMode={facingMode}
                />
                <TbCameraRotate
                  className="text-5xl absolute bottom-7 ml-10 text-white "
                  onClick={rotateCamera}
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex mx-auto items-center justify-center my-2">
          <div
            className="mx-auto whitespace-nowrap inline-flex items-center justify-center px-2 py-1 border bg-gray-600 border-transparent rounded-md shadow-sm text-sm text-white font-medium hover:bg-gray-800 cursor-pointer"
            onClick={() => {
              setImgData(null);
            }}
          >
            Retake Image
          </div>
        </div>

        <div className=" w-3/5 mx-auto my-6">
          <label
            htmlFor="Name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Name (optional)
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john doe"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className=" w-3/5 mx-auto my-6">
          <label
            htmlFor="Level"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Approximate water level in your area according to you
          </label>
          <input
            type="number"
            id="level"
            name="level"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="3 Foot"
            required
            onChange={(e) => setWaterLevel(e.target.value)}
          />
        </div>
        <div className="flex mx-auto items-center justify-center my-8">
          <button className="mx-auto whitespace-nowrap inline-flex items-center justify-center px-8 py-2 border bg-blue-600 border-transparent rounded-lg shadow-sm text-xl text-white font-semibold hover:bg-blue-800">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default GeotaggedImageUpload;
