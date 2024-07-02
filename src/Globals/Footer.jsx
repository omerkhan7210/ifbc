import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full flex-wrap items-center bg-bl justify-between md:p-4 max-md:pt-5 text-white text-center bg-custom-dark-blue max-md:pb-16 ">
      <div className="flex justify-between max-w-[90%] mx-auto max-md:flex-col-reverse md:flex-row max-md:gap-5   ">
        <div className="text-sm w-full flex justify-start ">
          Powered by International Franchise Business Consultant Corp.
        </div>

        <div className="text-sm w-full flex md:gap-10 md:justify-end max-md:justify-center max-md:gap-5">
          <NavLink to="/" className="text-white text-sm">
            Home
          </NavLink>
          <NavLink to="/about" className="text-white text-sm">
            About
          </NavLink>
          <NavLink to="/contact" className="text-white text-sm">
            Contact
          </NavLink>
          <NavLink to="/disclaimer" className="text-white text-sm">
            Disclaimer
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
