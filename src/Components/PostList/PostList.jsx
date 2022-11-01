import React from "react";

import Post from "../Post/Post";

const PostList = (props) => {
  return props.parentPosts.map((post) => {
    return <Post className="commentFeed" post={post} />;
  });
};

export default PostList;
