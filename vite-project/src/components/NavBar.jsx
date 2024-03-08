import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <nav className="fixed w-full z-30 top-0 text-white bg-black">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
            Matthew Davies
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button id="nav-toggle" className="flex items-center p-1 text-orange-800 hover:text-gray-900">
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"/></svg>
          </button>
        </div>
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-black p-4 lg:p-0 z-20" id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link className="inline-block py-2 px-4 text-white no-underline" to="intro" smooth={true}>Intro</Link>
            </li>
            <li className="mr-3">
              <Link className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4" to="portfolio" smooth={true}>Portfolio</Link>
            </li>
            <li className="mr-3">
              <Link className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4" to="timeline" smooth={true}>Timeline</Link>
            </li>
            <li className="mr-3">
              <Link className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4" to="contact" smooth={true}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;