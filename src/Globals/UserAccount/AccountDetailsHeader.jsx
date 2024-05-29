import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "src/Context/ListingDataContext";

const AccountDetailsHeader = ({ active }) => {
  return (
    <div
      className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
      style={elementStyle}
      aria-labelledby="hs-dropdown-default"
    >
      <div className="flex flex-col items-start  py-2 px-3">
        <p class="text-[15px] text-[#333] font-bold">
          {userDetails ? userDetails?.username : "John Doe"}
        </p>
        <p class="text-xs text-gray-500 mt-0.5">
          {userDetails ? userDetails?.email : "johndoe23@gmail.com"}
        </p>
      </div>
      {/* logout button */}
      <a
        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 cursor-pointer"
        onClick={handleLogOut}
      >
        Log out
      </a>
    </div>
  );
};

export default AccountDetailsHeader;
