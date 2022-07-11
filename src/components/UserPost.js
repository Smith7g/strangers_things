import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deletePost, getUser, modifiedPost } from "../api";

const UserPost = ({ singlePost }) => {
  const navigate = useNavigate();
  const [onePost, setOnePost] = useState([]);
  const [editForm, setEditForm] = useState(false);

  const [title, setTitle] = useState(onePost.title);
  const [description, setDescription] = useState(onePost.description);
  const [price, setPrice] = useState(onePost.price);
  const [location, setLocation] = useState(onePost.location);

  useEffect(() => {
    async function fetchPosts() {
      const token = localStorage.getItem("token");
      const returnPosts = await getUser(token);
      setOnePost(returnPosts.posts);
    }
    fetchPosts();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const postid = singlePost;
    const post = {
      title: title,
      description: description,
      price: price,
      location: location,
    };
    const newPost = await modifiedPost(token, post, postid);
    navigate("/Posts");
    return newPost;
  };

  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const descriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const priceChange = (event) => {
    setPrice(event.target.value);
  };

  const locationChange = (event) => {
    setLocation(event.target.value);
  };

  const deleteUserPost = async () => {
    const token = localStorage.getItem("token");
    const postid = singlePost;
    const erasePost = await deletePost(token, postid);
    navigate("/Posts");
    return erasePost;
  };

  const editFormFunc = (post) => {
    return (
      <form onSubmit={handleSubmit} id="loginForm">
        <div className="boxes">
          <input
            className="input"
            type="text"
            name="title"
            defaultValue={post.title}
            required={true}
            onChange={titleChange}
          />
          <input
            className="input"
            type="text"
            name="description"
            defaultValue={post.description}
            required={true}
            onChange={descriptionChange}
          />
          <input
            className="input"
            type="text"
            name="price"
            defaultValue={post.price}
            required={true}
            onChange={priceChange}
          />
          <input
            className="input"
            type="text"
            name="location"
            defaultValue={post.location}
            onChange={locationChange}
          />
          <label>
            <input type="checkbox" />
            Willing to Deliver?
          </label>
          <button type="submit">CREATE</button>
        </div>
      </form>
    );
  };

  return (
    <div>
      {onePost.map((post, index) => {
        if (singlePost === post._id)
          return (
            <div key={index}>
              <>
                <h2>{post.title}</h2>
                <h4>Description: {post.description}</h4>
                <h4>Price: {post.price}</h4>
                <h4>Seller: {post.author.username}</h4>
                <h4>Location: {post.location}</h4>
                <button
                  className="messageButton"
                  onClick={() => {
                    setEditForm(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="deleteButton"
                  onClick={() => {
                    deleteUserPost();
                  }}
                >
                  Delete
                </button>
              </>
              <div>{editForm ? editFormFunc(post) : null}</div>
            </div>
          );
      })}
    </div>
  );
};

export default UserPost;
