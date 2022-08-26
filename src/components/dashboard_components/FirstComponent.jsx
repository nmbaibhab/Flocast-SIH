import React from "react";
import { Link } from "react-router-dom";

const FirstComponent = () => {
  return (
    <div>
      {" "}
      <div className="tran h-screen w-16 menu bg-white text-white px-4 flex items-center nunito fixed shadow">
        <ul className="list-reset ">
          <li className="my-2 md:my-0">
            <Link
              to="/dashboard/home"
              className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400"
            >
              <i className="fas fa-home fa-fw mr-3 text-2xl"></i>
              {/* <span className="w-full inline-block pb-1 md:pb-0 text-sm">
                Home
              </span> */}
            </Link>
          </li>
          <li className="my-2 md:my-0 ">
            <Link
              to="/dashboard/forecast"
              className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400"
            >
              <i className="fas fa-tasks fa-fw mr-3 text-2xl"></i>
              {/* <span className="w-full inline-block pb-1 md:pb-0 text-sm">
                Flood Forcasts
              </span> */}
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link
              to="/dashboard/messages"
              className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400"
            >
              <i className="fa fa-envelope fa-fw mr-3 text-2xl"></i>
              {/* <span className="w-full inline-block pb-1 md:pb-0 text-sm">
                Messages
              </span> */}
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link
              to="/dashboard/aiModel"
              className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400"
            >
              <i className="fas fa-chart-area fa-fw mr-3  text-2xl"></i>
              {/* <span className="w-full inline-block pb-1 md:pb-0 text-sm">
                AI Model
              </span> */}
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link
              to="/dashboard/rescue"
              className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400"
            >
              <i className="fa fa-wallet fa-fw mr-3 text-2xl"></i>
              {/* <span className="w-full inline-block pb-1 md:pb-0 text-sm">
                Rescue
              </span> */}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FirstComponent;
