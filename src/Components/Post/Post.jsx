import React, { useState } from "react";
import ReactButton from "../ReactButton/ReactButton";
import "./Post.css";

const Post = (props) => {
  const [likeButtonClass, setLikeButtonClass] = useState("inactive");
  const [dislikeButtonClass, setDislikeButtonClass] = useState("inactive");

  return (
    <div className="comment">
      <h4>{props.post.username}:</h4>
      <p>{props.post.postBody}</p>
      <div className="buttonBox">
        <ReactButton
          message="Like"
          buttonClass={likeButtonClass}
          setThisButtonClass={setLikeButtonClass}
          setOtherButtonClass={setDislikeButtonClass}
        />
        <ReactButton
          message="Dislike"
          buttonClass={dislikeButtonClass}
          setThisButtonClass={setDislikeButtonClass}
          setOtherButtonClass={setLikeButtonClass}
        />
      </div>
    </div>
  );
};

export default Post;
