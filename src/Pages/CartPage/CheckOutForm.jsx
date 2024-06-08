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
import { NavLink } from "react-router-dom";

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
  console.log(noCartlistings);

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
        <div class="grid grid-cols-2 MY-20">
          <div id="left-side-checkout-form">
            <div className="mt-4 flex flex-col rounded-lg p-4 shadow-sm ">
              <div className="mt-4">
                <label className="text-custom-heading-color" htmlFor="name">
                  Name
                </label>
                <input
                  placeholder="Your name"
                  className="candidate-input"
                  type="text"
                />
              </div>
              <div className="mt-4">
                <label className="text-custom-heading-color" htmlFor="address">
                  Address
                </label>
                <textarea
                  placeholder="Your address"
                  className="candidate-input"
                  id="address"
                  defaultValue={""}
                />
              </div>
              <div className="mt-4 flex flex-row space-x-2">
                <div className="flex-1">
                  <label className="text-custom-heading-color" htmlFor="city">
                    City
                  </label>
                  <input
                    placeholder="Your city"
                    className="candidate-input"
                    id="city"
                    type="text"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-custom-heading-color" htmlFor="state">
                    State
                  </label>
                  <input
                    placeholder="Your state"
                    className="candidate-input"
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
                    placeholder="Your ZIP code"
                    className="candidate-input"
                    id="zip"
                    type="text"
                  />
                </div>
                <div className="flex-1">
                  <label
                    className="text-custom-heading-color"
                    htmlFor="country"
                  >
                    Country
                  </label>
                  <select className="candidate-input w-full" id="country">
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
                <button className="candidate-btn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div
            id="right-side-checkout-form"
            className="flex h-full items-center"
          >
            <Swiper
              modules={[Navigation, Autoplay, Pagination, A11y]}
              spaceBetween={20}
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
        </div>
      ) : (
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
      )}
    </>
  );
};

export default CheckOutForm;
