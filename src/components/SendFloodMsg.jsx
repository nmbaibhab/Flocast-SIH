import React from "react";
import indiaFlag from "../images/India.jpg";

const sendFloodMsg = () => {
  return (
    <>
      <div className="my-6 mx-auto text-center justify-center">
        <p>Welcome to Flood Early Warning Management Portal.</p>{" "}
        <p>Send Flood Warning Messages to affected areas in one go!!</p>
      </div>
      <div className=" grid grid-cols-2 w-3/5 mx-auto">
        <div className=" w-11/12">
          <select
            id="default"
            className="w-full bg-gray-50 border-2 border-gray-300 text-gray-900 mb-6 text-lg font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>India</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className=" w-11/12">
          <select
            id="default"
            className="w-full bg-gray-50 border-2 border-gray-300 text-gray-900 mb-6 text-lg font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose Warning Level</option>
            <option value="CA">Low</option>
            <option value="FR">Mid</option>
            <option value="DE">High</option>
          </select>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <label for="exampleFormControlTextarea1" class="form-label text-lg font-semibold inline-block mb-2 text-gray-700"
          >Write Your Message</label
          >
          <textarea
            class="
        form-control
        block
        w-full
        px-3
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
          <button class="bg-blue-500 hover:bg-blue-700 mt-6 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default sendFloodMsg;
