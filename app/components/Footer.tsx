'use client'
import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white w-full px-4 py-8">
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 gap-8 
                  sm:grid-cols-2 
                  lg:grid-cols-4"
      >
        <div>
          <h2 className="text-lg font-semibold mb-3">About Us</h2>
          <p className="text-sm text-gray-200">
            Music School is a premier institution dedicated to teaching and
            nurturing musical talent.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-sm text-gray-200">
            <li>
              <a href="/#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/#" className="hover:text-white">
                Courses
              </a>
            </li>
            <li>
              <a href="/#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex text-sm space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <p className="text-sm text-gray-200">New Delhi, India</p>
          <p className="text-sm text-gray-200">Delhi 110001</p>
          <p className="text-sm text-gray-200">Email: info@musicschool.com</p>
          <p className="text-sm text-gray-200">Phone: (123) 456-4567</p>
        </div>
      </div>

      <div className="border-t border-gray-500 mt-8 pt-4 text-center text-sm text-gray-300">
        © 2024 Music School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
