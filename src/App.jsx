import "./App.css";
import React, { useState } from "react";
import PostList from "./Components/PostList/PostList";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Rob Schneider",
      postBody: "You can do it!",
    },
    {
      username: "Tyler",
      postBody: "Boy howdy, this was a tough one for me.",
    },
    {
      username: "Uncle Iroh",
      postBody:
        "It is okay that you did not finish the styling in time. Failure is only the opportunity to try again.",
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
      <PostList className="commentFeed" parentPosts={posts} />
    </div>
  );
}

export default App;
