import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../Axios";

const DeletePost = () => {
  let navigator = useNavigate();
  let { id } = useParams();
  let [state, setState] = useState({
    title: "",
    author: "",
    loading: false,
  });
  let { title, author, loading } = state;

  useEffect(() => {
    let fetchData = async () => {
      let deleteData = await Axios.get(`/posts/${id}`);
      setState(deleteData.data);
    };
    fetchData();
  }, [id]);

  let handleDelete = async () => {
    Axios.delete(`/posts/${id}`);
    navigator("/");
  };
  return (
    <div removeBlock>
      <aside>
        <div className="float-left">
          <h2 className="h4">
            {title}
            <span className="text-success">{author}</span>
          </h2>
        </div>
        <div className="float-right">
          <button onClick={handleDelete}>Submit</button>
        </div>
      </aside>
    </div>
  );
};

export default DeletePost;
