/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  CursorClickIcon,
  MenuIcon,
  PlayIcon,
  ShieldCheckIcon,
  XIcon,
} from "@heroicons/react/outline";
import { HiOfficeBuilding } from "react-icons/hi";
import { WiFlood } from "react-icons/wi";
import { BiHelpCircle } from "react-icons/bi";
import {
  RiGuideFill,
  RiMessage3Line,
  RiCoinsLine,
  RiEditCircleLine
} from "react-icons/ri";
import { MdAccessibility } from "react-icons/md";
import { AiOutlineFileUnknown } from "react-icons/ai";
import { ChevronDownIcon } from "@heroicons/react/solid";

const informations = [
  {
    name: "Ministry Of Jal Sakti",
    description:
      "Refer the website for the updates about flood situation maintained by Govt. of India",
    href: " http://jalshakti-dowr.gov.in/",
    icon: HiOfficeBuilding,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Circulations",
    description: "Show interst to circulate the important messages to whom has not yet got the information",
    href: "#",
    icon: RiEditCircleLine,
  },
  {
    name: "Messaging System ",
    description:
      "Messaging the formation to the people who are affected to it or going to be",
    href: "#",
    icon: RiMessage3Line,
  },
];
const callsToAction = [
  { name: "See tutorial", href: "#", icon: PlayIcon },
  { name: "Feedback", href: "#", icon: MdAccessibility },
];
const operations = [
  {
    name: "Operations",
    description:
      "See what we do and deep dive to the entire process of serving our people",
    href: "#",
    icon: AiOutlineFileUnknown,
  },
  {
    name: "Contribute",
    description:
      "Conribute to as per you to make ur nation safe",
    href: "#",
    icon: RiCoinsLine,
  },
]
const resources = [
  {
    name: "Flood Forecast",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "http://ffs.tamcnhp.com/",
    icon: WiFlood,
  },
  {
    name: "Help Center",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "https://nidm.gov.in/",
    icon: BiHelpCircle,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: RiGuideFill,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "https://ndmindia.mha.gov.in/",
    icon: CalendarIcon,
  },

];
const recentPosts = [
  { id: 1, name: "Red aleart area near me", href: "#" },
  {
    id: 2,
    name: "How to contact to the help center ",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Popover className="relative bg-gray-100 mb-4 ">
      <div className="w-full mx-auto px-4 sm:px-2">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="mx-4 text-3xl font-extrabold text-blue-800">
                FLOCAST
              </span>
              {/* <img
                className="h-8 w-auto sm:h-10 "
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                alt=""
              /> */}
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white px-2 py-2  rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    <span>Informations</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-1 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {informations.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 px-3 py-1 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href="#"
              className="text-base my-2 font-medium text-gray-500 hover:text-gray-900"
            >
              Operations
            </a>
            <a
              href="#"
              className="text-base my-2 font-medium text-gray-500 hover:text-gray-900"
            >
              Contribute
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white px-2 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xl sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 px-3 py-1 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-base font-medium text-blue-800">
                              Recent Posts
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li
                                  key={post.id}
                                  className="text-base truncate"
                                >
                                  <a
                                    href={post.href}
                                    className="font-medium text-gray-900 hover:text-gray-700"
                                  >
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a
                              href="#"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              {" "}
                              See all{" "}
                              <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-2 border-indigo-600 border-transparent rounded-md shadow-sm text-base text-slate-400 font-bold hover:text-white hover:bg-indigo-700 ease-in duration-200"
            >
              GovtLogin
            </button>
            <button
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 mr-6 border bg-indigo-600 border-transparent rounded-md shadow-sm text-base text-white font-medium hover:bg-indigo-700"
            >
              DistLogin
            </button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-extrabold text-blue-800">
                  FLOCAST
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {informations.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-100"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-x-8">
                {operations.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-100"
                  >
                    <item.icon
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {item.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-100"
                  >
                    <item.icon
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {item.name}
                    </span>
                  </a>
                ))}
              </div>
              <div className="space-y-2">
                <button
                  href="#"
                  className="w-full whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-2 border-indigo-600 border-transparent rounded-md shadow-sm text-base text-slate-400 font-bold hover:text-white hover:bg-indigo-700 ease-in duration-200"
                >
                  GovtLogin
                </button>
                <button
                  href="#"
                  className="w-full whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border bg-indigo-600 border-transparent rounded-md shadow-sm text-base text-white font-medium hover:bg-indigo-700"
                >
                  DistLogin
                </button>
              </div>
            </div>

          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
