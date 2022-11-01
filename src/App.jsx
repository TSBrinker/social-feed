import "./App.css";
import React, { useState } from "react";
import PostList from "./Components/PostList/PostList";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import NavBar from "./Components/NavBar/NavBar";

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
      <NavBar />
      <CreatePostForm addNewPostProperty={addNewPost} />
      <PostList parentPosts={posts} />
    </div>
  );
}

export default App;
