import React, { useState } from "react";
import LikeButton from "../LikeButton/LikeButton";
import DislikeButton from "../DislikeButton/DislikeButton";
import "./Post.css";

const Post = (props) => {
  //   const [buttonAClass, setButtonAClass] = useState("inactive");
  //   const [buttonBClass, setButtonBClass] = useState("inactive");

  return props.parentPosts.map((post) => {
    console.log();
    return (
      <div>
        <h5>{post.username}</h5>
        <p>{post.postBody}</p>
        {/* <div className="buttonBox">
          <ReactButton message="Like" />
          <ReactButton message="Dislike" />
        </div> */}
      </div>
    );
  });
};
{
  /* <div className="buttonBox">
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
      </div> */
}
{
  /* </div>
  );
}; */
}

export default Post;
