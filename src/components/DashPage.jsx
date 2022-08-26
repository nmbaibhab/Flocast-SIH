import React from "react";


const Dash = () => {
  return (
    <>
      <div
        
        className="tran h-screen w-16 menu bg-white text-white px-4 flex items-center nunito fixed shadow"
      >
        <ul className="list-reset ">
          <li className="my-2 md:my-0">
            <a
              href="#"
              className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400"
            >
              <i className="fas fa-home fa-fw mr-3"></i>
              <span className="w-full inline-block pb-1 md:pb-0 text-sm">
                Home
              </span>
            </a>
          </li>
          <li className="my-2 md:my-0 ">
            <a
              href="#"
              className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400"
            >
              <i className="fas fa-tasks fa-fw mr-3"></i>
              <span className="w-full inline-block pb-1 md:pb-0 text-sm">
                Flood Forcasts
              </span>
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a
              href="#"
              className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400"
            >
              <i className="fa fa-envelope fa-fw mr-3"></i>
              <span className="w-full inline-block pb-1 md:pb-0 text-sm">
                Messages
              </span>
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a
              href="#"
              className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400"
            >
              <i className="fas fa-chart-area fa-fw mr-3 text-indigo-400"></i>
              <span className="w-full inline-block pb-1 md:pb-0 text-sm">
                AI Model
              </span>
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a
              href="#"
              className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400"
            >
              <i className="fa fa-wallet fa-fw mr-3"></i>
              <span className="w-full inline-block pb-1 md:pb-0 text-sm">
                Rescue
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-row flex-wrap flex-1 flex-grow content-start pl-16">
        <div className="h-40 lg:h-20 w-full flex flex-wrap">
          <nav
            id="header"
            className="bg-gray-200 w-full lg:max-w-sm flex items-center border-b-[1px] border-gray-300 order-2 lg:order-1"
          >
            <div className="px-2 w-full">
              <select
                name=""
                className="bg-gray-300 border-2 border-gray-200 rounded-full w-full py-3 px-4 text-gray-500 font-bold leading-tight focus:outline-none focus:bg-white focus:shadow-md"
                id="form-field2"
              >
                <option value="Default">default</option>
                <option value="A">report a</option>
                <option value="B">report b</option>
                <option value="C">report c</option>
              </select>
            </div>
          </nav>
          <nav
            id="header1"
            className="bg-gray-100 w-auto flex-1 border-b-1 border-gray-300 order-1 lg:order-2"
          >
            <div className="flex h-full justify-between items-center">
              <div className="relative w-full max-w-3xl px-6">
                <div className="absolute h-10 mt-1 left-0 top-0 flex items-center pl-10">
                  {/* <svg
                    className="h-4 w-4 fill-current text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                  </svg> */}
                </div>

                <input
                  id="search-toggle"
                  type="search"
                  placeholder="search"
                  className="block w-full bg-gray-200 focus:outline-none focus:bg-white focus:shadow-md text-gray-700 font-bold rounded-full pl-12 pr-4 py-3"
                  onkeyup="updateSearchResults(this.value);"
                />
              </div>

              <div className="flex relative pr-6">
                <div className="relative text-sm">
                  <button
                    id="userButton"
                    className="flex items-center focus:outline-none mr-3"
                  >
                    <img
                      className="w-8 h-8 rounded-full mr-4"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of User"
                    />{" "}
                    <span className="hidden md:inline-block">Hi, User </span>
                    {/* <svg
                      className="pl-2 h-2"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 129 129"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      enableBackground="new 0 0 129 129"
                    >
                      <g>
                        <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"></path>
                      </g>
                    </svg> */}
                  </button>
                  <div
                    id="userMenu"
                    className="bg-white nunito rounded shadow-md absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible"
                  >
                    <ul className="list-reset">
                      <li>
                        <a
                          href="#"
                          className="px-4 py-2 block text-gray-900 hover:bg-indigo-400 hover:text-white no-underline hover:no-underline"
                        >
                          My account
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="px-4 py-2 block text-gray-900 hover:bg-indigo-400 hover:text-white no-underline hover:no-underline"
                        >
                          Notifications
                        </a>
                      </li>
                      <li>
                        <hr className="border-t mx-2 border-gray-400" />
                      </li>
                      <li>
                        <a
                          href="#"
                          className="px-4 py-2 block text-gray-900 hover:bg-indigo-400 hover:text-white no-underline hover:no-underline"
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div
          id="dash-content"
          className="bg-gray-200 py-6 lg:py-0 w-full lg:max-w-sm flex flex-wrap content-start"
        >
          <div className="w-1/2 lg:w-full">
            <div className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
              <div className="flex flex-col items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-3 bg-gray-300">
                    <i className="fa fa-wallet fa-fw fa-inverse text-indigo-500"></i>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-3xl">
                    3249 sqkm{" "}
                    <span className="text-green-500">
                      <i className="fas fa-caret-up"></i>
                    </span>
                  </h3>
                  <h5 className="font-bold text-gray-500">Total Affected Area</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 lg:w-full">
            <div className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
              <div className="flex flex-col items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-3 bg-gray-300">
                    <i className="fas fa-users fa-fw fa-inverse text-indigo-500"></i>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-3xl">
                    249{" "}
                    <span className="text-orange-500">
                      <i className="fas fa-exchange-alt"></i>
                    </span>
                  </h3>
                  <h5 className="font-bold text-gray-500">Total Users in Your Region</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 lg:w-full">
            <div className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
              <div className="flex flex-col items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-3 bg-gray-300">
                    <i className="fas fa-user-plus fa-fw fa-inverse text-indigo-500"></i>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-3xl">
                    2{" "}
                    <span className="text-yellow-600">
                      <i className="fas fa-caret-up"></i>
                    </span>
                  </h3>
                  <h5 className="font-bold text-gray-500">Total recue campaign around you</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 lg:w-full">
            <div className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
              <div className="flex flex-col items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-3 bg-gray-300">
                    <i className="fas fa-server fa-fw fa-inverse text-indigo-500"></i>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-3xl">152 days</h3>
                  <h5 className="font-bold text-gray-500">Server Uptime</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="main-content" className="w-full flex-1">
          <div className="flex flex-1 flex-wrap">
            <div className="w-full xl:w-2/3 p-6 xl:max-w-6xl">
              <div className="max-w-full lg:max-w-3xl xl:max-w-5xl">
                <div className="border-b p-3">
                  <h5 className="font-bold text-black">Graph</h5>
                </div>
                <div className="p-5">
                  <div className="p-3">
                    <div className="border-b p-3">
                      <h5 className="font-bold text-black">Table</h5>
                    </div>
                    <div className="p-5">
                      <table className="w-full p-5 text-gray-700">
                        <thead>
                          <tr>
                            <th className="text-left text-blue-900">Name</th>
                            <th className="text-left text-blue-900">Side</th>
                            <th className="text-left text-blue-900">Role</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>Obi Wan Kenobi</td>
                            <td>Light</td>
                            <td>Jedi</td>
                          </tr>
                          <tr>
                            <td>Greedo</td>
                            <td>South</td>
                            <td>Scumbag</td>
                          </tr>
                          <tr>
                            <td>Darth Vader</td>
                            <td>Dark</td>
                            <td>Sith</td>
                          </tr>
                        </tbody>
                      </table>

                      <p className="py-2">
                        <a href="#">See More issues...</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full xl:w-1/3 p-6 xl:max-w-4xl border-l-[1px]  border-gray-300">
                <div className="max-w-sm lg:max-w-3xl xl:max-w-5xl">
                  <div className="border-b p-3">
                    <h5 className="font-bold text-black">Graph</h5>
                  </div>
                  <div className="p-5">
                    <div
                      className="ct-chart ct-golden-section"
                      id="chart2"
                    ></div>
                  </div>

                  <div className="border-b p-3">
                    <h5 className="font-bold text-black">Graph</h5>
                  </div>
                  <div className="p-5">
                    <div
                      className="ct-chart ct-golden-section"
                      id="chart3"
                    ></div>
                  </div>

                  <div className="border-b p-3">
                    <h5 className="font-bold text-black">Graph</h5>
                  </div>
                  <div className="p-5">
                    <div
                      className="ct-chart ct-golden-section"
                      id="chart4"
                    ></div>
                  </div>

                  <div className="p-3">
                    <div className="border-b p-3">
                      <h5 className="font-bold text-black">Template</h5>
                    </div>
                    <div className="p-5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dash;
