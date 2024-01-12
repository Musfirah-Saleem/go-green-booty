import React from "react";
import "./switching.css";

const Switching = () => {
  return (
    <div className="container mb-5 switching__main">
      <div className="got__second__main">
        <h2 className="answers">
          Make the switch and enter a drawing to win <span>$1,000</span>
        </h2>
      </div>
      <div className="switching__part">
        <img src="./assets/switching.svg" alt="switching" />
        <div className="connect">Enter Draw</div>
      </div>
    </div>
  );
};

export default Switching;
