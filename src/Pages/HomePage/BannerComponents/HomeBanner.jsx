import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchingSection from "./SearchingSection";
import { MyContext } from "src/Context/ListingDataContext";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import BarLoader from "src/Animations/BarLoader";

const HomeBanner = () => {
  const listingBoxes = [
    {
      id: "Popular",
      bgcolor: "#002880",
      svg: (
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
            d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
          />
        </svg>
      ),
      min: 20,
      max: 25,
    },
    {
      id: "Recent",
      bgcolor: "#00184d",
      svg: (
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
            d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </svg>
      ),
      min: 70,
      max: 75,
    },
    {
      id: "Trending",
      bgcolor: "#00081a",
      svg: (
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
            d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
          />
        </svg>
      ),
      min: 50,
      max: 55,
    },
  ];
  const slidesData = [
    {
      image: "/images/banners/banner.png",
      text: "The Best Franchise Opportunities Are Available For You!",
    },
    {
      image: "/images/banners/banner2.png",
      text: "Discover Amazing Business Ventures Today!",
    },
    {
      image: "/images/banners/banner3.png",
      text: "Unlock Your Potential with Our Franchises!",
    },
    {
      image: "/images/banners/banner4.png",
      text: "Join the Fastest-Growing Brands in the Industry!",
    },
    {
      image: "/images/banners/banner5.png",
      text: "Start Your Journey to Business Success Today!",
    },
  ];

  return (
    <>
      <section
        id="homebanner"
        className="w-full min-h-[600px] relative flex flex-col  items-center "
      >
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          spaceBetween={30}
          effect="fade"
          loop
          speed="1000"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          className="w-full swiperslidehomebannermain  min-h-[600px] flex h-full flex-col  z-10 relative"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="swiperslidehomebanner w-full  md:px-32 min-h-[600px]  flex flex-col justify-start max-md:pt-16 md:max-xl:pt-32 xl:pt-20  items-center"
                style={{
                  background: `url(${slide.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h1
                  className="max-md:text-3xl z-50 relative md:max-2xl:text-6xl text-7xl max-md:px-5  text-center text-white"
                  style={{
                    lineHeight: window.innerWidth > 768 ? "5rem" : "40px",
                  }}
                >
                  {slide.text}
                </h1>
              </div>
            </SwiperSlide>
          ))}
          {/* swiper end */}
        </Swiper>
        <div className="absolute bg-transparent max-md:top-44 md:max-2xl:top-64 2xl:top-72 w-full mx-auto flex flex-col gap-10 z-20 md:px-32 max-md:px-4 ">
          <SearchingSection />
        </div>
      </section>

      <div id="popular-cats" className="w-full grid grid-cols-12 z-50">
        {listingBoxes.map((box, index) => (
          <ListingBox
            key={index}
            id={box.id}
            bgcolor={box.bgcolor}
            svg={box.svg}
            min={box.min}
            max={box.max}
          />
        ))}
      </div>
    </>
  );
};

const ListingBox = ({ id, bgcolor, svg, min, max }) => {
  const { listings, loading } = useContext(MyContext);
  const [unique, setUnique] = useState([]);
  useEffect(() => {
    if (!loading) {
      const uniqueFranchisedCats = [
        ...new Set(listings.map((listing) => listing.category)),
      ];
      setUnique(uniqueFranchisedCats);
    }
  }, [loading]);

  const { setFilters } = useContext(MyContext);
  const history = useNavigate();
  const handleSearchInputChange = (cat) => {
    setFilters({ category: [cat] });

    history("/listings");
  };
  if (loading) {
    return <BarLoader bgcolor={"white"} />;
  }
  return (
    <div
      id={id}
      className={` w-full col-span-12 md:col-span-4 p-5`}
      style={{ backgroundColor: `${bgcolor}` }}
    >
      <h3 className="text-lg font-bold text-white flex items-center gap-1 ">
        {svg}
        {id} Franchises
      </h3>
      <ul id="list-container " className="ml-7 mt-3 flex flex-col gap-2">
        {unique &&
          unique.length > 0 &&
          unique.map((listing, index) => {
            if (index > min && index < max) {
              return (
                <li
                  key={listing.name}
                  className="text-sm text-white list-disc "
                >
                  <button
                    onClick={() => handleSearchInputChange(listing)}
                    to="/listings"
                    className="group relative text-left"
                  >
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full group-hover:transition-all"></span>
                    {listing}
                  </button>
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
};

export default HomeBanner;
