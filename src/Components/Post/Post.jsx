import React, { useState } from "react";

const Post = (props) => {
  return props.posts.map((post) => {
    console.log();
    return (
      <div>
        <h5>{post.username}</h5>
        <p>{post.postBody}</p>
      </div>
    );
  });
};

export default Post;
