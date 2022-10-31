import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        value={username}
        onChange={(event) => setName(event.target.value)}
      />
      <label>Comment</label>
      <input
        type="text"
        value={postBody}
        onChange={(event) => setComment(event.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default CreatePostForm;
