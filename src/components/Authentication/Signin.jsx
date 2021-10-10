import React, { useState } from "react";

import Google from "../../assets/Google.svg";
import Email from "../../assets/Email.svg";
import Key from "../../assets/Key.svg";
import SigninIllustration from "../../assets/SigninIllustration.svg";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex  items-center justify-around flex-wrap  bg-primary font-sans ">
      <div className="bg-white m-2 p-10 md:p-16 rounded-xl md:w-6/12 lg:w-5/12 ">
        <h1 className="text-4xl font-bold font-sans	 mb-10 text-black">
          Log In 📚
        </h1>

        <form className="space-y-5">
          <div className="relative">
            <img
              src={Email}
              className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"
              alt=""
            />

            <input
              type="email"
              className="w-full border-1 
                        border-gray-200 p-3 rounded outline-none  focus:border-black placeholder-gray-400
                        form-input border  py-3 px-4  appearance-none  block pl-14 focus:outline-none
                        "
              placeholder="E-mail"
            />
          </div>

          <div className="relative">
            <img
              src={Key}
              className="pointer-events-none h-6 w-6 absolute top-1/2 transform -translate-y-1/2 left-3"
              alt=""
            />
            <input
              type={!showPassword ? "password" : "text"}
              className="w-full border-1 
                        border-gray-200 p-3 rounded outline-none focus:border-black placeholder-gray-400
                        form-input border  py-3 px-4 bg-white   appearance-none  block pl-14 focus:outline-none
                        "
              placeholder="Password"
            />
            <button
              className="cursor-pointer h-6 w-6 absolute top-1/2 transform -translate-y-1/2 right-6 font-light text-xs text-gray-600"
              onClick={handleShowPassword}
            >
              {!showPassword ? "Show" : "Hide"}
            </button>
          </div>

          <button className="block w-full bg-secondary p-4 rounded text-white font-bold	 hover:text-black transition duration-300">
            Sign In
          </button>

          <div className="flex items-center  text-gray-800  font-light text-sm">
            Don't have an account?{" "}
            <span className="pl-2  font-bold"> Sign up </span>
          </div>

          <p className="text-center text-gray-500 font-light">- OR -</p>

          <div className="flex items-center justify-center space-x-4 text-gray-800  ">
            <img src={Google} alt="" />
          </div>
        </form>
      </div>
      <div>
        <img src={SigninIllustration} className="m-2 " alt="" />
      </div>
    </div>
  );
};

export default Signin;
