// import { Link } from "react-router-dom";

import {useEffect, useRef, useState} from "react";

function Nav() {

  // State for the dropdown menu
  const [showDropdown, setShowDropdown] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  
  // Ref for the dropdown menu
  const dropDownRef = useRef(null);
  const hamDropDownRef = useRef(null);

  // Event listener to close the dropdown menu when clicking outside
  useEffect(() => {
    function handleClickedOutside(e) {
      // If the dropdown menu is open and the click is outside the dropdown menu, then close the dropdown menu
      if(dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("click", handleClickedOutside);

    // Cleanup function (good practice)
    return () => {
      document.removeEventListener("click", handleClickedOutside);
    }
    
    // Empty dependency array to run the effect only once on mount and unmount
  }, []);
  
  useEffect(() => {
    function handleClickedOutside(e) {
      if(hamDropDownRef.current && !hamDropDownRef.current.contains(e.target)) {
        setShowHamburgerMenu(false);
      }
    }

    document.addEventListener("click", handleClickedOutside);

    return () => {
      document.removeEventListener("click", handleClickedOutside);
    }
  }, []);

  function handleAgentToggle() {
    setShowDropdown(!showDropdown);
  }
  function handleHamburgerMenuToggle() {
    setShowHamburgerMenu(!showHamburgerMenu);
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-[#111111] dark:border-gray-700 font-valorant">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/src/assets/images/Valorant-aPVsZquE_brandlogos.net.svg"
            className="h-8 text-white"
            alt="Valorant Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-red-500">
            VALORANT
          </span>
        </a>
        <button ref={hamDropDownRef} onClick={handleHamburgerMenuToggle} data-collapse-toggle="navbar-dropdown" type="button" aria-controls="navbar-dropdown"
                aria-expanded="false" className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm
                text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none
                focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700
                dark:focus:ring-gray-600"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
          {
            // Change the span with the modal containing the menu
            showHamburgerMenu && <span className="text-black">Open main menu</span>
          }
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50
          md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-[#111111]
          md:dark:bg-[#111111] dark:border-gray-700"
          >
            <li>
              <a
                href="/"
                className="block px-3 py-2 text-white bg-red-700 rounded md:bg-transparent md:hover:text-red-700 md:p-0
                md:dark:hover:text-red-500 dark:bg-red-600 md:dark:bg-transparent"
                aria-current="page"
              >
                HOME
              </a>
            </li>
            <li className="relative" ref={dropDownRef}>
              <button
                onClick={handleAgentToggle}
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-red-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                AGENTS{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              { showDropdown &&
                <div id="dropdownNavbar" className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg
                shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="#"
                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="#"
                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600
                      dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              }
            </li>
            <li>
              <a href="#"
                 className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
                 md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700
                 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                MAPS
              </a>
            </li>
            <li>
              <a href="#"
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                GUNS
              </a>
            </li>
            <li>
              <a href="/about"
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                ABOUT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
