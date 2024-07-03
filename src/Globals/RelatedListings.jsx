import { useContext } from "react";
import BarLoader from "src/Animations/BarLoader";
import { MyContext } from "src/Context/ListingDataContext";
import ListingsColumns from "src/Pages/ListingsPage/ListingsColumns";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const RelatedListings = () => {
  const { listings, loading } = useContext(MyContext);

  return loading ? (
    <div className="grid place-content-center bg-custom-dark-blue px-4 py-24">
      <BarLoader />
      <h4>Loading Listings</h4>
    </div>
  ) : (
    <section className="hidden md:block bg-custom-dark-blue/15 p-12">
      <h2 className="font-bold font-poppins text-5xl capitalize mb-4 text-custom-heading-color  text-center mt-0">
        Featured Franchises
      </h2>

      <div className="max-w-5xl m-auto flex items-center h-full">
        <Swiper
          modules={[Navigation, Autoplay, Pagination, A11y, EffectCoverflow]}
          spaceBetween={20}
          slidesPerView={2}
          centeredSlides
          initialSlide={12}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
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
            listings.map((listing, index) => {
              if (index < 25) {
                return (
                  <SwiperSlide key={index}>
                    <ListingsColumns listing={listing} slider={true} />
                  </SwiperSlide>
                );
              }
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default RelatedListings;
