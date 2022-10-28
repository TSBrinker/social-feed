import React, { useState } from "react";
import Post from "./Components/Post/Post";

const PostList = (props) => {
  let postList = props.postList.map((post) => (
    <div>
      <Post />
    </div>
  ));

  return <div>{postList}</div>;
};

export default PostList;
