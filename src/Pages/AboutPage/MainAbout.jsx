import React from 'react'
import About from '../GlobalPageSections/About'
import ServicesGrid from '../GlobalPageSections/ServicesGrid'
import About2 from '../GlobalPageSections/About2'
import Testimonials from '../GlobalPageSections/Testimonials'
import PreFooter from 'src/Globals/PreFooter'
import PageTransition from 'src/Animations/PageTransition'

const MainAbout = () => {
  return (
    <PageTransition>
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main className="w-full">
          <About />
          <ServicesGrid />
          <About2 />
          <Testimonials />
          <PreFooter />
        </main>
      </div>
    </div>
  </PageTransition>
  )
}

export default MainAbout