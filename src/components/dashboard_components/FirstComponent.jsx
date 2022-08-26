import React from "react";

const FirstComponent = () => {
  return (
    <div>
      {" "}
      <div className="tran h-screen w-16 menu bg-white text-white px-4 flex items-center nunito fixed shadow">
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
    </div>
  );
};

export default FirstComponent;
