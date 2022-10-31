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
      {/* {posts.map((post) => {
        return (
          <div>
            <h5>{post.username}</h5>
            <p>{post.postBody}</p>
          </div>
        );
      })} */}
      <PostList postList={posts} />
    </div>
  );
}

export default App;
