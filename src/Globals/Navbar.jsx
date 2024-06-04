import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";

const Navbar = () => {
  const style = ({ isActive }) => ({
    background: isActive ? "rgb(0 17 54)" : "",
  });

  const innerNavLinkStyle = ({ isActive }) => ({
    background: isActive ? "rgb(0 17 54)" : "",
    color: isActive ? "white" : "",
  });

  return (
    <div className="hidden lg:block relative">
      <div className="menu-broker-container">
        <ul id="menu-broker" className="menu">
          <li
            id="menu-item-552041"
            className={` current_page_item menu-item menu-item-type-custom menu-item-object-custom  current-menu-ancestor current-menu-parent menu-item-has-children menu-item-552041`}
          >
            <NavLink to="/new-candidate" style={style} aria-current="page">
              Candidates
            </NavLink>
            <ul className="sub-menu z-[999] relative">
              <li
                id="menu-item-552042"
                className="icon-fls  current_page_item menu-item menu-item-type-custom menu-item-object-custom  current-menu-ancestor current-menu-parent menu-item-has-children menu-item-552042"
              >
                <div className="flex">
                  <div className="h-8 w-8 text-[#2176ff] ml-4 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      fill="currentColor"
                      viewBox="0 0 350 350"
                    >
                      <path
                        d="M273 81.2c-1.1 0-2.2-.4-3-1.2-1.7-1.7-1.7-4.4 0-6.1l24.1-24.1c1.7-1.7 4.4-1.7 6.1 0 1.7 1.7 1.7 4.4 0 6.1L276.1 80c-.9.8-2 1.2-3.1 1.2zM163.5 190.8c-1.1 0-2.2-.4-3-1.2-1.7-1.7-1.7-4.4 0-6.1l90.1-90.1c1.7-1.7 4.4-1.7 6.1 0 1.7 1.7 1.7 4.4 0 6.1l-90.1 90.1c-.9.8-2 1.2-3.1 1.2z"
                        className="st0"
                      />
                      <path
                        d="M253.6 100.7c-2.1 0-3.9-1.5-4.2-3.6l-4.9-31c-.2-1.1.1-2.3.8-3.2l38-51.7c2-2.7 5.3-3.8 8.5-3 3.2.9 5.5 3.6 5.8 6.9l3.9 37.3c.2 2.3-1.5 4.5-3.8 4.7-2.4.2-4.5-1.5-4.7-3.8l-3.8-35.8-36 49 4.6 29.3c.4 2.3-1.2 4.5-3.6 4.9h-.6z"
                        className="st0"
                      />
                      <path
                        d="M284.6 105.6c-.2 0-.5 0-.7-.1l-31-4.9c-2.3-.4-3.9-2.6-3.6-4.9.4-2.3 2.6-3.9 4.9-3.6l29.3 4.6 49-36-35.8-3.8c-2.4-.2-4.1-2.3-3.8-4.7.2-2.3 2.4-4.1 4.7-3.8l37.3 3.9c3.3.3 6 2.6 6.9 5.8.9 3.2-.3 6.5-3 8.5l-51.7 38c-.7.7-1.6 1-2.5 1zM163.5 222.3c-19.8 0-35.8-16.1-35.8-35.8s16.1-35.8 35.8-35.8c.9 0 1.9 0 2.8.1 2.4.2 4.1 2.2 3.9 4.6s-2.2 4.1-4.6 3.9c-.7-.1-1.4-.1-2.1-.1-15 0-27.2 12.2-27.2 27.2s12.2 27.2 27.2 27.2 27.2-12.2 27.2-27.2c0-.8 0-1.5-.1-2.3-.2-2.4 1.6-4.4 3.9-4.6 2.4-.2 4.4 1.6 4.6 3.9.1 1 .1 2 .1 3 .1 19.9-16 35.9-35.7 35.9z"
                        className="st0"
                      />
                      <path
                        d="M163.5 262.7c-42 0-76.2-34.2-76.2-76.2s34.2-76.2 76.2-76.2c12.7 0 25.2 3.2 36.3 9.2 2.1 1.1 2.9 3.7 1.7 5.8s-3.7 2.8-5.8 1.7c-9.8-5.3-21-8.2-32.2-8.2-37.3 0-67.6 30.3-67.6 67.6s30.3 67.6 67.6 67.6 67.6-30.3 67.6-67.6c0-11.3-2.8-22.4-8.2-32.2-1.1-2.1-.4-4.7 1.7-5.8s4.7-.4 5.8 1.7c6 11.1 9.2 23.6 9.2 36.3.1 42.1-34.1 76.3-76.1 76.3z"
                        className="st0"
                      />
                      <path
                        d="M163.5 304C98.7 304 46 251.3 46 186.5S98.7 69 163.5 69c24 0 47 7.2 66.7 20.7 1.9 1.3 2.4 4 1.1 6s-4 2.4-6 1.1c-18.2-12.6-39.6-19.2-61.8-19.2-60.1 0-108.9 48.9-108.9 108.9s48.9 108.9 108.9 108.9 108.9-48.9 108.9-108.9c0-22.2-6.6-43.6-19.2-61.8-1.3-1.9-.9-4.6 1.1-6 2-1.3 4.6-.9 6 1.1 13.6 19.7 20.7 42.7 20.7 66.7 0 64.8-52.7 117.5-117.5 117.5z"
                        className="st0"
                      />
                      <path
                        d="M163.5 342.1c-85.8 0-155.6-69.8-155.6-155.6S77.7 31 163.5 31c24.1 0 47.1 5.3 68.5 15.9 1.6.8 3.2 1.6 4.8 2.5 2.1 1.1 2.9 3.7 1.8 5.8-1.1 2.1-3.7 2.9-5.8 1.8-1.5-.8-3-1.6-4.5-2.3-20.2-10-42-15-64.8-15-81 0-147 65.9-147 147s65.9 147 147 147 147-65.9 147-147c0-23.9-5.9-47.7-17-68.7-1.1-2.1-.3-4.7 1.8-5.8s4.7-.3 5.8 1.8c11.8 22.2 18 47.4 18 72.7-.1 85.6-69.8 155.4-155.6 155.4z"
                        className="st0"
                      />
                    </svg>
                  </div>
                  <div className="nav-heading flex-1">
                    <NavLink aria-current="page">My Candidate</NavLink>

                    <ul className="sub-menu">
                      <li
                        id="menu-item-552043"
                        className=" current_page_item menu-item menu-item-type-custom menu-item-object-custom  menu-item-552043"
                      >
                        <NavLink
                          to="/candidate-list"
                          style={innerNavLinkStyle}
                          aria-current="page"
                        >
                          Candidate List
                        </NavLink>
                        <NavLink
                          to="/new-candidate"
                          style={innerNavLinkStyle}
                          aria-current="page"
                        >
                          New Candidate
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-552360"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-552360"
          >
            <NavLink to="/listings" style={style}>
              Franchises Search (FLS)
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
