import React, { useState } from "react";
import "./CreatePostForm.css";

const CreatePostForm = (props) => {
  const [username, setUsername] = useState("");
  const [postBody, setPostBody] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
      username: username,
      postBody: postBody,
    };
    console.log(newPost);
    props.addNewPostProperty(newPost);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <b>Name</b>
      </label>
      <input
        required
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <label>
        <b>Comment</b>
      </label>
      <textarea
        required
        value={postBody}
        onChange={(event) => setPostBody(event.target.value)}
      />
      <button className="postButton" type="submit">
        Post
      </button>
    </form>
  );
};

export default CreatePostForm;
