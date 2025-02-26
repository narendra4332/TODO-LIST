import React, { useState } from "react";
import "./Addtodos.css";

export const Addtodos = ({ addtodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description can not be blank");
    } else {
      addtodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="main-container">
      <div className="container my3">
        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
          <div class="mb-3">
            <label for="title" class="form-label">
              Todo Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              class="form-control"
              id="title"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="desc" class="form-label">
              Todo Description
            </label>
            <input
              type="text"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              class="form-control"
              id="desc"
            />
          </div>

          <button type="submit" class="btn btn-sm btn-primary">
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};
