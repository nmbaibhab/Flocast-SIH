import React from "react";
import Navbar from "../components/Navbar/Navbar";
import GeotaggedImageUpload from "../components/GeotaggedImageUpload";

const GeoImageUploadPage = () => {
  return (
    <div>
      <Navbar />
      <GeotaggedImageUpload />
    </div>
  );
};

export default GeoImageUploadPage;
