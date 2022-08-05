import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <section>
      <div className="w-mobile md:w-container_width mx-auto">
        <nav className="h-[150px] w-full  ">
          <div className="flex justify-between items-center h-full ">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/kelvin45/image/upload/q_auto/c_scale,w_207,h_134/v1659646477/logos/logo-removebg-preview_ka58hd.png"
                alt=""
              />
            </Link>
            <div>
              <ul className="flex space-x-10">
                <Link to="/">
                  <li className="hover:text-hoverColor cursor-pointer">Home</li>
                </Link>
                <li className="hover:text-hoverColor cursor-pointer">About</li>
                <li className="hover:text-hoverColor cursor-pointer">
                  Services
                </li>
                <Link to="/blog">
                  <li className="hover:text-hoverColor cursor-pointer">Blog</li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
