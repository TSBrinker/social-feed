import React, { useState } from "react";
import LikeButton from "../LikeButton/LikeButton";
import DislikeButton from "../DislikeButton/DislikeButton";
import "./Post.css";

const Post = (props) => {
  //   const [buttonAClass, setButtonAClass] = useState("inactive");
  //   const [buttonBClass, setButtonBClass] = useState("inactive");

  return (
    <div>
      <h3>{props.posts.username}</h3>
      <p>{props.posts.postBody}</p>
      {/* <div className="buttonBox">
        <LikeButton
          buttonClass={buttonAClass}
          setThisButtonClass={setButtonAClass}
          setOtherButtonClass={setButtonBClass}
        />
        <DislikeButton
          buttonClass={buttonBClass}
          setThisButtonClass={setButtonBClass}
          setOtherButtonClass={setButtonAClass}
        />
      </div> */}
    </div>
  );
};

export default Post;
