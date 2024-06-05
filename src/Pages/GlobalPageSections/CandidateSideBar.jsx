import React from "react";
import { motion } from "framer-motion";

const CandidateSideBar = () => {
  return (
    <motion.div
      id="right-side-container"
      className="h-full  bg-custom-dark-blue w-full"
    >
      <motion.div className="side-bar-main-div p-10 flex flex-col gap-4 text-center">
        <h2 className="side-bar-first-heading text-2xl">Recent Activity</h2>
        <div id="activity-grid-container" className="grid grid-cols-3 gap-3">
          <div class="w-full bg-white rounded-b-lg border-t-8 border-custom-heading-color px-4 py-5 flex flex-col justify-around shadow-md">
            <p class="text-lg font-bold font-sans text-custom-heading-color">
              Smash My Trash
            </p>
            <div className="flex justify-start">
              <div class="py-3">
                <p class="text-md font-bold font-sans text-custom-dark-blue underline">
                  Candidate Information
                </p>
                <ul>
                  <li class="text-sm text-custom-dark-blue">Nick Hart</li>
                  <li class="text-sm text-custom-dark-blue">Fresno CA 93711</li>
                  <li class="text-sm text-custom-dark-blue">
                    05/30/2024 10:01 am
                  </li>
                </ul>
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

        <div class="w-full bg-white rounded-b-lg border-t-8 border-custom-heading-color px-4 py-5 flex flex-col justify-around shadow-md">
          <p class="text-lg font-bold font-sans text-custom-heading-color">
            Smash My Trash
          </p>
          <div className="flex justify-start">
            <div class="py-3">
              <p class="text-md font-bold font-sans text-custom-dark-blue underline">
                Candidate Information
              </p>
              <ul>
                <li class="text-sm text-custom-dark-blue">Nick Hart</li>
                <li class="text-sm text-custom-dark-blue">Fresno CA 93711</li>
                <li class="text-sm text-custom-dark-blue">
                  05/30/2024 10:01 am
                </li>
              </ul>
            </div>
            <div class="py-3 ml-8">
              <p class="text-md font-bold font-sans text-custom-dark-blue underline">
                Company Information
              </p>
              <ul>
                <li class="text-sm text-custom-dark-blue">David Curnich</li>
                <li class="text-sm text-custom-dark-blue">317-601-7247</li>
              </ul>
            </div>
          </div>

          <div class="flex justify-between">
            <button
              class="border-2 border-custom-heading-color text-sm bg-custom-heading-color px-1 text-white rounded-lg hover:bg-white hover:text-custom-heading-color transition-all duration-500 py-2 mt-3 font-semibold;
}
"
            >
              PENDING
            </button>
            <div class="text-sm flex gap-2">
              <button class="border-2 border-custom-heading-color text-sm bg-custom-heading-color px-1 text-white rounded-lg hover:bg-white hover:text-custom-heading-color transition-all duration-500 py-2 mt-3 font-semibold;">
                MESSAGE
              </button>
              <button class="border-2 border-custom-heading-color text-sm bg-custom-heading-color px-1 text-white rounded-lg hover:bg-white hover:text-custom-heading-color transition-all duration-500 py-2 mt-3 font-semibold;">
                SEND RE-CHECK
              </button>
            </div>
          </div>
          <div className="w-full text-white p-1 text-xs text-center bg-green">
            Territory Check
          </div>
        </div>
      </motion.div>
      <button class="absolute left-[-8.5rem] top-1/2 -rotate-90 bg-dark-green px-4 flex items-center justify-center rounded-tl rounded-tr truncate grow-0 h-14 w-56 text-white">
        <div class="text-white text-base font-bold flex items-center">
          No Candidate Selected{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="-0.5 0 25 25"
            class="w-4 h-4 stroke-white ml-2"
            fill="none"
          >
            <path
              d="M2.5 8.1728L11.4706 16.6434C11.75 16.9081 12.1912 16.9081 12.4853 16.6434L21.5 8.15808"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </button>
    </motion.div>
  );
};

export default CandidateSideBar;
