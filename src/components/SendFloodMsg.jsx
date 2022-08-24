import React from "react";
import indiaFlag from "../images/India.jpg";

const sendFloodMsg = () => {
  return (
    <>
      <div className="my-6 mx-auto text-center justify-center">
        <p>Welcome to Flood Early Warning Management Portal.</p>{" "}
        <p>Send Flood Warning Messages to affected areas in one go!!</p>
      </div>
      <div className=" m-4 grid grid-cols-3 gap-">
        <div className=" w-full px-6">
          <select
            id="default"
            className="w-full bg-gray-50 border-2 border-gray-300 text-gray-900 mb-6 text-lg font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>India</option>
            {/* <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option> */}
          </select>
        </div>
        <div className=" w-full px-6">
          <select
            id="default"
            className="w-full bg-gray-50 border-2 border-gray-300 text-gray-900 mb-6 text-lg font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a State</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className=" w-full px-6">
          <select
            id="default"
            className="w-full bg-gray-50 border-2 border-gray-300 text-gray-900 mb-6 text-lg font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Select affected Districts</option>
            <option value="">
              <div class="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Default checkbox
                </label>
              </div>
            </option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default sendFloodMsg;
