import React from "react";
import { Link } from "react-router-dom";

const AIModel = () => {
  return (
    <div>
      <p className="mx-10 my-4">
        FloCast will allow the user to create flood profiles through the
        automatic extraction of data from SAR or manual input data. Each flood
        profile will act as a Feed Thread to which crowdsourcing data can be
        added/modified. Direct communication i.e G2C & C2G is established by
        developing a feed interaction infrastructure between the Govt. bodies &
        citizens for verified flood profiles.
        <p>
          We are integrating an Machine Learning model to the webapp using
          Tensorflow.js to verify the accuracy of the flood profiles. The
          messaging and direct information exchange is majorly set up using two
          mediums - Real Time Chat using Twilio PIM & Notification updates using
          Dynatrace. Summary Citizens of India face critical problems due to
          sudden and unexpected occurrence of disaster which leads to loss of
          life and property. The solution we are building majorly focusses to
          build a communication channel medium between the govt. sources and end
          users.
        </p>{" "}
        <p>
          {" "}
          The product is scalable in terms of implementation as it can operate
          the functions in offline network connectivity medium. We are
          implementing ServiceWorker and IndexDB to persist the offline form of
          data from the affected flood regions with zero to very less internet
          connectivity. The product will remove the dependency of the end users
          on telecom service providers to some extent thus supporting the
          concept of Aatmanirbhar Bharat. The product also uses AWS SNS to send
          automated and scheduled message notification updates to the end users
          on the flood profile topics. Check out the LIVE DEMO here.
        </p>
      </p>
      <button className="invisible md:visible ml-6 whitespace-nowrap inline-flex items-center justify-center px-8 py-2 border bg-blue-700 border-transparent rounded-md shadow-sm text-sm text-white font-medium hover:bg-blue-800 my-6">
        <Link to="/imgUpload">Test the beta Model</Link>
      </button>
    </div>
  );
};

export default AIModel;
