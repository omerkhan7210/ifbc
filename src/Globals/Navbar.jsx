import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="hidden lg:block relative">
            <div className="menu-broker-container">
              <ul id="menu-broker" className="menu">
                <li id="menu-item-552013" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-552013">
                  <Link to="/" >Online Magazine</Link>
                </li>
                <li id="menu-item-552041" className="current-menu-item current_page_item menu-item menu-item-type-custom menu-item-object-custom current-menu-item current-menu-ancestor current-menu-parent menu-item-has-children menu-item-552041">
                  <Link to="/listings" aria-current="page">Franchises</Link>
                  <ul className="sub-menu z-[999] relative">
                    <li id="menu-item-552042" className="icon-fls current-menu-item current_page_item menu-item menu-item-type-custom menu-item-object-custom current-menu-item current-menu-ancestor current-menu-parent menu-item-has-children menu-item-552042">
                      <div className="flex">
                        <div className="h-8 w-8 text-[#2176ff] ml-4 mr-2"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fill="currentColor" viewBox="0 0 350 350">
                          <path d="M273 81.2c-1.1 0-2.2-.4-3-1.2-1.7-1.7-1.7-4.4 0-6.1l24.1-24.1c1.7-1.7 4.4-1.7 6.1 0 1.7 1.7 1.7 4.4 0 6.1L276.1 80c-.9.8-2 1.2-3.1 1.2zM163.5 190.8c-1.1 0-2.2-.4-3-1.2-1.7-1.7-1.7-4.4 0-6.1l90.1-90.1c1.7-1.7 4.4-1.7 6.1 0 1.7 1.7 1.7 4.4 0 6.1l-90.1 90.1c-.9.8-2 1.2-3.1 1.2z" className="st0" />
                          <path d="M253.6 100.7c-2.1 0-3.9-1.5-4.2-3.6l-4.9-31c-.2-1.1.1-2.3.8-3.2l38-51.7c2-2.7 5.3-3.8 8.5-3 3.2.9 5.5 3.6 5.8 6.9l3.9 37.3c.2 2.3-1.5 4.5-3.8 4.7-2.4.2-4.5-1.5-4.7-3.8l-3.8-35.8-36 49 4.6 29.3c.4 2.3-1.2 4.5-3.6 4.9h-.6z" className="st0" />
                          <path d="M284.6 105.6c-.2 0-.5 0-.7-.1l-31-4.9c-2.3-.4-3.9-2.6-3.6-4.9.4-2.3 2.6-3.9 4.9-3.6l29.3 4.6 49-36-35.8-3.8c-2.4-.2-4.1-2.3-3.8-4.7.2-2.3 2.4-4.1 4.7-3.8l37.3 3.9c3.3.3 6 2.6 6.9 5.8.9 3.2-.3 6.5-3 8.5l-51.7 38c-.7.7-1.6 1-2.5 1zM163.5 222.3c-19.8 0-35.8-16.1-35.8-35.8s16.1-35.8 35.8-35.8c.9 0 1.9 0 2.8.1 2.4.2 4.1 2.2 3.9 4.6s-2.2 4.1-4.6 3.9c-.7-.1-1.4-.1-2.1-.1-15 0-27.2 12.2-27.2 27.2s12.2 27.2 27.2 27.2 27.2-12.2 27.2-27.2c0-.8 0-1.5-.1-2.3-.2-2.4 1.6-4.4 3.9-4.6 2.4-.2 4.4 1.6 4.6 3.9.1 1 .1 2 .1 3 .1 19.9-16 35.9-35.7 35.9z" className="st0" />
                          <path d="M163.5 262.7c-42 0-76.2-34.2-76.2-76.2s34.2-76.2 76.2-76.2c12.7 0 25.2 3.2 36.3 9.2 2.1 1.1 2.9 3.7 1.7 5.8s-3.7 2.8-5.8 1.7c-9.8-5.3-21-8.2-32.2-8.2-37.3 0-67.6 30.3-67.6 67.6s30.3 67.6 67.6 67.6 67.6-30.3 67.6-67.6c0-11.3-2.8-22.4-8.2-32.2-1.1-2.1-.4-4.7 1.7-5.8s4.7-.4 5.8 1.7c6 11.1 9.2 23.6 9.2 36.3.1 42.1-34.1 76.3-76.1 76.3z" className="st0" />
                          <path d="M163.5 304C98.7 304 46 251.3 46 186.5S98.7 69 163.5 69c24 0 47 7.2 66.7 20.7 1.9 1.3 2.4 4 1.1 6s-4 2.4-6 1.1c-18.2-12.6-39.6-19.2-61.8-19.2-60.1 0-108.9 48.9-108.9 108.9s48.9 108.9 108.9 108.9 108.9-48.9 108.9-108.9c0-22.2-6.6-43.6-19.2-61.8-1.3-1.9-.9-4.6 1.1-6 2-1.3 4.6-.9 6 1.1 13.6 19.7 20.7 42.7 20.7 66.7 0 64.8-52.7 117.5-117.5 117.5z" className="st0" />
                          <path d="M163.5 342.1c-85.8 0-155.6-69.8-155.6-155.6S77.7 31 163.5 31c24.1 0 47.1 5.3 68.5 15.9 1.6.8 3.2 1.6 4.8 2.5 2.1 1.1 2.9 3.7 1.8 5.8-1.1 2.1-3.7 2.9-5.8 1.8-1.5-.8-3-1.6-4.5-2.3-20.2-10-42-15-64.8-15-81 0-147 65.9-147 147s65.9 147 147 147 147-65.9 147-147c0-23.9-5.9-47.7-17-68.7-1.1-2.1-.3-4.7 1.8-5.8s4.7-.3 5.8 1.8c11.8 22.2 18 47.4 18 72.7-.1 85.6-69.8 155.4-155.6 155.4z" className="st0" />
                        </svg></div>
                        <div className="nav-heading flex-1"><a href="/franlink-system/" aria-current="page">Research Franchises</a>
                          <ul className="sub-menu">
                            <li id="menu-item-552043" className="current-menu-item current_page_item menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-552043">
                              <Link to="/listings/" aria-current="page">Franchise Search
                                (FLS)</Link></li>
                            <li id="menu-item-557912" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-557912">
                              <a href="https://fbamembers.com/resales/">Franchise Resales</a>
                            </li>
                            <li id="menu-item-552044" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-552044">
                              <a href="https://fbamembers.com/concept-categories/">Category
                                Definitions</a></li>
                            <li id="menu-item-552045" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-552045">
                              <a href="https://fbamembers.com/send-a-referral-to-fba/">Refer a
                                Franchise</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li id="menu-item-552046" className="icon-franchise-news menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-552046">
                      <div className="flex">
                        <div className="h-8 w-8 text-[#2176ff] ml-4 mr-2"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fill="currentColor" viewBox="0 0 314.25 346.62">
                          <path d="M84 346.62H51.82c-2.34 0-4.24-1.87-4.28-4.21L44.4 166.08a4.281 4.281 0 0 1 4.21-4.36c2.37-.07 4.32 1.84 4.36 4.21l3.07 172.12h23.69v-114.7c0-2.37 1.92-4.28 4.28-4.28s4.28 1.92 4.28 4.28v118.99a4.28 4.28 0 0 1-4.29 4.28zm-.72-250.73c-8.78 0-17.04-3.41-23.28-9.6-6.26-6.22-9.73-14.5-9.76-23.33-.03-8.82 3.38-17.13 9.6-23.39s14.5-9.73 23.33-9.76h.11c18.16 0 32.97 14.75 33.03 32.92.06 18.22-14.71 33.09-32.92 33.15-.03.01-.07.01-.11.01zm.01-57.51h-.09c-6.54.02-12.67 2.59-17.28 7.23-4.61 4.64-7.13 10.79-7.11 17.33.02 6.54 2.59 12.67 7.23 17.28 4.64 4.61 10.76 7.11 17.33 7.11 6.54-.02 12.67-2.59 17.28-7.23s7.13-10.79 7.11-17.33c-.02-6.54-2.59-12.67-7.23-17.28-4.62-4.58-10.74-7.11-17.24-7.11z" className="st0" />
                          <path d="M116.09 346.62H84c-2.37 0-4.28-1.92-4.28-4.28s1.92-4.28 4.28-4.28h27.88l3.29-189.58a4.28 4.28 0 0 1 4.26-4.21l77.16-.45c6.47 0 13.37-4.91 13.37-12.21 0-9.16-10.23-10.72-13.36-10.98-13.35-1.1-32.04-1.26-48.53-1.41-7.03-.06-13.66-.12-19.05-.25-12.99-.31-19.57-.4-38.16-.4-21.67 0-34.15.87-44.49 3.11-11.24 2.43-24.15 8.72-24.17 36.04l2.36 70.79v.14c0 5.65 4.32 11.7 10.76 11.7 6.26 0 9.73-5.53 9.73-9.35 0-2.37 1.92-4.28 4.28-4.28s4.28 1.92 4.28 4.28c0 8.65-7.35 17.92-18.3 17.92-10.63 0-19.29-9.05-19.33-20.19l-2.36-70.8v-.14c0-25.44 10.12-39.99 30.93-44.48 10.99-2.37 23.97-3.3 46.3-3.3 18.68 0 25.3.09 38.37.4 5.32.13 11.93.18 18.92.25 16.64.14 35.5.31 49.16 1.43 12.89 1.06 21.22 8.72 21.22 19.51 0 12.43-11.33 20.78-21.92 20.78l-72.95.43-3.29 189.61c-.02 2.33-1.93 4.2-4.27 4.2z" className="st0" />
                          <path d="M173.49 346.01c-.1 0-.21 0-.31-.01a4.287 4.287 0 0 1-3.97-4.58l13.73-192.39c.17-2.36 2.23-4.13 4.58-3.97 2.36.17 4.14 2.22 3.97 4.58l-13.73 192.39a4.28 4.28 0 0 1-4.27 3.98zm16.19-226.84c-.1 0-.21 0-.31-.01a4.287 4.287 0 0 1-3.97-4.58l7.89-110.6c.17-2.36 2.23-4.13 4.58-3.97 2.36.17 4.14 2.22 3.97 4.58l-7.89 110.6a4.295 4.295 0 0 1-4.27 3.98z" className="st0" />
                          <path d="M217.46 346.62H4.28c-2.37 0-4.28-1.92-4.28-4.28s1.92-4.28 4.28-4.28h213.17c2.37 0 4.28 1.92 4.28 4.28s-1.91 4.28-4.27 4.28zM253 81c-.1 0-.21 0-.31-.01l-60.3-4.3c-1.13-.08-2.19-.61-2.93-1.47s-1.12-1.98-1.04-3.11l3.78-53.01a4.293 4.293 0 0 1 4.58-3.97l60.3 4.3c1.13.08 2.19.61 2.93 1.47s1.12 1.98 1.04 3.11l-3.78 53.01A4.288 4.288 0 0 1 253 81zm-55.72-12.56 51.75 3.69 3.17-44.46-51.75-3.69-3.17 44.46z" className="st0" />
                          <path d="M306.19 107.91c-.1 0-.2 0-.31-.01l-67.07-4.79a4.287 4.287 0 0 1-3.97-4.58 4.293 4.293 0 0 1 4.58-3.97l59.04 4.21-11.97-20.8c-.87-1.51-.74-3.4.34-4.78l14.8-18.89-45.43-3.24a4.287 4.287 0 0 1-3.97-4.58 4.293 4.293 0 0 1 4.58-3.97l53.46 3.81c1.58.11 2.97 1.09 3.61 2.54s.43 3.13-.54 4.38L295.36 76.2l14.54 25.28c.79 1.37.76 3.07-.08 4.41a4.276 4.276 0 0 1-3.63 2.02z" className="st0" />
                        </svg></div>
                        <div className="nav-heading flex-1"><a href="#">GOOD Franchise News</a>
                          <ul className="sub-menu">
                            <li id="menu-item-552048" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-552048">
                              <a href="https://fbamembers.com/category/featured-concepts/">Brand
                                Strategy</a></li>
                            <li id="menu-item-552537" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-552537">
                              <a href="https://fbamembers.com/category/franchise-news/">Franchise
                                News for Candidates</a></li>
                            <li id="menu-item-552052" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-552052">
                              <a href="https://fbamembers.com/category/bonuses-commissions-franchise-news-for-brokers/">Bonuses,
                                Commissions, &amp; Franchise News for Brokers</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li id="menu-item-552053" className="icon-resales menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-552053">
                      <div className="flex">
                        <div className="h-8 w-8 text-[#2176ff] ml-4 mr-2"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fill="currentColor" viewBox="0 0 350 350">
                          <path d="M174.9 247.1h-.1c-8.6 0-16.7-3.4-22.7-9.5s-9.4-14.2-9.4-22.8c.1-17.7 14.5-32.1 32.2-32.1h.1c8.6 0 16.7 3.4 22.7 9.5s9.4 14.2 9.4 22.8-3.4 16.7-9.5 22.7c-6.1 6.1-14.1 9.4-22.7 9.4zm0-55.8c-6.3 0-12.2 2.4-16.6 6.9-4.5 4.4-6.9 10.4-7 16.7 0 13 10.5 23.6 23.5 23.7 6.3 0 12.2-2.4 16.7-6.9 4.5-4.4 6.9-10.4 7-16.7 0-6.3-2.4-12.2-6.9-16.7-4.4-4.5-10.3-7-16.7-7 .1 0 0 0 0 0zm51.6 144.1c-.1 0-.1 0 0 0l-104-.1c-3.2 0-6.2-1.3-8.4-3.5-2.2-2.3-3.5-5.3-3.4-8.5l.2-19.1c-.5-17.6 10.9-35.1 26.5-40.6 10.1-3.6 21.6-5.2 37.3-5.1 15.7.1 27.2 1.7 37.3 5.4 15.6 5.6 26.9 23.1 26.3 40.8l.1 18.8c0 3.2-1.2 6.2-3.5 8.4-2.3 2.3-5.3 3.5-8.4 3.5zm-52.6-68.3c-14.3 0-24.7 1.4-33.7 4.6-12.3 4.3-21.2 18.2-20.8 32.3v.2l-.2 19.2c0 .9.3 1.7.9 2.3s1.5 1 2.3 1l104 .1c.9 0 1.7-.3 2.3-1 .6-.6 1-1.5 1-2.3l-.1-18.9v-.2c.5-14.1-8.4-28.1-20.6-32.5-9.1-3.3-19.7-4.8-34.4-4.8h-.7z" className="st0" />
                          <path d="M145.9 334.8c-2.4 0-4.3-1.9-4.3-4.3l-.1-31.8c0-2.4 1.9-4.3 4.3-4.3s4.3 1.9 4.3 4.3l.1 31.8c0 2.4-1.9 4.3-4.3 4.3zm56.8 0c-2.4 0-4.3-2-4.3-4.3l.3-31.6c0-2.3 1.9-4.2 4.3-4.2s4.3 2 4.2 4.3l-.3 31.6c.1 2.3-1.8 4.2-4.2 4.2zm76.7-255.9h-.1c-17.7-.1-32.1-14.5-32.1-32.3.1-17.7 14.5-32.1 32.2-32.1h.1c8.6 0 16.7 3.4 22.7 9.5s9.4 14.2 9.3 22.8c0 8.6-3.4 16.7-9.5 22.7-6 6.1-14.1 9.4-22.6 9.4zm-.1-55.8c-6.3 0-12.2 2.4-16.6 6.9-4.5 4.4-6.9 10.4-7 16.7 0 13 10.5 23.6 23.5 23.7 6.3 0 12.2-2.4 16.7-6.9 4.5-4.4 7-10.4 7-16.7 0-6.3-2.4-12.2-6.9-16.7-4.3-4.5-10.2-6.9-16.7-7 .1 0 .1 0 0 0zm51.6 144.2-104-.1c-3.2 0-6.2-1.3-8.4-3.5-2.2-2.3-3.5-5.3-3.4-8.5l.2-19.1c-.5-17.6 10.9-35.1 26.5-40.6 10.1-3.6 21.6-5.2 37.3-5.1 15.7.1 27.2 1.7 37.3 5.3 15.6 5.6 26.9 23.2 26.3 40.8l.1 18.8c0 3.2-1.2 6.2-3.5 8.4-2.2 2.3-5.2 3.6-8.4 3.6zm-52.6-68.4c-14.3 0-24.7 1.4-33.7 4.6-12.3 4.3-21.2 18.2-20.8 32.3v.2l-.2 19.2c0 .9.3 1.7.9 2.3s1.5 1 2.3 1l104 .1c.9 0 1.7-.3 2.3-1 .6-.6 1-1.5 1-2.3l-.1-18.9v-.2c.5-14.1-8.4-28.1-20.6-32.5-9.1-3.3-19.7-4.8-34.4-4.8h-.7z" className="st0" />
                          <path d="M250.3 166.6c-2.4 0-4.3-1.9-4.3-4.3l-.1-31.8c0-2.4 1.9-4.3 4.3-4.3s4.3 1.9 4.3 4.3l.1 31.8c0 2.4-1.9 4.3-4.3 4.3zm56.9 0c-2.4 0-4.3-2-4.3-4.3l.3-31.6c0-2.3 1.9-4.2 4.3-4.2s4.3 2 4.2 4.3l-.3 31.6c0 2.3-1.9 4.2-4.2 4.2zM70.6 78.9c-17.7 0-32.1-14.4-32.2-32.1 0-8.6 3.3-16.7 9.3-22.8 6.1-6.1 14.1-9.5 22.7-9.5h.1c8.6 0 16.6 3.3 22.7 9.4 6.1 6.1 9.5 14.1 9.5 22.7.1 17.7-14.3 32.2-32.1 32.3.1 0 .1 0 0 0zm0-55.8c-6.4 0-12.3 2.5-16.8 7S47 40.5 47 46.8c0 13 10.6 23.5 23.6 23.5h.1c6.3 0 12.2-2.5 16.7-7s6.9-10.4 6.9-16.7-2.5-12.2-7-16.7c-4.5-4.3-10.4-6.8-16.7-6.8zM19.1 167.3c-3.2 0-6.2-1.2-8.4-3.5s-3.5-5.2-3.5-8.4l.1-18.8C6.7 119 18 101.4 33.6 95.8c10.1-3.7 21.6-5.3 37.3-5.3 15.7-.1 27.2 1.5 37.3 5.1 15.6 5.5 27 22.9 26.5 40.6l.2 19.1c0 3.2-1.2 6.2-3.4 8.5s-5.2 3.5-8.4 3.5h-104zm52.6-68.4h-.8c-14.6.1-25.2 1.6-34.4 4.8-12.2 4.4-21.1 18.4-20.6 32.5v.2l-.1 18.9c0 .9.3 1.7 1 2.3.6.6 1.5 1 2.3 1l104-.1c.9 0 1.7-.4 2.3-1s1-1.5.9-2.4l-.2-19.2v-.2c.4-14.1-8.6-28-20.8-32.3-8.9-3-19.3-4.5-33.6-4.5z" className="st0" />
                          <path d="M99.7 166.6c-2.4 0-4.3-1.9-4.3-4.3l.1-31.8c0-2.4 1.9-4.3 4.3-4.3s4.3 1.9 4.3 4.3l-.1 31.8c-.1 2.4-2 4.3-4.3 4.3zm-56.9 0c-2.3 0-4.3-1.9-4.3-4.2l-.3-31.6c0-2.4 1.9-4.3 4.2-4.3 2.3 0 4.3 1.9 4.3 4.2l.3 31.6c.1 2.4-1.8 4.3-4.2 4.3zm41.4 95.1c-.4 0-.7 0-1.1-.1L50 253c-2.3-.6-3.7-2.9-3.1-5.2.6-2.3 2.9-3.7 5.2-3.1l28.3 7.4 3-29.1c.2-2.4 2.4-4.1 4.7-3.8 2.3.2 4.1 2.4 3.8 4.7l-3.5 34c-.1 1.2-.8 2.4-1.8 3.1-.7.5-1.5.7-2.4.7z" className="st0" />
                          <path d="M84.2 261.7c-1.3 0-2.7-.6-3.5-1.8L42.5 206c-1.4-1.9-.9-4.6 1-6s4.6-.9 6 1l38.2 54c1.4 1.9.9 4.6-1 6-.7.5-1.6.7-2.5.7zm219.2-20.9c-2.3 0-4.2-1.8-4.3-4.1l-1.4-29.2-28.6 5.7c-2.3.5-4.6-1-5-3.4-.5-2.3 1-4.6 3.4-5l33.5-6.7c1.2-.2 2.5.1 3.5.8 1 .8 1.6 1.9 1.6 3.2l1.6 34.2c.1 2.4-1.7 4.4-4.1 4.5h-.2z" className="st0" />
                          <path d="M260.8 259.9c-.9 0-1.8-.3-2.6-.9-1.9-1.4-2.2-4.1-.8-6l40.9-53.2c1.4-1.9 4.1-2.2 6-.8 1.9 1.4 2.2 4.1.8 6l-40.9 53.2c-.8 1.1-2.1 1.7-3.4 1.7zM175.2 88.2c-1 0-2-.3-2.8-1l-26-22.3c-.9-.8-1.5-2-1.5-3.2 0-1.2.5-2.4 1.5-3.2l25.9-22.3c1.8-1.5 4.5-1.3 6 .5s1.3 4.5-.4 6l-22.1 19.1 22.2 19c1.8 1.5 2 4.2.5 6-.9.9-2.1 1.4-3.3 1.4z" className="st0" />
                          <path d="M149.3 65.9c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3l57.5-.4c2.4 0 4.3 1.9 4.3 4.3s-1.9 4.3-4.3 4.3l-57.5.4z" className="st0" />
                        </svg></div>
                        <div className="nav-heading flex-1"><a href="#">Resales</a>
                          <ul className="sub-menu">
                            <li id="menu-item-552055" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-552055">
                              <a target="_blank" rel="noopener" href="https://www.franchiseba.com/valuation-process/?__hstc=51222582.ff597724bf2eb35303449cdf2e1ca2d4.1714402067764.1715001008310.1715180447104.11&__hssc=51222582.2.1715180447104&__hsfp=4139308393">Business
                                Valuations</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-552360" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-552360">
                  <Link to="/client/">Candidates</Link>
                
                </li>
                <li id="menu-item-552367" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-552367">
                  <Link to="/resources-center/">Tools</Link>
                  
                </li>
                <li id="menu-item-552378" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-552378">
                  <Link to="/events/">Education</Link>
                  
                </li>
                <li id="menu-item-552397" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-552397">
                  <Link to="/members/">Connect</Link>
                
                </li>
                <li id="menu-item-552423" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-552423">
                  <Link to="/new-support-ticket/">Help</Link>
                 
                </li>
              </ul>
            </div>
          </div>
  )
}

export default Navbar
