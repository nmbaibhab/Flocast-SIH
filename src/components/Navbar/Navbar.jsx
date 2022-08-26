/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { AiOutlineFileUnknown } from "react-icons/ai";
import { FaHandHoldingWater } from "react-icons/fa";
import { GiFlood, GiWaterRecycling } from "react-icons/gi";

const navigation = [
  {
    name: "Live Flood Forecasts",
    href: "https://ffs.tamcnhp.com/",
    current: false,
    icon: GiFlood,
  },
  {
    name: "Ministry Of Jal Sakti",
    href: "http://jalshakti-dowr.gov.in/",
    current: false,
    icon: FaHandHoldingWater,
  },
  {
    name: "Central Water Commision",
    href: "http://www.cwc.gov.in/",
    current: false,
    icon: GiWaterRecycling,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const navigate = useNavigate();
  const govProfile = localStorage.getItem("govProfile");
  const logout = () => {
    localStorage.removeItem("govProfile");
    navigate("/home");
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                    alt="Workflow"
                  />
                  <span className="text-xl font-extrabold text-blue-100 mx-2">
                    <Link to="/">FLOCAST</Link>
                  </span>
                </div>

                <div className="hidden sm:block sm:ml-6 md:mx-auto">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-200 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}&nbsp;
                        <item.icon
                          className=" inline h-4 w-4 text-indigo-600 mb-1"
                          aria-hidden="true"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className=" absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button className="invisible md:visible ml-6 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border bg-blue-700 border-transparent rounded-md shadow-sm text-sm text-white font-medium hover:bg-blue-800">
                  <Link to="/imgUpload">Contribute Crowd Data</Link>
                </button>
                {govProfile ? (
                  <button
                    className="invisible md:visible ml-6 whitespace-nowrap inline-flex items-center justify-center px-2 py-1  border bg-gray-500 border-transparent rounded-md shadow-sm text-sm text-white font-sm hover:bg-red-600"
                    onClick={logout}
                  >
                    Logout
                  </button>
                ) : (
                  <button className="invisible md:visible ml-6 whitespace-nowrap inline-flex items-center justify-center px-4 py-2  border bg-green-500 border-transparent rounded-md shadow-sm text-sm text-white font-medium hover:bg-green-700">
                    <Link to="/govLogin">Gov Login</Link>
                  </button>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

              {govProfile ? (
                <button
                  className="invisible md:visible ml-6 whitespace-nowrap inline-flex items-center justify-center px-2 py-1  border bg-gray-500 border-transparent rounded-md shadow-sm text-sm text-white font-sm hover:bg-red-600"
                  onClick={logout}
                >
                  Logout
                </button>
              ) : (
                <button
                  href="#"
                  className=" mx-1 whitespace-nowrap inline-flex items-center justify-center px-2 py-2  border bg-green-500 border-transparent rounded-md shadow-sm text-sm text-white font-sm hover:bg-pink-500"
                >
                  <Link to="/govLogin">Gov Login</Link>
                </button>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
