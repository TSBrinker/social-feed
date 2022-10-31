import "./App.css";
import React, { useState } from "react";
import PostList from "./Components/PostList/PostList";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Tyler",
      postBody: "Boy, howdy, this is a tough one for me.",
    },
    {
      username: "Rob Schneider",
      postBody: "You can do it!",
    },
  ]);

  function addNewPost(post) {
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div className="App">
      <h1>SocialFeed</h1>
      <CreatePostForm addNewPostProperty={addNewPost} />
      <PostList parentEntries={posts} />
    </div>
  );
}

export default App;
