import React, { useState } from "react";
import ReactButton from "../ReactButton/ReactButton.jsx";
import Post from "../Post/Post";

const PostList = (props) => {
  return (
    <div>
      <Post parentPosts={props.parentPosts} />
      <div className="buttonBox">
        {/* <ReactButton message="Like" />
        <ReactButton message="Dislike" /> */}
      </div>
    </div>
  );
};

export default PostList;
