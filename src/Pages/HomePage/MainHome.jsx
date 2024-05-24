import React from 'react'
import HomeBanner from './BannerComponents/HomeBanner';
import FranchiseSlider from './FranchiseSlider';
import About from './About';
import About2 from './About2';
import ServicesGrid from './ServicesGrid';
import Services from './Services';
import Testimonials from './Testimonials';
import PreFooter from 'src/Globals/PreFooter';

const MainHome = () => {

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main className="w-full">

          <HomeBanner />
          
          <About />
          {/* <ServicesGrid /> */}

          <About2 />
          
          <Services/>
          {/* <FranchiseSlider/> */}

          <Testimonials />

          <PreFooter/>
        </main>
      </div>
    </div>

  )
}

export default MainHome
