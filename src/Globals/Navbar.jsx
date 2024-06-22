import { useContext, useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "src/Context/ListingDataContext";

const Navbar = () => {
  const style = ({ isActive }) => ({
    background: isActive ? "rgb(0 17 54)" : "",
  });

  const innerNavLinkStyle = ({ isActive }) => ({
    background: isActive ? "rgb(0 17 54)" : "",
    color: isActive ? "white" : "",
  });

  const { role } = useContext(MyContext);
  return (
    <div className="max-md:hidden md:block  relative">
      <div className="menu-broker-container mx-auto">
        <ul id="menu-broker" className="menu">
          {role !== "N" && (
            <li
              id="menu-item-552041"
              className={` current_page_item menu-item menu-item-type-custom menu-item-object-custom  current-menu-ancestor current-menu-parent menu-item-has-children menu-item-552041`}
            >
              <NavLink to="/new-candidate" style={style} aria-current="page">
                Candidates
              </NavLink>
              <ul className="sub-menu z-[999] relative">
                {/* first column */}
                <li
                  id="menu-item-552042"
                  className="icon-fls  current_page_item menu-item menu-item-type-custom menu-item-object-custom  current-menu-ancestor current-menu-parent menu-item-has-children menu-item-552042"
                >
                  <div className="flex">
                    <div className="h-8 w-8 text-[#2176ff] ml-4 mr-2">
                   

                    </div>
                    <div className="nav-heading flex-1">
                    <NavLink aria-current="page" className=" gap-3" style={{display:'flex'}}>   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>My Candidates </NavLink>


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

                <li
                  id="menu-item-552042"
                  className="icon-fls  current_page_item menu-item menu-item-type-custom menu-item-object-custom  current-menu-ancestor current-menu-parent menu-item-has-children menu-item-552042"
                >
                  <div className="flex">
                    
                    <div className="nav-heading flex-1">
                      <NavLink aria-current="page" className=" gap-3" style={{display:'flex'}}>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
</svg>Registrations </NavLink>

                      <ul className="sub-menu">
                        <li
                          id="menu-item-552043"
                          className=" current_page_item menu-item menu-item-type-custom menu-item-object-custom  menu-item-552043"
                        >
                          <NavLink
                            to="/messages/territory-check"
                            style={innerNavLinkStyle}
                            aria-current="page"
                          >
                            Territory Check
                          </NavLink>
                          <NavLink
                            to="/messages/formal-registration"
                            style={innerNavLinkStyle}
                            aria-current="page"
                          >
                            Formal Registrations
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>

         
            </li>
          )}
          <li
            id="menu-item-552360"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-552360"
          >
            <NavLink to="/funding-calculator" style={style}>
              Funding Calculator
            </NavLink>
          </li>
          <li
            id="menu-item-552360"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-552360"
          >
            <NavLink to="/business-assessment" style={style}>
              Business Assessment
            </NavLink>
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
