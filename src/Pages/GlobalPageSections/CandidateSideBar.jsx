import React from "react";

const CandidateSideBar = () => {
  return (
    <div
      id="right-side-container"
      className="h-full  bg-custom-dark-blue w-full"
    >
      <div className="side-bar-main-div p-10 flex flex-col gap-4 text-center">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateSideBar;
