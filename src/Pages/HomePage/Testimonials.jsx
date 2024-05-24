import React from 'react'
import Carousel from 'react-multi-carousel';

const Testimonials = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const reviews = [
        {
          text: "This consultancy has been instrumental in expanding our franchise internationally. Their expertise and tailored strategies have driven remarkable growth. Highly recommended!",
          image: "/images/home-seven/client-1.png",
          name: "Nathaniel S. Mitchell",
          title: "CEO & Founder"
        },
        {
          text: "Exceptional service! Their in-depth knowledge of global markets helped us navigate complex regulations and achieve successful franchise launches.",
          image: "/images/home-seven/client-2.png",
          name: "Laura M. Thomas",
          title: "CTO"
        },
        {
          text: "The team’s insights and strategic guidance were invaluable in establishing our presence in new regions. Their support made the process seamless and efficient.",
          image: "/images/home-seven/client-3.png",
          name: "John D. Carter",
          title: "Tech Lead"
        },
        {
          text: "The team’s insights and strategic guidance were invaluable in establishing our presence in new regions. Their support made the process seamless and efficient.",
          image: "/images/home-seven/client-1.png",
          name: "Emily R. Johnson",
          title: "Product Manager"
        },
        {
          text: "They provided us with a clear roadmap and invaluable support throughout our franchise expansion journey. Their professionalism and expertise are top-notch.",
          image: "/images/home-seven/client-2.png",
          name: "Michael A. Brown",
          title: "Head of Development"
        },
        {
          text: "Working with this consultancy was a game-changer. Their strategic insights and hands-on approach helped us achieve our international franchise goals with ease.",
          image: "/images/home-seven/client-3.png",
          name: "Sarah L. Davis",
          title: "Senior Engineer"
        }
      ];

  return (
    <section className="py-[30px] mb-20 bg-it-gray">
    <div className="theme-container mx-auto w-full">
      <h1 className="px-5 bg-main-gray border border-it-blue/20 text-it-blue font-medium rounded-[30px] w-fit mx-auto">
        Out Testimonials
      </h1>
      <h2 className="max-w-[847px] font-semibold text-24 sm:text-48 text-main-black text-center mx-auto mt-5">
        Customer Say About Our Services
      </h2>

      <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      centerMode={window.innerWidth > 768 ? true : false}
      infinite={true}
      autoPlay={window.innerWidth > 768 ? true : false}
      autoPlaySpeed={2000}
      transitionDuration={500}
      sliderClass='gap-8'
    >
      {reviews?.map((review, index) => (
        <div className="flex flex-col items-center relative pt-[52px] pb-10 px-11 bg-white rounded-2xl h-[450px]">
                <div className="w-[240px] aspect-square rounded-full card-shape-bg absolute" />
                <svg className="relative -top-3" width={60} height={46} viewBox="0 0 60 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M55.9702 4.99404C53.2589 1.94822 49.9682 0.403809 46.1898 0.403809C42.7939 0.403809 39.9151 1.61307 37.6326 3.99783C35.3647 6.36736 34.2147 9.31052 34.2147 12.7458C34.2147 15.9921 35.3763 18.8849 37.6672 21.3439C39.688 23.5133 42.2336 24.8932 45.2472 25.4556C44.7202 29.4511 41.1881 33.0676 34.7278 36.2188L33.5645 36.7863L38.3341 45.5918L39.4108 45.046C53.0727 38.1209 59.9997 28.334 59.9997 15.957C59.9997 11.687 58.6441 7.99861 55.9702 4.99404ZM39.3601 42.2764L36.9704 37.8652C44.1567 34.0997 47.7976 29.5731 47.7976 24.3976V23.2895L46.6966 23.1648C43.7312 22.8292 41.3715 21.6804 39.4828 19.6527C37.6077 17.6397 36.6961 15.3806 36.6961 12.7458C36.6961 9.93232 37.5889 7.63217 39.4252 5.71334C41.2467 3.8101 43.4595 2.8849 46.1899 2.8849C49.2725 2.8849 51.8654 4.11443 54.1167 6.64357C56.4058 9.2156 57.5186 12.262 57.5186 15.9569C57.5186 21.6296 55.9213 26.7509 52.7711 31.1786C49.7653 35.4033 45.257 39.133 39.3601 42.2764Z" fill="#5F57FF" />
                  <path d="M22.3404 4.98842C19.599 1.94635 16.2947 0.403809 12.519 0.403809C9.11988 0.403809 6.25406 1.61529 4.0016 4.00451C1.76848 6.37311 0.636094 9.31405 0.636094 12.7458C0.636094 15.992 1.79766 18.8848 4.08832 21.3439C6.10488 23.5086 8.61996 24.8872 11.5775 25.4522C11.0569 29.4507 7.55414 33.069 1.14562 36.2208L0 36.784L4.65094 45.5958L5.73832 45.0471C19.4621 38.1224 26.4207 28.335 26.4207 15.9569C26.4206 11.6836 25.0477 7.99323 22.3404 4.98842ZM5.70223 42.2722L3.3777 37.8678C10.5118 34.1009 14.1267 29.5732 14.1267 24.3975V23.2918L13.0282 23.165C10.1236 22.8299 7.79297 21.681 5.90367 19.6526C4.02855 17.6398 3.11719 15.3805 3.11719 12.7458C3.11719 9.92869 3.99703 7.62608 5.80676 5.70666C7.5968 3.80799 9.79254 2.8849 12.519 2.8849C15.6047 2.8849 18.2146 4.11619 20.497 6.64932C22.8135 9.21994 23.9395 12.2646 23.9395 15.9569C23.9395 21.6287 22.3352 26.7493 19.1708 31.1766C16.152 35.4 11.6243 39.1291 5.70223 42.2722Z" fill="#5F57FF" />
                </svg>
                <h1 className="font-medium md:text-xl text-sm text-center text-main-black mt-5 mb-8">
                  {review.text}
                </h1>
                <img src={review.image} alt className="mx-auto" />
                <h1 className="font-semibold text-18 text-main-black text-center mt-3">
                {review.name}
                </h1>
                <p className="text-paragraph text-center font-medium text-sm">
                {review.title}
                </p>
              </div>
      ))}
    </Carousel>
     
    </div>
  </section>
  )
}

export default Testimonials
