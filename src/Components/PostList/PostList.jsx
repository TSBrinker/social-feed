import React, { useState } from "react";
import ReactButton from "../ReactButton/ReactButton.jsx";
import Post from "../Post/Post";

const PostList = (props) => {
  return props.parentPosts.map((post) => {
    return <Post post={post} />;
  });
};

export default PostList;
