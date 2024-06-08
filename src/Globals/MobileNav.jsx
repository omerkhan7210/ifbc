import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "src/Context/ListingDataContext";

const MobileNav = ({ setMobileActive }) => {
  const [submenuactive, setsubmenuactive] = useState(false);
  const { userDetails, ifLogin } = useContext(MyContext);
  const handleLogOut = () => {
    localStorage.setItem("ifLogin", false);
    localStorage.removeItem("userDetails");
    history("/");
  };
  return (
    <nav
      id="mobile-nav"
      className="bg-beige fixed top-0 left-0 right-0 z-40 w-screen h-full overflow-y-auto"
    >
      <div className="text-right pt-4 pr-4">
        <button
          type="button"
          className="text-custom-heading-color"
          onClick={() => setMobileActive(false)}
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 7L7 17M7 7L17 17"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="menu-franchisor-container">
        <ul id="menu-franchisor" className="menu">
          <li
            id="menu-item-552288"
            className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-552288"
          >
            <Link href="/" aria-current="page" className>
              Online Magazine
            </Link>
          </li>
          <li
            id="menu-item-552289"
            className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-552289"
          >
            <Link onClick={() => setsubmenuactive(!submenuactive)}>
              Franchise Listing
            </Link>
            <ul className={`sub-menu ${submenuactive ? "open-submenu" : ""}`}>
              <li
                id="menu-item-552305"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-552305"
              >
                <a href="/edit-profile/">Edit Listing</a>
              </li>
              <li
                id="menu-item-552335"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-552335"
              >
                <a href="/listings">View Listing</a>
              </li>
              <li
                id="menu-item-552336"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-552336"
              >
                <a href="/franchisor-frequently-asked-questions-faq-2/">
                  Frequently Asked Questions (FAQ)
                </a>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-615762"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-615762"
          >
            <Link to="/resales/">Resales</Link>
          </li>
          <li
            id="menu-item-552290"
            className="menu-item menu-item-type-custom menu-item-object-custom   menu-item-552290"
          >
            <Link to="/messages/">Candidates</Link>
          </li>
          <li
            id="menu-item-552291"
            className="menu-item menu-item-type-custom menu-item-object-custom  menu-item-552291"
          >
            <Link to="/members/">Connect</Link>
          </li>
          <li
            id="menu-item-552292"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-552292"
          >
            <Link to="/new-support-ticket">Help</Link>
          </li>
        </ul>
      </div>
      {ifLogin && (
        <div
          className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100  p-4 mt-2 flex-col flex gap-3"
          aria-labelledby="hs-dropdown-default"
        >
          <div className="flex justify-start items-center gap-2  py-2">
            <img
              src="/images/avatar-placeholder.png"
              className="w-10 h-10 rounded-full"
            />
            <div id="parasContainer">
              <p className="text-lg text-[#333] font-bold">
                {/* {userDetails ? userDetails?.username : "John Doe"} */}John
                Doe
              </p>
              <p className="text-md text-gray-500 mt-0.5">
                {/* {userDetails ? userDetails?.email : "johndoe23@gmail.com"} */}
                johndoe23@gmail.com
              </p>
            </div>
          </div>
          {/* logout button */}
          <a
            className="flex justify-between w-full py-4 uppercase rounded-lg text-md px-4  text-white hover:bg-custom-dark-blue focus:outline-none focus:bg-custom-dark-blue bg-custom-heading-color cursor-pointer"
            onClick={handleLogOut}
          >
            Log out{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
              />
            </svg>
          </a>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
