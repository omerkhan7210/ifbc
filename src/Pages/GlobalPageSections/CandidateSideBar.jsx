import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MyTCFRContext } from "src/Context/TCFRDataContext";

const CandidateSideBar = () => {
  const [active, setActive] = useState(false);
  const { all } = useContext(MyTCFRContext);

  useEffect;
  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{
          y: active ? 0 : "100%",

          transformOrigin: "bottom",
          transition: { duration: 1, type: "spring", bounce: 0.1 },
        }}
        id="right-side-container"
        className="bg-custom-heading-color fixed bottom-0  right-0 w-full h-[50%] transition-[width] z-[99999] drop-shadow-md"
      >
        <button
          onClick={() => setActive(!active)}
          className={`absolute -top-16 right-0 bg-custom-heading-color px-4 py-5 flex items-center justify-center rounded-tl w-64 text-white z-[99999]`}
        >
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
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 1, ease: "backInOut" },
          }}
          className="side-bar-main-div p-10 flex flex-col gap-4 text-center h-full overflow-y-scroll"
        >
          <h2 className="side-bar-first-heading text-2xl">Recent Activity</h2>

          <div id="activity-grid-container" className="grid grid-cols-4 gap-3">
            {all && all.length > 0 && all.map((card) => <Card card={card} />)}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

const Card = ({ card }) => {
  return (
    <div className=" bg-white rounded-b-lg border-t-8 border-custom-grey px-4 py-5 flex flex-col justify-around shadow-md">
      <div id="status-container" className="flex justify-between">
        <h1 className="candidate-territory">Territory Check</h1>
        <h1 className="candidate-pending">Status</h1>
      </div>
      <div className="flex justify-center flex-col items-center w-full">
        <img
          src="/public/images/SmashMyTrash.png"
          alt="smash"
          classname="w-10"
        />
        <p className="text-xl font-bold text-custom-heading-color">
          Smash My Trash
        </p>
      </div>
      <div className="flex justify-center">
        <div className="py-3">
          <p className="text-md font-bold  text-custom-dark-blue ">
            Candidate Information
          </p>
          <ul>
            <li className="text-sm text-custom-grey">Nick Hart</li>
            <li className="text-sm text-custom-grey">Fresno CA 93711</li>
            <li className="text-sm text-custom-grey">05/30/2024 10:01 am</li>
          </ul>
        </div>
        <div className="py-3 ml-8">
          <p className="text-md font-bold  text-custom-dark-blue ">
            Company Information
          </p>
          <ul>
            <li className="text-sm text-custom-grey">David Curnich</li>
            <li className="text-sm text-custom-grey">317-601-7247</li>
          </ul>
        </div>
      </div>
      <div className="text-sm flex gap-2 items-center justify-between">
        <button className="candidate-btn w-full">MESSAGE</button>
        <button className="candidate-btn w-full">SEND RE-CHECK</button>
      </div>
    </div>
  );
};

export default CandidateSideBar;
