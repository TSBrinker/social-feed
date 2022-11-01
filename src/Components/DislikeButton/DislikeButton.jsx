import React from "react";

import "./DislikeButton.css";

const DislikeButton = (props) => {
  function handleClick() {
    if (props.buttonClass === "inactive") {
      props.setThisButtonClass("active");
      props.setOtherButtonClass("inactive");
    } else {
      props.setThisButtonClass("inactive");
    }
  }

  return (
    <div>
      <button className={props.buttonClass} onClick={handleClick}>
        Dislike
      </button>
    </div>
  );
};

export default DislikeButton;
