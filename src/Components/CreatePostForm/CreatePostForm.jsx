import React, { useState } from "react";
import "./CreatePostForm.css";

const CreatePostForm = (props) => {
  const [username, setName] = useState("");
  const [postBody, setComment] = useState("");

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
    <form onSubmit={handleSubmit} className="comment-container">
      <label>Name</label>
      <input
        type="text"
        value={username}
        onChange={(event) => setName(event.target.value)}
      />
      <label>Comment</label>
      <textarea
        resize="none"
        value={postBody}
        onChange={(event) => setComment(event.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default CreatePostForm;
