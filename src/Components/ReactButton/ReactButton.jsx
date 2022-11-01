import React from "react";
import "./ReactButton.css";

const ReactButton = (props) => {
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
        {props.message}
      </button>
    </div>
  );
};

export default ReactButton;
