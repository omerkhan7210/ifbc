import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { MyContext } from "src/Context/ListingDataContext";
import ListingsColumns from "../ListingsPage/ListingsColumns";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  const { listings } = useContext(MyContext);
  const cartListings = useSelector((state) => state.counter.listings);
  const [noCartlistings, setNoCartListings] = useState(true);

  useEffect(() => {
    if (cartListings && cartListings.length > 0) {
      setNoCartListings(false);
    } else {
      setNoCartListings(true);
    }
  }, [cartListings]);

  return (
    <>
      <div
        id="top-text"
        className=" relative flex flex-col gap-2 justify-center items-center before:absolute before:content-[''] before:top-0 before:w-full before:h-full before:bg-custom-heading-color/60 min-h-[400px] before:z-10"
        style={{
          background: "url(/images/banners/checkout.jpg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-7xl text-white font-bold text-center z-20">
          CHECKOUT
        </h1>
      </div>
      {!noCartlistings ? (
        <div class="grid grid-cols-2 my-10 px-10 gap-5">
          {/* form */}
          <LeftSidebar cartListings={cartListings} />

          {/* slider */}
          <RightSibebar listings={listings} cartListings={cartListings} />
        </div>
      ) : (
        <NoListingsFound />
      )}
    </>
  );
};

const RightSibebar = ({ listings, cartListings }) => {
  return (
    <div id="right-side-checkout-form" className="flex h-full items-center">
      <Swiper
        modules={[Navigation, Autoplay, Pagination, A11y]}
        spaceBetween={5}
        slidesPerView={2}
        navigationautoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {listings &&
          listings.length > 0 &&
          listings
            .filter((listing) => cartListings.includes(listing.DocId))
            .map((listing, index) => {
              if (index < 25) {
                return (
                  <SwiperSlide key={index}>
                    <ListingsColumns listing={listing} active="" />
                  </SwiperSlide>
                );
              }
            })}
      </Swiper>
    </div>
  );
};

const LeftSidebar = ({ cartListings }) => {
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);
  const [formFields, setFormFields] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const handleInputChange = ({ target: { name, value } }) => {
    const newName = name.toLowerCase().split(" ").join("");
    // Remove the error for the field if there is a value
    if (
      formErrors &&
      Object.keys(formErrors).length > 0 &&
      value.trim() !== ""
    ) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
      formErrors[name] && delete formErrors[name];
    }

    setFormFields((prev) => ({
      ...prev,
      [newName]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const reqFields = [
      "name",
      "city",
      "country",
      "email",
      "phone",
      "zipcode",
      "state",
    ];
    let allFieldsValid = true;

    reqFields.forEach((field) => {
      const newKey = field.toLowerCase().split(" ").join("");
      if (!formFields[newKey] || formFields[newKey].trim() === "") {
        setFormErrors((prev) => ({ ...prev, [newKey]: "error" }));
        allFieldsValid = false;
      } else {
        setFormErrors((prev) => ({ ...prev, [newKey]: "" }));
      }
    });

    try {
      if (allFieldsValid) {
        const formData = {
          name: formFields.name,
          phone: formFields.phone,
          email: formFields.email,
          city: formFields.city,
          country: formFields.country,
          zipcode: formFields.zipcode,
          state: formFields.state,
          cartListings: JSON.stringify(cartListings),
        };

        const jsonData = JSON.stringify(formData);
        const baseUrl =
          "http://siddiqiventures-001-site3.ktempurl.com/checkout.aspx";

        // Send the POST request using Axios
        const response = await axios.post(baseUrl, jsonData, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        // if (response.status === 200 && response.data === "Request Submitted.") {
        //   setFormErrors({});
        //   setSuccessMsg("Request Submitted.");

        //   setLoading(false);

        //   setTimeout(() => {
        //     history("/");
        //   }, 3000);
        // } else {
        //   setFormErrors({ error: response.data });
        //   setLoading(false);
        //   window.scrollTo(0, 500);
        //   // Handle unexpected response
        // }
      } else {
        setFormErrors((prev) => ({
          ...prev,
          error: "Please fill in all the required fields",
        }));
        setLoading(false);
        window.scrollTo(0, 500);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div id="left-side-checkout-form">
      <div className="flex flex-col rounded-lg shadow-sm ">
        {formErrors.error && (
          <p className="border-2 border-red-600 text-red-600 p-4 flex justify-between">
            {formErrors.error}
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
                d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
              />
            </svg>
          </p>
        )}
        <div className="mt-4">
          <label className="text-custom-heading-color" htmlFor="name">
            Name
          </label>
          <input
            onChange={handleInputChange}
            name="name"
            placeholder="Your name"
            className={`candidate-input ${formErrors.name ? "bg-red-300" : ""}`}
            type="text"
            defaultValue={""}
          />
        </div>

        <div className="mt-4 flex flex-row space-x-2">
          <div className="flex-1">
            <label className="text-custom-heading-color" htmlFor="state">
              Email
            </label>
            <input
              onChange={handleInputChange}
              name="email"
              placeholder="Your email"
              className={`candidate-input ${
                formErrors.email ? "bg-red-300" : ""
              }`}
              id="email"
              type="email"
            />
          </div>
          <div className="flex-1">
            <label className="text-custom-heading-color" htmlFor="city">
              Phone
            </label>
            <input
              onChange={handleInputChange}
              name="phone"
              placeholder="Your phone"
              className={`candidate-input ${
                formErrors.phone ? "bg-red-300" : ""
              }`}
              id="phone"
              type="number"
              defaultValue={""}
            />
          </div>
        </div>

        <div className="mt-4 flex flex-row space-x-2">
          <div className="flex-1">
            <label className="text-custom-heading-color" htmlFor="city">
              City
            </label>
            <input
              onChange={handleInputChange}
              name="city"
              placeholder="Your city"
              className={`candidate-input ${
                formErrors.city ? "bg-red-300" : ""
              }`}
              id="city"
              type="text"
              defaultValue={""}
            />
          </div>
          <div className="flex-1">
            <label className="text-custom-heading-color" htmlFor="state">
              State
            </label>
            <input
              onChange={handleInputChange}
              name="state"
              placeholder="Your state"
              className={`candidate-input ${
                formErrors.state ? "bg-red-300" : ""
              }`}
              id="state"
              type="text"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-row space-x-2">
          <div className="flex-1">
            <label className="text-custom-heading-color" htmlFor="zip">
              ZIP
            </label>
            <input
              onChange={handleInputChange}
              name="zipcode"
              placeholder="Your ZIP code"
              className={`candidate-input ${
                formErrors.zipcode ? "bg-red-300" : ""
              }`}
              id="zip"
              type="text"
            />
          </div>
          <div className="flex-1">
            <label className="text-custom-heading-color" htmlFor="country">
              Country
            </label>
            <select
              name="country"
              className={`candidate-select w-full ${
                formErrors.country ? "bg-red-300" : ""
              }`}
              id="country"
              onChange={handleInputChange}
            >
              <option value>Select a country</option>
              <optgroup label="Africa">
                <option value="AF">Afghanistan</option>
                <option value="DZ">Algeria</option>
                <option value="AO">Angola</option>
                ...
                <option value="ZW">Zimbabwe</option>
              </optgroup>
              <optgroup label="Asia">
                <option value="AM">Armenia</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BH">Bahrain</option>
                ...
                <option value="YE">Yemen</option>
              </optgroup>
              <optgroup label="South America">
                <option value="AR">Argentina</option>
                <option value="BO">Bolivia</option>
                <option value="BR">Brazil</option>
                ...
                <option value="VE">Venezuela</option>
              </optgroup>
              ...
            </select>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            className="candidate-btn"
            type="submit"
            onClick={handleSubmit}
          >
            {loading ? "Loading..." : "Request Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

const NoListingsFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 my-20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="rgb(0, 17, 54)"
        className="size-64"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>

      <h1 className="text-5xl font-bold text-custom-heading-color">
        NO LISTINGS ADDED TO CART
      </h1>
      <NavLink to="/listings" className="candidate-btn capitalize">
        Add Listings
      </NavLink>
    </div>
  );
};

export default CheckOutForm;
