import React from "react"; // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

const Testimonials = () => {
  const reviews = [
    {
      text: "This consultancy has been instrumental in expanding our franchise internationally. Their expertise and tailored strategies have driven remarkable growth. Highly recommended!",
      image: "/images/accounts/ndtv.png",
      name: "Nathaniel S. Mitchell",
      title: "CEO & Founder",
    },
    {
      text: "Exceptional service! Their in-depth knowledge of global markets helped us navigate complex regulations and achieve successful franchise launches.",
      image: "/images/accounts/global.png",
      name: "Laura M. Thomas",
      title: "CTO",
    },
    {
      text: "The team’s insights and strategic guidance were invaluable in establishing our presence in new regions. Their support made the process seamless and efficient.",
      image: "/images/accounts/trt.png",
      name: "John D. Carter",
      title: "Tech Lead",
    },
    {
      text: "The team’s insights and strategic guidance were invaluable in establishing our presence in new regions. Their support made the process seamless and efficient.",
      image: "/images/accounts/cnbc.png",
      name: "Emily R. Johnson",
      title: "Product Manager",
    },
    {
      text: "They provided us with a clear roadmap and invaluable support throughout our franchise expansion journey. Their professionalism and expertise are top-notch.",
      image: "/images/accounts/cnn.png",
      name: "Michael A. Brown",
      title: "Head of Development",
    },
    {
      text: "Working with this consultancy was a game-changer. Their strategic insights and hands-on approach helped us achieve our international franchise goals with ease.",
      image: "/images/accounts/fox.png",
      name: "Sarah L. Davis",
      title: "Senior Engineer",
    },
  ];

  return (
    <section className="py-[30px] mb-20 bg-it-gray">
      <div className="theme-container mx-auto w-full">
        {/* <h1 className="px-5 bg-main-gray border border-it-blue/20 text-it-blue font-medium rounded-[30px] w-fit mx-auto">
          Our Testimonials
        </h1> */}
        {/* <h2 className="max-w-[847px] font-semibold text-24 sm:text-48 text-main-black text-center mx-auto my-4 md:my-8">
          Customer Say About Our Services
        </h2> */}

        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={window.innerWidth < 768 ? 1 : 4}
          navigation={window.innerWidth < 768 ? false : true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {reviews?.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center relative pt-[52px] pb-10 px-10 bg-white rounded-2xl ">
                <img
                  src={review.image}
                  alt={review.text}
                  className="mx-auto w-64 rounded-3xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
