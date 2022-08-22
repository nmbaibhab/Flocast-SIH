import React, { useEffect, useState } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
// import ImagePreview from "./ImagePreview";

const GeotaggedImageUpload = () => {
  //getting user coordinates
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
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
  const [imgData, setImgData] = useState(null);

  const handleTakePhotoAnimationDone = (dataUri) => {
    console.log("takePhoto");
    setImgData(dataUri);
  };
  console.log("takePhoto", imgData);

  return (
    <>
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
              />
            </div>
          ) : (
            <div className="mx-auto items-center justify-center border-2 border-amber-500">
              <Camera
                onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
                // isFullscreen={true}
                idealFacingMode={FACING_MODES.ENVIRONMENT}
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex mx-auto items-center justify-center my-2">
        <button
          className="mx-auto whitespace-nowrap inline-flex items-center justify-center px-1 py-1 border bg-gray-600 border-transparent rounded-sm shadow-sm text-sm text-white font-medium hover:bg-gray-800"
          onClick={() => {
            setImgData(null);
          }}
        >
          Retake Image
        </button>
      </div>
      <div className="flex mx-auto items-center justify-center my-8">
        <button
          className="mx-auto whitespace-nowrap inline-flex items-center justify-center px-8 py-2 border bg-blue-600 border-transparent rounded-lg shadow-sm text-xl text-white font-semibold hover:bg-blue-800"
          onClick={() => {
            setImgData(null);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default GeotaggedImageUpload;
