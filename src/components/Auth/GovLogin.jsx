import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GovtImage from "../../images/Govt.jpg";
import axios from "axios";
import Swal from "sweetalert2";

const GovLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const govProfile = localStorage.getItem("govProfile");
  if (govProfile) navigate("/sendFloodMsg");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/govUser/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function(response) {
        console.log(response.data);
        navigate("/sendFloodMsg");
        localStorage.setItem("govProfile", response.data);
      })
      .catch(function(error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Login failed ",
        });
      });
    // console.log(email, password);
  };
  return (
    <div>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-6 md:mb-0">
              <img
                // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                src={GovtImage}
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form onSubmit={handleSubmit}>
                <div className=" flex-row items-center justify-center lg:justify-start">
                  <p className="text-4xl mr-4 font-bold text-blue-600">
                    Central Water Commision (CWC)
                  </p>
                  <p className="text-2xl mr-4 font-bold text-green-500 my-4">
                    Welcome Again !!
                  </p>
                </div>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-blue-700 before:mt-0.5 after:flex-1 after:border-t after:border-blue-700 after:mt-0.5">
                  {/* <p className="text-center font-semibold mx-4 mb-0 text-green-700">
                    Hello Again !!
                  </p> */}
                </div>

                <div className="my-6">
                  <input
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="email"
                    placeholder="Email address"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-blue-700">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GovLogin;
