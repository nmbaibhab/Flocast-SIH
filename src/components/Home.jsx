import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-10 space-y-6 p-9">
        <div className="header text-2xl font-bold">
          Know your Regional Status
        </div>
        <form className="w-full max-w-lg mx-auto">
          <div class="flex flex-wrap mb-2">
            <div class="w-full md:w-2/3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                State
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option selected>Select Your State</option>
                  <option>Odisha </option>
                  <option>Kelara</option>
                  <option>Uttarkhand</option>
                </select>
              </div>
            </div>
            <div class="w-full md:w-2/3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Region
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option selected>Select Your Region</option>
                  <option>Region1 </option>
                  <option>Region2</option>
                  <option>Region3</option>
                </select>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap mb-2">
            <div class="w-full md:w-2/3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                City
              </label>
              <div class="relative">
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="pin"
                  type="text"
                  placeholder="city"
                />
              </div>
            </div>
            <div class="w-full md:w-2/3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Region
              </label>
              <div class="relative">
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="pin"
                  type="number"
                  placeholder="Pin No"
                />
              </div>
            </div>
          </div>
        </form>
        <div className="">
          <button
            className="bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-800"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
export default Home;
