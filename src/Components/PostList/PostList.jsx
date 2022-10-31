import React, { useState } from "react";
import ReactButton from "../ReactButton/ReactButton.jsx";

const PostList = (props) => {
  return props.parentPosts.map((post) => {
    console.log();
    return (
      <div>
        <h5>{post.username}</h5>
        <p>{post.postBody}</p>
        <div className="buttonBox">
          <ReactButton message="Like" />
          <ReactButton message="Dislike" />
        </div>
      </div>
    );
  });
};

export default PostList;
