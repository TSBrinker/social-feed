import React from "react";

import "./LikeButton.css";

const LikeButton = (props) => {
  function handleClick() {
    if (props.buttonClass === "inactive") {
      props.setThisButtonClass("active");
      props.setButtonClass("inactive");
    } else {
      props.setOtherButtonClass("inactive");
    }
  }

  return (
    <div>
      <button className={props.buttonClass} onClick={handleClick}>
        Like
      </button>
    </div>
  );
};

export default LikeButton;
