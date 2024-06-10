import React from "react";

const ShoppingCart = () => {
  return (
    <div id="main-shopping-cart">
      <div
        id="top-text"
        className="relative flex flex-col gap-2 justify-center items-center before:absolute before:content-[''] before:top-0 before:w-full before:h-full before:bg-custom-heading-color/60 min-h-[400px] before:z-10"
        style={{
          background: "url(/images/banners/candidatelist1.jpeg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-7xl text-white font-bold text-center z-20">
          Shopping Cart
        </h1>
      </div>
      <div id="main-container" className="h-full w-full p-10 ">
        <div id="sub-container" className="divide-y-2 divide-green-600">
          {/* heading-row */}
          <div id="first-row" className="max-sm:hidden sm:flex justify-between">
            <h2 className="text-xl font-bold text-left">Product</h2>
            <h2 className="text-xl font-bold text-left">Remove</h2>
          </div>

          {/* items-row */}

          <div
            id="second-row"
            className=" flex flex-col sm:flex-row justify-between mt-4 items-center py-5 relative"
          >
            <div
              id="item-side"
              className="flex flex-col sm:flex-row gap-4 items-center w-full"
            >
              <div>
                <img
                  src="/images/accounts/stool.jpg"
                  alt=""
                  className="rounded-lg"
                  width={200}
                  height={400}
                />
              </div>
              <div
                id="content-side"
                className="flex flex-col max-sm:items-center"
              >
                <h2 className="text-xl font-bold">Wooden Stool</h2>
                <h2>
                  Color: <b>Light Brown</b>
                </h2>
                <h2>
                  Delivery Time: <b>2-3 Days</b>
                </h2>
                <h2>
                  Estimated Cost: <b>20$ From NewYork</b>
                </h2>
              </div>
            </div>
            <div
              id="btn-side"
              className="sm:px-6 max-sm:absolute max-sm:top-[0px] max-sm:right-[40px] max-sm:rounded-full max-sm:w-16 max-sm:h-16 max-sm:bg-red-700 max-sm:text-white max-sm:flex max-sm:justify-center max-sm:items-center sm:text-red-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* btn row */}
        <div
          id="button-container"
          className="flex max-sm:justify-center sm:justify-start items-center py-5 "
        >
          <button className="candidate-btn flex items-center">
            Check Out
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* <div className="h-full w-full grid grid-cols-12 p-10">
        <div id="left-side" className="col-span-11">
          <h2 className="text-xl font-bold text-left">Product</h2>
          <div className="flex flex-row gap-4 items-center my-4">
            <div>
              <img
                src="/images/accounts/stool.jpg"
                alt=""
                className="rounded-lg"
                width={200}
                height={400}
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">Wooden Stool</h2>
              <h2>
                Color: <b>Light Brown</b>
              </h2>
              <h2>
                Delivery Time: <b>2-3 Days</b>
              </h2>
              <h2>
                Estimated Cost: <b>20$ From NewYork</b>
              </h2>
            </div>
          </div>
          <div id="button-container" className="flex items-center">
            <button className="candidate-btn flex items-center">
              Check Out
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-3 my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            <h2 className="text-sm">Continue Shopping</h2>
          </div>
        </div>
        <div id="right-side" className="col-span-1 flex flex-col items-center">
          <h2 className="text-xl font-bold text-right">Remove</h2>
          <div className=" text-red-500 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        </div>
      </div> */}

      {/* <div id="button-container" className="flex items-center">
        <button className="candidate-btn flex items-center">
          Check Out
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
            />
          </svg>
        </button>
      </div> */}
    </div>
  );
};

export default ShoppingCart;
