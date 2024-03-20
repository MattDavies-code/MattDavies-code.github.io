import React from 'react';
import { Link } from 'react-scroll';
import Logo from '/assets/logo2T.png';

const NavBar = ({ handleThemeSwitch, theme }) => {
  const sun = (
    <svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
			/>
		</svg>
  );

  const moon = (
    <svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="white"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
			/>
		</svg>
  );

  return (
    <nav className="fixed w-full z-30 top-0 text-white bg-black bg-opacity-100">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2.5 px-10 lg:px-60">
        <div className="pl-4 flex items-center">
          <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-1xl" href="#">
            <img src={Logo} alt="Logo" className="h-12 w-auto" />       
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          {/* Mobile menu button */}
        </div>
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-gray-900 lg:bg-transparent text-sm lg:flex-grow">
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
          <Link to="Intro" smooth={true} duration={800} className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-800 hover:text-white mr-2">
              Intro
            </Link>
            <Link to="Portfolio" smooth={true} offset={-90} duration={800} className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-800 hover:text-white mr-2">
              Portfolio
            </Link>
            <Link to="Timeline" smooth={true} offset={-80} duration={800} className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-800 hover:text-white mr-2">
              Timeline
            </Link>
            <Link to="Contact" smooth={true} duration={800} className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-800 hover:text-white mr-4">
              Contact
            </Link>
          </div>
        </div>
        <button
          type="button"
          onClick={handleThemeSwitch}
          className="p-2 z-10 bg-violet-300 dark:bg-orange-300 text-lg p-1 rounded-md mr-4"
        >
          {theme === 'dark' ? sun : moon}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;