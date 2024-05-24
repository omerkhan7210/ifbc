import React from 'react'
import { Link } from 'react-router-dom'
import SearchingSection from './SearchingSection'

const HomeBanner = () => {
  const isMobile = window.innerWidth < 768 ? true : false
  return (
    <section className="w-full bg-white  sm:pt-[36px] md:mb-20  relative overflow-hidden">
    <div className="w-full relative theme-container mx-auto grid grid-cols-6 xl:grid-cols-12 z-10">
      <div className="md:col-span-6 col-span-12 order-2 md:order-1 flex h-full items-center">
        <div className="h-fit">
          <h1 className={`flex text-lg mb-5 font-semibold text-custom-blue bg-it-blue/10 border border-it-blue/20 items-center gap-2.5 w-fit px-6 py-1 rounded-[40px] ${isMobile ? "hidden" : "block"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgb(33 118 255)" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
            {isMobile ? "IFBC":"Internation Franchise Business Consultant"}
          </h1>
          <h1 className="text-4xl md:text-65 tracking-tight font-semibold text-main-black pr-2 max-w-[658px] ,d:mt-7" data-depth="-0.28">
            The Best Franchise Opportunities Are Available For You!
          </h1>
          <p className="text-18 font-medium font-inter text-paragraph mt-5 md:mt-8 max-w-[571px]">
            Let International Franchise Business Consultant guide you through the franchise discovery process and help you find the perfect fit for your goals and budget.
          </p>
          <div className="flex flex-col mb-20 sm:mb-0 sm:flex-row gap-3 sm:gap-6 mt-5 md:mt-10">
            <Link to="/about">
              <div className="home-two-btn-white group before:bg-it-blue after:bg-it-blue text-white hover:text-paragraph hover:border-paragraph">
                <span className="text-base group-hover:text-paragraph delay-100 transition-all duration-300 font-semibold font-inter py-1 relative z-10">
                  Learn More
                </span>
                <svg className="relative z-10" width={7} height={12} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="group-hover:stroke-paragraph stroke-white transition-all duration-300" d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
           
          </div>
          
        </div>
      </div>
     
     <SearchingSection/>
    </div>
    
  </section>
  )
}

export default HomeBanner
