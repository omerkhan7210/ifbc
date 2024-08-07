import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { MyContext } from "src/Context/ListingDataContext";
import { decrementByListing } from "src/Redux/listingReducer";
const ShoppingCartPopup = ({ show, setShow }) => {
  const { listings } = useContext(MyContext);
  const cartListings = useSelector((state) => state.counter.cartListings);
  const dispatch = useDispatch();
  const loc = useLocation();
  const ref = useRef();

  useEffect(() => {
    if (cartListings.length > 0) {
      setShow(true);
    }
  }, [cartListings, setShow]);

  // useEffect(() => {
  //   if (show) {
  //     setTimeout(() => {
  //       setShow(false);
  //     }, 3000);
  //   }
  // }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <Dialog
          open={show}
          onClose={() => setShow(false)}
          className="relative z-9999"
          ref={ref}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gray-500 bg-opacity-75 z-[999]"
          />
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 overflow-hidden z-[9999]"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <motion.div className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out bg-white">
                  {cartListings?.length > 0 ? (
                    <div className="flex h-full flex-col bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Review Franchises
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              onClick={() => setShow(false)}
                              className="relative -m-2 p-2 text-red-600 hover:text-gray-500"
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                aria-hidden="true"
                                className="h-6 w-6"
                              />
                            </button>
                          </div>
                        </div>

                        <div
                          id="main-right-container"
                          className="h-full w-full col-span-5"
                        >
                          <div
                            id="sub-container"
                            className="divide-y-2 divide-custom-heading-color/10 w-full"
                          >
                            {/* items-row */}
                            {listings
                              .filter((listing) =>
                                cartListings.includes(listing.docId)
                              )
                              .map((listing, index) => (
                                <motion.div
                                  key={index}
                                  className="flex flex-col sm:flex-row justify-between items-center py-3 relative"
                                >
                                  <div
                                    id="item-side"
                                    className="flex flex-col sm:flex-row gap-1 items-center w-full"
                                  >
                                    <div>
                                      <img
                                        src={`./${listing.imgUrl}`}
                                        alt=""
                                        className="rounded-lg"
                                        width={80}
                                      />
                                    </div>
                                    <div
                                      id="content-side"
                                      className="flex flex-col max-sm:items-center"
                                    >
                                      <h2 className="text-sm">
                                        {listing.name}
                                      </h2>
                                      <h2 className="text-xs">
                                        Category: <b>{listing.category}</b>
                                      </h2>
                                      <h2 className="text-xs">
                                        Cash Required:{" "}
                                        <b>{listing.investmentRange}</b>
                                      </h2>
                                    </div>
                                  </div>
                                  <div
                                    onClick={() =>
                                      dispatch(
                                        decrementByListing(listing.docId)
                                      )
                                    }
                                    id="btn-side"
                                    className="sm:px-6 max-sm:absolute max-sm:top-[10px] max-sm:right-[40px] max-sm:rounded-full max-sm:w-8 max-sm:h-8 max-sm:bg-red-700 max-sm:text-white max-sm:flex max-sm:justify-center max-sm:items-center sm:text-red-800 cursor-pointer"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="size-5"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                      />
                                    </svg>
                                  </div>
                                </motion.div>
                              ))}
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div
                          id="button-container"
                          className="flex max-sm:justify-center sm:justify-center items-center py-5 gap-5 flex-col"
                        >
                          {loc.pathname !== "/search-franchises" && (
                            <NavLink
                              to="/search-franchises"
                              className="candidate-btn flex items-center justify-between w-full"
                            >
                              See More Listings
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
                                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                              </svg>
                            </NavLink>
                          )}
                          <NavLink
                            to="/checkout"
                            className="candidate-secondary-btn flex items-center justify-between w-full"
                          >
                            Checkout
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
                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                            </svg>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <NoListingsFound setShow={setShow} />
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

const NoListingsFound = ({ setShow }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6  h-full">
      <div className="ml-3 flex h-7 items-center absolute top-5 right-5">
        <button
          type="button"
          onClick={() => setShow(false)}
          className="relative -m-2 p-2 text-red-600 hover:text-gray-500"
        >
          <span className="absolute -inset-0.5" />
          <span className="sr-only">Close panel</span>
          <XMarkIcon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="rgb(0, 17, 54)"
        className=" size-24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>

      <h1 className="text-2xl  text-center  text-custom-heading-color">
        NO LISTINGS ADDED TO CART
      </h1>
      <NavLink to="/search-franchises" className="candidate-btn capitalize">
        Add Listings
      </NavLink>
    </div>
  );
};

export default ShoppingCartPopup;
