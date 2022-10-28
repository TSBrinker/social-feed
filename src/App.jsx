import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import PostList from "./Components/PostList/PostList";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";

function App() {
  const [posts, setPosts] = useState([
    { username: "danny", postBody: "Hello World!" },
    { username: "tyler", postBody: "Okay" },
  ]);
  return (
    <div className="App">
      <h1>SocialFeed</h1>
      <CreatePostForm />
      <PostList postList={posts} />
    </div>
  );
}

export default App;
