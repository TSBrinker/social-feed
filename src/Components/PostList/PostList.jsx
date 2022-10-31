import React, { useState } from "react";
import Post from "../Post/Post.jsx";

const PostList = (props) => {
  return (
    <div>
      <Post posts={props.postList} />
    </div>
  );
};

export default PostList;
