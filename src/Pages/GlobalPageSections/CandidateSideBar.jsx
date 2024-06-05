import React from "react";

const CandidateSideBar = () => {
  return (
    // <div
    //   id="candidate-floating-bar"
    //   className="fixed top-0 right-0 h-screen md:max-w-xl transition-[width] z-50 w-[80%] md:w-2/3 drop-shadow-md bg-custom-heading-color"
    // >
    //   <button className="absolute left-[-8.5rem] top-1/2 -rotate-90 bg-dark-green px-4 flex items-center justify-center rounded-tl rounded-tr truncate grow-0 h-14 w-56 text-white">
    //     <div className="text-white text-base font-bold flex items-center">
    //       No Candidate Selected{"{"}" "{"}"}
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="100%"
    //         height="100%"
    //         viewBox="-0.5 0 25 25"
    //         className="w-4 h-4 stroke-white ml-2"
    //         fill="none"
    //       >
    //         <path
    //           d="M2.5 8.1728L11.4706 16.6434C11.75 16.9081 12.1912 16.9081 12.4853 16.6434L21.5 8.15808"
    //           stroke="currentColor"
    //           strokeMiterlimit={10}
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //         />
    //       </svg>
    //     </div>
    //   </button>

    //   <div className="side-bar-main-div p-10 flex flex-col gap-4 text-center sticky top-0 start-0 z-50 ">
    //     <h2 className="side-bar-first-heading text-2xl">Recent Activity</h2>
    //     <div id="activity-grid-container" className="grid grid-cols-3 gap-3">
    //       <div class="w-full bg-white rounded-b-lg border-t-8 border-custom-heading-color px-4 py-5 flex flex-col justify-around shadow-md">
    //         <p class="text-lg font-bold font-sans text-custom-heading-color">
    //           Smash My Trash
    //         </p>
    //         <div className="flex justify-start">
    //           <div class="py-3">
    //             <p class="text-md font-bold font-sans text-custom-dark-blue underline">
    //               Candidate Information
    //             </p>
    //             <ul>
    //               <li class="text-sm text-custom-dark-blue">Nick Hart</li>
    //               <li class="text-sm text-custom-dark-blue">Fresno CA 93711</li>
    //               <li class="text-sm text-custom-dark-blue">
    //                 05/30/2024 10:01 am
    //               </li>
    //             </ul>
    //           </div>
    //           <div class="py-3 ml-8">
    //             <p class="text-md font-bold font-sans text-custom-dark-blue underline">
    //               Company Information
    //             </p>
    //             <ul>
    //               <li class="text-sm text-custom-dark-blue">David Curnich</li>
    //               <li class="text-sm text-custom-dark-blue">317-601-7247</li>
    //             </ul>
    //           </div>
    //         </div>

    //         <div class="flex justify-between">
    //           <button
    //             class="border-2 border-custom-heading-color text-sm bg-custom-heading-color px-1 text-white rounded-lg hover:bg-white hover:text-custom-heading-color transition-all duration-500 py-2 mt-3 font-semibold;
    // }
    // "
    //           >
    //             PENDING
    //           </button>
    //           <div class="text-sm flex gap-2">
    //             <button class="border-2 border-custom-heading-color text-sm bg-custom-heading-color px-1 text-white rounded-lg hover:bg-white hover:text-custom-heading-color transition-all duration-500 py-2 mt-3 font-semibold;">
    //               MESSAGE
    //             </button>
    //             <button class="border-2 border-custom-heading-color text-sm bg-custom-heading-color px-1 text-white rounded-lg hover:bg-white hover:text-custom-heading-color transition-all duration-500 py-2 mt-3 font-semibold;">
    //               SEND RE-CHECK
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="w-full bg-white rounded-b-lg border-t-8 border-custom-heading-color px-4 py-5 flex flex-col justify-around shadow-md">
    //         <p class="text-lg font-bold font-sans text-custom-heading-color">
    //           Smash My Trash
    //         </p>
    //         <div className="flex justify-start">
    //           <div class="py-3">
    //             <p class="text-md font-bold font-sans text-custom-dark-blue underline">
    //               Candidate Information
    //             </p>
    //             <ul>
    //               <li class="text-sm text-custom-dark-blue">Nick Hart</li>
    //               <li class="text-sm text-custom-dark-blue">Fresno CA 93711</li>
    //               <li class="text-sm text-custom-dark-blue">
    //                 05/30/2024 10:01 am
    //               </li>
    //             </ul>
    //           </div>
    //           <div class="py-3 ml-8">
    //             <p class="text-md font-bold font-sans text-custom-dark-blue underline">
    //               Company Information
    //             </p>
    //             <ul>
    //               <li class="text-sm text-custom-dark-blue">David Curnich</li>
    //               <li class="text-sm text-custom-dark-blue">317-601-7247</li>
    //             </ul>
    //           </div>
    //         </div>

    //         <div class="flex justify-between">
    //           <button
    //             class="border-2 border-custom-heading-color text-sm bg-custom-heading-color px-1 text-white rounded-lg hover:bg-white hover:text-custom-heading-color transition-all duration-500 py-2 mt-3 font-semibold;
    // }
    // "
    //           >
    //             PENDING
    //           </button>
    //           <div class="text-sm flex gap-2">
    //             <button class="border-2 border-custom-heading-color text-sm bg-custom-heading-color px-1 text-white rounded-lg hover:bg-white hover:text-custom-heading-color transition-all duration-500 py-2 mt-3 font-semibold;">
    //               MESSAGE
    //             </button>
    //             <button class="border-2 border-custom-heading-color text-sm bg-custom-heading-color px-1 text-white rounded-lg hover:bg-white hover:text-custom-heading-color transition-all duration-500 py-2 mt-3 font-semibold;">
    //               SEND RE-CHECK
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="fixed top-0 right-0 h-screen md:max-w-xl transition-[width] z-50 w-[80%] md:w-2/3 drop-shadow-md">
      <button className="absolute left-[-8.5rem] top-1/2 -rotate-90 bg-dark-green px-4 flex items-center justify-center rounded-tl rounded-tr truncate grow-0 h-14 w-56 text-white">
        <div className="text-white text-base font-bold flex items-center">
          No Candidate Selected{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="-0.5 0 25 25"
            className="w-4 h-4 stroke-white ml-2"
            fill="none"
          >
            <path
              d="M2.5 8.1728L11.4706 16.6434C11.75 16.9081 12.1912 16.9081 12.4853 16.6434L21.5 8.15808"
              stroke="currentColor"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      <div className="bg-dark-green rounded-tl rounded-bl h-full w-full overflow-y-auto">
        {/**/}
        <div className="p-8">
          <div className="client-list">
            <div dir="auto" className="v-select vs--single vs--searchable">
              <div
                id="vs2__combobox"
                className="vs__dropdown-toggle"
                role="combobox"
                aria-expanded="false"
                aria-owns="vs2__listbox"
                aria-label="Search for option"
              >
                <div className="vs__selected-options">
                  <input
                    className="vs__search"
                    placeholder="Select a Candidate"
                    aria-autocomplete="list"
                    aria-labelledby="vs2__combobox"
                    aria-controls="vs2__listbox"
                    type="search"
                    autoComplete="off"
                  />
                </div>
                <div className="vs__actions">
                  <button
                    type="button"
                    className="vs__clear"
                    title="Clear Selected"
                    aria-label="Clear Selected"
                    style={{ display: "none" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={10}
                    >
                      <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" />
                    </svg>
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={10}
                    role="presentation"
                    className="vs__open-indicator"
                  >
                    <path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" />
                  </svg>
                  <div className="vs__spinner" style={{ display: "none" }}>
                    Loading...
                  </div>
                </div>
              </div>
              <ul
                id="vs2__listbox"
                role="listbox"
                style={{ display: "none", visibility: "hidden" }}
              />
            </div>
          </div>
          <div className="flex justify-between items-center bg-green py-2 px-4 rounded -mt-px relative z-10">
            <a
              href="/new-candidate/"
              target="_blank"
              className="uppercase text-white hover:text-beige transition text-sm font-bold"
            >
              Add New{" "}
            </a>
            {/**/}
            {/**/}
            {/**/}
          </div>
        </div>
        <div className="px-8">
          <h3 className="text-xl mb-2 text-white">Recent Activity</h3>
          {/**/}
          <div className="mb-4 border border-green bg-white rounded">
            <div className="p-4">
              <div className="grid gap-2 grid-cols-2">
                <div className="font-bold text-base text-dark-green">
                  Smash My Trash
                </div>
                <div>
                  <span className="rounded-xl text-xs text-white px-2 py-1 whitespace-nowrap bg-fog">
                    Pending
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">Nick Hart</div>
                  <div className="text-sm font-bold text-green mb-2">
                    Fresno CA 93711
                  </div>
                  <div className="text-xs text-dark-green">
                    05/30/2024 10:01 am
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">
                    David Curnich
                  </div>
                  <div className="text-sm font-bold text-green mb-2">
                    317-601-7247
                  </div>
                  <div className="flex uppercase text-sm divide-x-2 divide-dark-green gap-x-4">
                    <a
                      target="_blank"
                      href="https://fbamembers.com/message/527965/"
                      className="text-dark-green underline hover:text-green transition"
                    >
                      Message
                    </a>
                    <div className="flex pl-4">
                      <button
                        type="button"
                        className="text-dark-green underline hover:text-green transition uppercase disabled:text-medium-gold disabled:opacity-50"
                      >
                        {" "}
                        Send Re-Check{" "}
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-white p-1 text-xs text-center bg-green">
              Territory Check
            </div>
          </div>
          <div className="mb-4 border border-green bg-white rounded">
            <div className="p-4">
              <div className="grid gap-2 grid-cols-2">
                <div className="font-bold text-base text-dark-green">
                  Smash My Trash
                </div>
                <div>
                  <span className="rounded-xl text-xs text-white px-2 py-1 whitespace-nowrap bg-fog">
                    Pending
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">Nick Hart</div>
                  <div className="text-sm font-bold text-green mb-2">
                    clovis CA{" "}
                  </div>
                  <div className="text-xs text-dark-green">
                    05/30/2024 10:01 am
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">
                    David Curnich
                  </div>
                  <div className="text-sm font-bold text-green mb-2">
                    317-601-7247
                  </div>
                  <div className="flex uppercase text-sm divide-x-2 divide-dark-green gap-x-4">
                    <a
                      target="_blank"
                      href="https://fbamembers.com/message/527966/"
                      className="text-dark-green underline hover:text-green transition"
                    >
                      Message
                    </a>
                    <div className="flex pl-4">
                      <button
                        type="button"
                        className="text-dark-green underline hover:text-green transition uppercase disabled:text-medium-gold disabled:opacity-50"
                      >
                        {" "}
                        Send Re-Check{" "}
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-white p-1 text-xs text-center bg-green">
              Territory Check
            </div>
          </div>
          <div className="mb-4 border border-green bg-white rounded">
            <div className="p-4">
              <div className="grid gap-2 grid-cols-2">
                <div className="font-bold text-base text-dark-green">
                  Soccer Stars
                </div>
                <div>
                  <span className="rounded-xl text-xs text-white px-2 py-1 whitespace-nowrap bg-red-600">
                    Not Available
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">Nick Hart</div>
                  <div className="text-sm font-bold text-green mb-2">
                    Fresno CA 93711
                  </div>
                  <div className="text-xs text-dark-green">
                    05/23/2024 03:46 pm
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">Wes Graves</div>
                  <div className="text-sm font-bold text-green mb-2">
                    925-314-6989
                  </div>
                  <div className="flex uppercase text-sm divide-x-2 divide-dark-green gap-x-4">
                    <a
                      target="_blank"
                      href="https://fbamembers.com/message/524654/"
                      className="text-dark-green underline hover:text-green transition"
                    >
                      Message
                    </a>
                    <div className="flex pl-4">
                      <button
                        type="button"
                        className="text-dark-green underline hover:text-green transition uppercase disabled:text-medium-gold disabled:opacity-50"
                      >
                        {" "}
                        Send Re-Check{" "}
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-white p-1 text-xs text-center bg-green">
              Territory Check
            </div>
          </div>
          <div className="mb-4 border border-green bg-white rounded">
            <div className="p-4">
              <div className="grid gap-2 grid-cols-2">
                <div className="font-bold text-base text-dark-green">
                  Soccer Stars
                </div>
                <div>
                  <span className="rounded-xl text-xs text-white px-2 py-1 whitespace-nowrap bg-red-600">
                    Not Available
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">Nick Hart</div>
                  <div className="text-sm font-bold text-green mb-2">
                    clovis CA{" "}
                  </div>
                  <div className="text-xs text-dark-green">
                    05/23/2024 03:46 pm
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">Wes Graves</div>
                  <div className="text-sm font-bold text-green mb-2">
                    925-314-6989
                  </div>
                  <div className="flex uppercase text-sm divide-x-2 divide-dark-green gap-x-4">
                    <a
                      target="_blank"
                      href="https://fbamembers.com/message/524655/"
                      className="text-dark-green underline hover:text-green transition"
                    >
                      Message
                    </a>
                    <div className="flex pl-4">
                      <button
                        type="button"
                        className="text-dark-green underline hover:text-green transition uppercase disabled:text-medium-gold disabled:opacity-50"
                      >
                        {" "}
                        Send Re-Check{" "}
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-white p-1 text-xs text-center bg-green">
              Territory Check
            </div>
          </div>
          <div className="mb-4 border border-green bg-white rounded">
            <div className="p-4">
              <div className="grid gap-2 grid-cols-2">
                <div className="font-bold text-base text-dark-green">
                  JETSET
                </div>
                <div>
                  <span className="rounded-xl text-xs text-white px-2 py-1 whitespace-nowrap bg-dark-green">
                    Available
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">Nick Hart</div>
                  <div className="text-sm font-bold text-green mb-2">
                    clovis CA{" "}
                  </div>
                  <div className="text-xs text-dark-green">
                    05/14/2024 03:16 pm
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">
                    Erin Hildebrand
                  </div>
                  <div className="text-sm font-bold text-green mb-2">
                    (714) 401-8525
                  </div>
                  <div className="flex uppercase text-sm divide-x-2 divide-dark-green gap-x-4">
                    <a
                      target="_blank"
                      href="https://fbamembers.com/message/518077/"
                      className="text-dark-green underline hover:text-green transition"
                    >
                      Message
                    </a>
                    <div className="flex pl-4">
                      <button
                        type="button"
                        className="text-dark-green underline hover:text-green transition uppercase disabled:text-medium-gold disabled:opacity-50"
                      >
                        {" "}
                        Send Re-Check{" "}
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-white p-1 text-xs text-center bg-green">
              Territory Check
            </div>
          </div>
          <div className="mb-4 border border-green bg-white rounded">
            <div className="p-4">
              <div className="grid gap-2 grid-cols-2">
                <div className="font-bold text-base text-dark-green">
                  JETSET
                </div>
                <div>
                  <span className="rounded-xl text-xs text-white px-2 py-1 whitespace-nowrap bg-dark-green">
                    Available
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">Nick Hart</div>
                  <div className="text-sm font-bold text-green mb-2">
                    Fresno CA 93711
                  </div>
                  <div className="text-xs text-dark-green">
                    05/14/2024 03:16 pm
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">
                    Erin Hildebrand
                  </div>
                  <div className="text-sm font-bold text-green mb-2">
                    (714) 401-8525
                  </div>
                  <div className="flex uppercase text-sm divide-x-2 divide-dark-green gap-x-4">
                    <a
                      target="_blank"
                      href="https://fbamembers.com/message/518076/"
                      className="text-dark-green underline hover:text-green transition"
                    >
                      Message
                    </a>
                    <div className="flex pl-4">
                      <button
                        type="button"
                        className="text-dark-green underline hover:text-green transition uppercase disabled:text-medium-gold disabled:opacity-50"
                      >
                        {" "}
                        Send Re-Check{" "}
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-white p-1 text-xs text-center bg-green">
              Territory Check
            </div>
          </div>
          <div className="mb-4 border border-green bg-white rounded">
            <div className="p-4">
              <div className="grid gap-2 grid-cols-2">
                <div className="font-bold text-base text-dark-green">
                  Ellie Mental Health
                </div>
                <div>
                  <span className="rounded-xl text-xs text-white px-2 py-1 whitespace-nowrap bg-red-600">
                    Not Available
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">Nick Hart</div>
                  <div className="text-sm font-bold text-green mb-2">
                    clovis CA{" "}
                  </div>
                  <div className="text-xs text-dark-green">
                    05/13/2024 04:46 pm
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">
                    Macy Townsend
                  </div>
                  <div className="text-sm font-bold text-green mb-2">
                    980-880-1609
                  </div>
                  <div className="flex uppercase text-sm divide-x-2 divide-dark-green gap-x-4">
                    <a
                      target="_blank"
                      href="https://fbamembers.com/message/516961/"
                      className="text-dark-green underline hover:text-green transition"
                    >
                      Message
                    </a>
                    <div className="flex pl-4">
                      <button
                        type="button"
                        className="text-dark-green underline hover:text-green transition uppercase disabled:text-medium-gold disabled:opacity-50"
                      >
                        {" "}
                        Send Re-Check{" "}
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-white p-1 text-xs text-center bg-green">
              Territory Check
            </div>
          </div>
          <div className="mb-4 border border-green bg-white rounded">
            <div className="p-4">
              <div className="grid gap-2 grid-cols-2">
                <div className="font-bold text-base text-dark-green">
                  Ellie Mental Health
                </div>
                <div>
                  <span className="rounded-xl text-xs text-white px-2 py-1 whitespace-nowrap bg-red-600">
                    Not Available
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">Nick Hart</div>
                  <div className="text-sm font-bold text-green mb-2">
                    Fresno CA 93711
                  </div>
                  <div className="text-xs text-dark-green">
                    05/13/2024 04:46 pm
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">
                    Macy Townsend
                  </div>
                  <div className="text-sm font-bold text-green mb-2">
                    980-880-1609
                  </div>
                  <div className="flex uppercase text-sm divide-x-2 divide-dark-green gap-x-4">
                    <a
                      target="_blank"
                      href="https://fbamembers.com/message/516960/"
                      className="text-dark-green underline hover:text-green transition"
                    >
                      Message
                    </a>
                    <div className="flex pl-4">
                      <button
                        type="button"
                        className="text-dark-green underline hover:text-green transition uppercase disabled:text-medium-gold disabled:opacity-50"
                      >
                        {" "}
                        Send Re-Check{" "}
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-white p-1 text-xs text-center bg-green">
              Territory Check
            </div>
          </div>
          <div className="mb-4 border border-green bg-white rounded">
            <div className="p-4">
              <div className="grid gap-2 grid-cols-2">
                <div className="font-bold text-base text-dark-green">
                  Teriyaki Madness
                </div>
                <div>
                  <span className="rounded-xl text-xs text-white px-2 py-1 whitespace-nowrap bg-fog">
                    Pending
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">
                    Lovedip Singh
                  </div>
                  <div className="text-sm font-bold text-green mb-2">
                    AVON IN 46123
                  </div>
                  <div className="text-xs text-dark-green">
                    04/19/2024 08:31 am
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">
                    Patrick Pounders
                  </div>
                  <div className="text-sm font-bold text-green mb-2">
                    3039970727
                  </div>
                  <div className="flex uppercase text-sm divide-x-2 divide-dark-green gap-x-4">
                    <a
                      target="_blank"
                      href="https://fbamembers.com/message/500792/"
                      className="text-dark-green underline hover:text-green transition"
                    >
                      Message
                    </a>
                    <div className="flex pl-4">
                      <button
                        type="button"
                        className="text-dark-green underline hover:text-green transition uppercase disabled:text-medium-gold disabled:opacity-50"
                        disabled
                      >
                        {" "}
                        Send Re-Check{" "}
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-white p-1 text-xs text-center bg-green">
              Formal Registration
            </div>
          </div>
          <div className="mb-4 border border-green bg-white rounded">
            <div className="p-4">
              <div className="grid gap-2 grid-cols-2">
                <div className="font-bold text-base text-dark-green">
                  Ecomm Prime Global
                </div>
                <div>
                  <span className="rounded-xl text-xs text-white px-2 py-1 whitespace-nowrap bg-dark-green">
                    Accepted
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">
                    Christian Macias
                  </div>
                  <div className="text-sm font-bold text-green mb-2">
                    Fresno CA 93711
                  </div>
                  <div className="text-xs text-dark-green">
                    04/18/2024 09:43 pm
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">
                    Mitchel Goldstein
                  </div>
                  <div className="text-sm font-bold text-green mb-2">
                    786 402-2130
                  </div>
                  <div className="flex uppercase text-sm divide-x-2 divide-dark-green gap-x-4">
                    <a
                      target="_blank"
                      href="https://fbamembers.com/message/500510/"
                      className="text-dark-green underline hover:text-green transition"
                    >
                      Message
                    </a>
                    <div className="flex pl-4">
                      <button
                        type="button"
                        className="text-dark-green underline hover:text-green transition uppercase disabled:text-medium-gold disabled:opacity-50"
                        disabled
                      >
                        {" "}
                        Send Re-Check{" "}
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-white p-1 text-xs text-center bg-green">
              Formal Registration
            </div>
          </div>
          <div className="mb-4 border border-green bg-white rounded">
            <div className="p-4">
              <div className="grid gap-2 grid-cols-2">
                <div className="font-bold text-base text-dark-green">
                  Coffee Beanery
                </div>
                <div>
                  <span className="rounded-xl text-xs text-white px-2 py-1 whitespace-nowrap bg-fog">
                    Pending
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">
                    Mohd Nasseh
                  </div>
                  <div className="text-sm font-bold text-green mb-2">
                    placerville CA 95667
                  </div>
                  <div className="text-xs text-dark-green">
                    04/16/2024 12:36 pm
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">
                    Stacyp Peterson
                  </div>
                  <div className="text-sm font-bold text-green mb-2">
                    810-244-8151
                  </div>
                  <div className="flex uppercase text-sm divide-x-2 divide-dark-green gap-x-4">
                    <a
                      target="_blank"
                      href="https://fbamembers.com/message/498417/"
                      className="text-dark-green underline hover:text-green transition"
                    >
                      Message
                    </a>
                    <div className="flex pl-4">
                      <button
                        type="button"
                        className="text-dark-green underline hover:text-green transition uppercase disabled:text-medium-gold disabled:opacity-50"
                      >
                        {" "}
                        Send Re-Check{" "}
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-white p-1 text-xs text-center bg-green">
              Territory Check
            </div>
          </div>
          <div className="mb-4 border border-green bg-white rounded">
            <div className="p-4">
              <div className="grid gap-2 grid-cols-2">
                <div className="font-bold text-base text-dark-green">
                  Teriyaki Madness
                </div>
                <div>
                  <span className="rounded-xl text-xs text-white px-2 py-1 whitespace-nowrap bg-dark-green">
                    Available
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">
                    Mohd Nasseh
                  </div>
                  <div className="text-sm font-bold text-green mb-2">
                    placerville CA 95667
                  </div>
                  <div className="text-xs text-dark-green">
                    04/10/2024 11:15 pm
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">
                    Patrick Pounders
                  </div>
                  <div className="text-sm font-bold text-green mb-2">
                    3039970727
                  </div>
                  <div className="flex uppercase text-sm divide-x-2 divide-dark-green gap-x-4">
                    <a
                      target="_blank"
                      href="https://fbamembers.com/message/495350/"
                      className="text-dark-green underline hover:text-green transition"
                    >
                      Message
                    </a>
                    <div className="flex pl-4">
                      <button
                        type="button"
                        className="text-dark-green underline hover:text-green transition uppercase disabled:text-medium-gold disabled:opacity-50"
                      >
                        {" "}
                        Send Re-Check{" "}
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-white p-1 text-xs text-center bg-green">
              Territory Check
            </div>
          </div>
          <div className="mb-4 border border-green bg-white rounded">
            <div className="p-4">
              <div className="grid gap-2 grid-cols-2">
                <div className="font-bold text-base text-dark-green">
                  Crust Franchising
                </div>
                <div>
                  <span className="rounded-xl text-xs text-white px-2 py-1 whitespace-nowrap bg-dark-green">
                    Available
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">
                    Gurpreet Singh
                  </div>
                  <div className="text-sm font-bold text-green mb-2">
                    Lathrop CA 95330
                  </div>
                  <div className="text-xs text-dark-green">
                    04/10/2024 06:08 pm
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">Awadalla</div>
                  <div className="text-sm font-bold text-green mb-2">
                    415-720-5680
                  </div>
                  <div className="flex uppercase text-sm divide-x-2 divide-dark-green gap-x-4">
                    <a
                      target="_blank"
                      href="https://fbamembers.com/message/495300/"
                      className="text-dark-green underline hover:text-green transition"
                    >
                      Message
                    </a>
                    <div className="flex pl-4">
                      <button
                        type="button"
                        className="text-dark-green underline hover:text-green transition uppercase disabled:text-medium-gold disabled:opacity-50"
                      >
                        {" "}
                        Send Re-Check{" "}
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-white p-1 text-xs text-center bg-green">
              Territory Check
            </div>
          </div>
          <div className="mb-4 border border-green bg-white rounded">
            <div className="p-4">
              <div className="grid gap-2 grid-cols-2">
                <div className="font-bold text-base text-dark-green">
                  LIME Painting
                </div>
                <div>
                  <span className="rounded-xl text-xs text-white px-2 py-1 whitespace-nowrap bg-dark-green">
                    Available
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">Nick Hart</div>
                  <div className="text-sm font-bold text-green mb-2">
                    Fresno CA 93711
                  </div>
                  <div className="text-xs text-dark-green">
                    04/10/2024 05:57 pm
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">
                    Gavri Grossman
                  </div>
                  <div className="text-sm font-bold text-green mb-2">
                    360-927-5145
                  </div>
                  <div className="flex uppercase text-sm divide-x-2 divide-dark-green gap-x-4">
                    <a
                      target="_blank"
                      href="https://fbamembers.com/message/495298/"
                      className="text-dark-green underline hover:text-green transition"
                    >
                      Message
                    </a>
                    <div className="flex pl-4">
                      <button
                        type="button"
                        className="text-dark-green underline hover:text-green transition uppercase disabled:text-medium-gold disabled:opacity-50"
                      >
                        {" "}
                        Send Re-Check{" "}
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-white p-1 text-xs text-center bg-green">
              Territory Check
            </div>
          </div>
          <div className="mb-4 border border-green bg-white rounded">
            <div className="p-4">
              <div className="grid gap-2 grid-cols-2">
                <div className="font-bold text-base text-dark-green">
                  LIME Painting
                </div>
                <div>
                  <span className="rounded-xl text-xs text-white px-2 py-1 whitespace-nowrap bg-dark-green">
                    Available
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">Nick Hart</div>
                  <div className="text-sm font-bold text-green mb-2">
                    clovis CA{" "}
                  </div>
                  <div className="text-xs text-dark-green">
                    04/10/2024 05:57 pm
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">
                    Gavri Grossman
                  </div>
                  <div className="text-sm font-bold text-green mb-2">
                    360-927-5145
                  </div>
                  <div className="flex uppercase text-sm divide-x-2 divide-dark-green gap-x-4">
                    <a
                      target="_blank"
                      href="https://fbamembers.com/message/495299/"
                      className="text-dark-green underline hover:text-green transition"
                    >
                      Message
                    </a>
                    <div className="flex pl-4">
                      <button
                        type="button"
                        className="text-dark-green underline hover:text-green transition uppercase disabled:text-medium-gold disabled:opacity-50"
                      >
                        {" "}
                        Send Re-Check{" "}
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-white p-1 text-xs text-center bg-green">
              Territory Check
            </div>
          </div>
          <div className="mb-4 border border-green bg-white rounded">
            <div className="p-4">
              <div className="grid gap-2 grid-cols-2">
                <div className="font-bold text-base text-dark-green">
                  PostalAnnex – Annex Brands
                </div>
                <div>
                  <span className="rounded-xl text-xs text-white px-2 py-1 whitespace-nowrap bg-fog">
                    Pending
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">
                    Hardish S Thethy
                  </div>
                  <div className="text-sm font-bold text-green mb-2">
                    Milpitas CA 95035
                  </div>
                  <div className="text-xs text-dark-green">
                    04/10/2024 12:35 pm
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">Ryan Heine</div>
                  <div className="text-sm font-bold text-green mb-2">
                    619-563-4800
                  </div>
                  <div className="flex uppercase text-sm divide-x-2 divide-dark-green gap-x-4">
                    <a
                      target="_blank"
                      href="https://fbamembers.com/message/495160/"
                      className="text-dark-green underline hover:text-green transition"
                    >
                      Message
                    </a>
                    <div className="flex pl-4">
                      <button
                        type="button"
                        className="text-dark-green underline hover:text-green transition uppercase disabled:text-medium-gold disabled:opacity-50"
                        disabled
                      >
                        {" "}
                        Send Re-Check{" "}
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-white p-1 text-xs text-center bg-green">
              Formal Registration
            </div>
          </div>
          <div className="mb-4 border border-green bg-white rounded">
            <div className="p-4">
              <div className="grid gap-2 grid-cols-2">
                <div className="font-bold text-base text-dark-green">
                  PostalAnnex – Annex Brands
                </div>
                <div>
                  <span className="rounded-xl text-xs text-white px-2 py-1 whitespace-nowrap bg-dark-green">
                    Available
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">
                    Hardish S Thethy
                  </div>
                  <div className="text-sm font-bold text-green mb-2">
                    Milpitas CA 95035
                  </div>
                  <div className="text-xs text-dark-green">
                    04/09/2024 06:40 pm
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">Ryan Heine</div>
                  <div className="text-sm font-bold text-green mb-2">
                    619-563-4800
                  </div>
                  <div className="flex uppercase text-sm divide-x-2 divide-dark-green gap-x-4">
                    <a
                      target="_blank"
                      href="https://fbamembers.com/message/494276/"
                      className="text-dark-green underline hover:text-green transition"
                    >
                      Message
                    </a>
                    <div className="flex pl-4">
                      <button
                        type="button"
                        className="text-dark-green underline hover:text-green transition uppercase disabled:text-medium-gold disabled:opacity-50"
                      >
                        {" "}
                        Send Re-Check{" "}
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-white p-1 text-xs text-center bg-green">
              Territory Check
            </div>
          </div>
          <div className="mb-4 border border-green bg-white rounded">
            <div className="p-4">
              <div className="grid gap-2 grid-cols-2">
                <div className="font-bold text-base text-dark-green">
                  Crust Franchising
                </div>
                <div>
                  <span className="rounded-xl text-xs text-white px-2 py-1 whitespace-nowrap bg-dark-green">
                    Available
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">Nick Hart</div>
                  <div className="text-sm font-bold text-green mb-2">
                    Fresno CA 93711
                  </div>
                  <div className="text-xs text-dark-green">
                    04/09/2024 05:11 pm
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">Awadalla</div>
                  <div className="text-sm font-bold text-green mb-2">
                    415-720-5680
                  </div>
                  <div className="flex uppercase text-sm divide-x-2 divide-dark-green gap-x-4">
                    <a
                      target="_blank"
                      href="https://fbamembers.com/message/494271/"
                      className="text-dark-green underline hover:text-green transition"
                    >
                      Message
                    </a>
                    <div className="flex pl-4">
                      <button
                        type="button"
                        className="text-dark-green underline hover:text-green transition uppercase disabled:text-medium-gold disabled:opacity-50"
                      >
                        {" "}
                        Send Re-Check{" "}
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-white p-1 text-xs text-center bg-green">
              Territory Check
            </div>
          </div>
          <div className="mb-4 border border-green bg-white rounded">
            <div className="p-4">
              <div className="grid gap-2 grid-cols-2">
                <div className="font-bold text-base text-dark-green">
                  Crust Franchising
                </div>
                <div>
                  <span className="rounded-xl text-xs text-white px-2 py-1 whitespace-nowrap bg-dark-green">
                    Available
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">Nick Hart</div>
                  <div className="text-sm font-bold text-green mb-2">
                    clovis CA{" "}
                  </div>
                  <div className="text-xs text-dark-green">
                    04/09/2024 05:11 pm
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">Awadalla</div>
                  <div className="text-sm font-bold text-green mb-2">
                    415-720-5680
                  </div>
                  <div className="flex uppercase text-sm divide-x-2 divide-dark-green gap-x-4">
                    <a
                      target="_blank"
                      href="https://fbamembers.com/message/494272/"
                      className="text-dark-green underline hover:text-green transition"
                    >
                      Message
                    </a>
                    <div className="flex pl-4">
                      <button
                        type="button"
                        className="text-dark-green underline hover:text-green transition uppercase disabled:text-medium-gold disabled:opacity-50"
                      >
                        {" "}
                        Send Re-Check{" "}
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-white p-1 text-xs text-center bg-green">
              Territory Check
            </div>
          </div>
          <div className="mb-4 border border-green bg-white rounded">
            <div className="p-4">
              <div className="grid gap-2 grid-cols-2">
                <div className="font-bold text-base text-dark-green">
                  Tint World
                </div>
                <div>
                  <span className="rounded-xl text-xs text-white px-2 py-1 whitespace-nowrap bg-yellow">
                    Alternate Option
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">
                    Aishvinder Brar
                  </div>
                  <div className="text-sm font-bold text-green mb-2">
                    Fresno CA 93711
                  </div>
                  <div className="text-xs text-dark-green">
                    04/03/2024 02:31 pm
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-green">
                    Michael Glick
                  </div>
                  <div className="text-sm font-bold text-green mb-2">
                    561-859-0692
                  </div>
                  <div className="flex uppercase text-sm divide-x-2 divide-dark-green gap-x-4">
                    <a
                      target="_blank"
                      href="https://fbamembers.com/message/490515/"
                      className="text-dark-green underline hover:text-green transition"
                    >
                      Message
                    </a>
                    <div className="flex pl-4">
                      <button
                        type="button"
                        className="text-dark-green underline hover:text-green transition uppercase disabled:text-medium-gold disabled:opacity-50"
                      >
                        {" "}
                        Send Re-Check{" "}
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-white p-1 text-xs text-center bg-green">
              Territory Check
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateSideBar;
