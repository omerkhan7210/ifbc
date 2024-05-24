import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MobileNav = ({setMobileActive}) => {
  const [submenuactive,setsubmenuactive] = useState(false)
  return (
   <nav id="mobile-nav" className="bg-beige fixed top-0 left-0 right-0 z-40 w-screen h-screen overflow-y-auto">
  <div className="text-right pt-4 pr-4">
    <button type="button" className="text-custom-heading-color" onClick={()=>setMobileActive(false)}>
      <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 7L7 17M7 7L17 17" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  </div>
  <div className="menu-franchisor-container">
    <ul id="menu-franchisor" className="menu">
      <li id="menu-item-552288" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-552288">
        <Link href="/" aria-current="page" className>Online Magazine</Link>
      </li>
      <li id="menu-item-552289" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-552289">
        <Link onClick={()=>setsubmenuactive(!submenuactive)}>Franchise Listing</Link>
        <ul className={`sub-menu ${submenuactive ? "open-submenu" : ""}`}>
         
         
              <li id="menu-item-552305" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-552305">
                <a href="/edit-profile/">Edit Listing</a>
                </li>
              <li id="menu-item-552335" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-552335">
                <a href="/listings">View Listing</a>
                </li>
              <li id="menu-item-552336" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-552336">
                <a href="/franchisor-frequently-asked-questions-faq-2/">Frequently Asked Questions (FAQ)</a>
                </li>
            
        </ul>
      </li>
      <li id="menu-item-615762" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-615762">
        <Link to="/resales/">Resales</Link>
      </li>
      <li id="menu-item-552290" className="menu-item menu-item-type-custom menu-item-object-custom   menu-item-552290">
        <Link to="/messages/">Candidates</Link>
      </li>
      <li id="menu-item-552291" className="menu-item menu-item-type-custom menu-item-object-custom  menu-item-552291">
        <Link to="/members/">Connect</Link>
      </li>
      <li id="menu-item-552292" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-552292">
        <Link to="/new-support-ticket">Help</Link>
      </li>
    </ul>
  </div>
</nav>

  )
}

export default MobileNav
   