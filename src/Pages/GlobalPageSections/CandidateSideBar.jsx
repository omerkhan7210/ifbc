import React from "react";

const CandidateSideBar = () => {
  return (
    <div className="side-bar-main-div">
      <h2 className="side-bar-first-heading">Recent Activity</h2>

      <div className="side-bar-first-box">
        <div className="columns">
          <div className="side-bar-fc">
            <h2 className="candidate-text">Smash My Trash</h2>
            <h4 className="candidate-text">Nick Hart</h4>
            <h4 className="candidate-text">Fresno CA 93711</h4>
            <p className="candidate-text">05/30/2024 10:01 am</p>
          </div>
          <div className="side-bar-sc">
            <button className="side-bar-btn">Pending</button>
            <h4 className="candidate-text">David Curnich</h4>
            <h4 className="candidate-text">317-601-7247</h4>
            <div className="Message">
              <h4 className="candidate-text">MESSAGE</h4>
              <h4 className="candidate-text h">|</h4>
              <h4 className="candidate-text">SEND RE-CHECK</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateSideBar;
