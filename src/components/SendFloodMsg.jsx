import React from "react";
import indiaFlag from "../images/India.jpg";

const sendFloodMsg = () => {
  return (
    <>
      <div className="my-6 mx-auto text-center justify-center">
        <p className="font-bold text-2xl text-green-700 ">
          Welcome to Early Flood Warning Management Portal.
        </p>{" "}
        <p className="text-xl text-blue-700 my-2">
          Send Flood Warning Messages to affected areas in one go!!
        </p>
      </div>
      <div className=" grid grid-cols-2 w-3/5 mx-auto">
        <div className=" w-11/12">
          <select
            id="default"
            className="w-full bg-gray-50 border-2 border-gray-300 text-gray-900 mb-6 text-lg font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Select State</option>
            <option value="US">Odisha</option>
            <option value="CA">Assam</option>
            <option value="FR">West Bengal</option>
          </select>
        </div>
        <div className=" w-11/12">
          <select
            id="default"
            className="w-full bg-gray-50 border-2 border-gray-300 text-gray-900 mb-6 text-lg font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose Districts</option>
            <option value="CA">Dist 1</option>
            <option value="FR">Dist 2</option>
            <option value="DE">Dist 2</option>
          </select>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="mb-3 xl:w-7/12">
          <label
            for="exampleFormControlTextarea1"
            class="form-label text-lg font-semibold inline-block mb-2 text-gray-700"
          >
            Send Your Custom Message
          </label>
          <textarea
            class="
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
          ></textarea>
          <button class=" flex mx-auto text-center justify-center bg-blue-500 hover:bg-blue-700 mt-6 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default sendFloodMsg;
