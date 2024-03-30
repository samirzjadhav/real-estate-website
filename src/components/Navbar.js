import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-[#1E1D1D] w-full h-[70px] flex justify-between items-center px-[20px]">
      <img src="./assets/logo.svg" alt="" />
      <div className="about-info">
        <ul class="nav-links flex items-center justify-center gap-[20px] text-white">
          <li>
            <a class="active" href="index.html">
              Home
            </a>
          </li>
          <li>
            <a href="#">Home of Dreams</a>
          </li>
          <li>
            <a href="#">Highlights</a>
          </li>
          <li>
            <a href="#">Landmarks</a>
          </li>
          <li>
            <a href="#">Floor Plan</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
