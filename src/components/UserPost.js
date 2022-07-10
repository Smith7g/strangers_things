import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts, getProfile } from "../api";

const UserPost = ({ loggedIn, singlePost }) => {
  const [onePost, setOnePost] = useState([]);
  const [editForm, setEditForm] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      const token = localStorage.getItem("token");
      const returnPosts = await getProfile(token);
      setOnePost(returnPosts.posts);
    }
    fetchPosts();
  }, []);

  const editFormFunc = () => {
    return (
      <form
        id="loginForm"
      >
        <div className="boxes">
          <input
            className="input"
            type="text"
            name="title"
            // defaultValue={title}
            // required={true}
            // onChange={titleChange}
            // value={title}
          />
          <input
            className="input"
            type="text"
            name="description"
            defaultValue="Description*"
            // required={true}
            // onChange={descriptionChange}
            // value={description}
          />
          <input
            className="input"
            type="text"
            name="price"
            defaultValue="Price*"
            // required={true}
            // onChange={priceChange}
            // value={price}
          />
          <input
            className="input"
            type="text"
            name="location"
            defaultValue="Location"
            // onChange={locationChange}
            // value={location}
          />
          <label>
            <input type="checkbox" />
            Willing to Deliver?
          </label>
          <button
            type="submit"
            // onClick={() => {
            //   navigate("/Posts");
            // }}
          >
            CREATE
          </button>
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
                <div>{post.description}</div>
                <div>
                  <b>Price:</b> {post.price}
                </div>
                <h4>Seller: {post.author.username}</h4>
                <div>
                  <b>Location:</b> {post.location}
                </div>
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
                  // onClick={() => {
                  //   catchId(post._id);
                  //   navigate(`/UserPost`);
                  // }}
                >
                  Delete
                </button>
              </>
              <form>
              {editForm ? editFormFunc() : null}
              </form>
            </div>
          );
      })}
    </div>
  );
};

export default UserPost;
