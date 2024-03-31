import React from "react";

const Header = () => {
  return (
    <div className="header relative">
      <div className="flex justify-center">
        <div className="header-img absolute w-full bg-[url('./assets/hero-img.png')"></div>

        <div className="absolute top-[100px] flex flex-col  justify-center items-center bg-opacity-90 p-6 rounded-lg">
          <div className=" text-white text-center z-10 mb-[30px]">
            Welcome to JOYVILLE HADAPSAR ANNEXE
          </div>
          <div className=" flex justify-center items-center flex-col bg-white rounded-lg p-4">
            <form className="grid grid-cols-2 items-center ">
              <h1 className="text-[26px] font-normal leading-[42px]">
                Project USP
              </h1>
              <div></div>
              <input
                type="text"
                placeholder="Name"
                className="input-field mb-3 px-4 py-2 w-64 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Phone"
                className="input-field mb-3 px-4 py-2 w-64 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="input-field mb-3 px-4 py-2 w-64 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Our Offering"
                className="input-field mb-3 px-4 py-2 w-64 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </form>
            <button
              type="submit"
              className="btn-primary px-4 py-2 rounded-md text-center text-black mt-4"
            >
              Submit
            </button>
          </div>
        </div>
        <img
          src="./assets/transition.png"
          className="absolute w-[100%] h-[100%]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
