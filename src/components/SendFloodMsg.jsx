import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
// import indiaFlag from "../images/India.jpg";

const SendFloodMsg = () => {
  const [stateName, setStateName] = useState("");
  const [distName, setDistName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(stateName, distName, message);
    const headers = {
      contentType: "application/json",
    };
    const data = {
      dist: distName,
      state: stateName,
      message,
    };
    try {
      axios
        .post("http://localhost:8000/sms/send", data, { headers })
        .then((response) => {
          Swal.fire({
            icon: "success",
            title: "Successful",
            text: "SMS sent Successful ",
          });
          console.log(response);
        });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Some error happend",
        text: "failed to send sms ",
      });
      console.log(error);
    }
  };
  return (
    <>
      <div className="my-6 mx-auto text-center justify-center">
        <p className="font-bold text-2xl text-green-700 ">
          Welcome to Early Flood Warning Management Portal.
        </p>{" "}
        <p className="text-xl font-semibold text-blue-700 my-4">
          Send Flood Warning Messages to affected areas in one go!!
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className=" grid grid-cols-2 w-3/5 mx-auto mt-8">
          <div className=" w-11/12">
            <select
              id="default"
              className="w-full bg-gray-50 border-2 border-gray-300 text-gray-900 mb-6 text-md font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={stateName}
              onChange={(e) => setStateName(e.target.value)}
            >
              <option selected>Select State</option>
              <option value="Odisha">Odisha</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <div className=" w-11/12">
            <select
              id="default"
              className="w-full bg-gray-50 border-2 border-gray-300 text-gray-900 mb-6 text-md font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={distName}
              onChange={(e) => setDistName(e.target.value)}
            >
              <option selected>Select Dist</option>
              <option value="Cuttack">Cuttack</option>
              <option value="Mayurbhanj">Mayurbhanj</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-7/12">
            <label
              for="exampleFormControlTextarea1"
              className="form-label text-lg font-semibold inline-block mb-2 text-gray-700"
            >
              Send Your Custom Message
            </label>
            <textarea
              className="
        form-control
        block
        w-full
        px-2
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlTextarea1"
              rows="4"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className=" flex mx-auto text-center justify-center bg-blue-600 hover:bg-blue-700 mt-6 text-white font-bold py-2 px-6 rounded">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SendFloodMsg;
