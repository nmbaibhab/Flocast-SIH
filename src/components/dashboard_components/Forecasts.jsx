import React from "react";
import { Link } from "react-router-dom";

const Forecasts = () => {
  return (
    <div>
      <button className="invisible md:visible ml-6 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border bg-blue-700 border-transparent rounded-md shadow-sm text-sm text-white font-medium hover:bg-blue-800 my-6">
        <Link to="/floodForcast">Track Flood Forecast</Link>
      </button>
      <iframe
        src="https://codewdhruv.github.io/FLOCAST-FORCASTS/heatmaps.html"
        height="1000"
        width="100%"
      ></iframe>

      <iframe
        src="https://codewdhruv.github.io/FLOCAST-FORCASTS/plots.html"
        height="1000"
        width="100%"
      ></iframe>
    </div>
  );
};

export default Forecasts;
