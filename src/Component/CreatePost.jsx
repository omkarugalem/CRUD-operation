import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../Axios";

const CreatePost = () => {
  let navigate = useNavigate();
  let [state, setState] = useState({
    title: "",
    author: "",
    loading: false,
  });
  let { title, author, loading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      //   console.log({ title, author });
      let payload = { title, author };
      await Axios.post("/posts", payload);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section id="postBlock" className="col-md-4 mx-auto bg-white p-4 mt-4">
      <article>
        <form onSubmit={handleSubmit}>
          <h2 className="display-6 font-weight-bold text-success text-uppercase border-bottom">
            Create Post
          </h2>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter Title"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Author</label>
            <input
              type="text"
              name="author"
              value={author}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter Author Name"
            />
          </div>
          <div className="mb-3">
            <button className=" btn-success">Submit</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default CreatePost;



