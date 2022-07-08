import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { newUserPost } from "../api";

const Add = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (event) => {
      event.preventDefault();
        const token =  localStorage.getItem('token')
        const post = {
            title : title,
            description: description,
            price: price,
            location: location
        }
        const newPost = await newUserPost(token,post)
        navigate("/Posts")
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

  console.log(titleChange, descriptionChange, priceChange, locationChange);

  return (
    <div>
      <h1 className="title">Add New Post</h1>
      <form
        id="loginForm"
        onSubmit={handleSubmit}
      >
        <div className="boxes">
          <input
            className="input"
            type="text"
            name="title"
            placeholder="Title*"
            required={true}
            onChange={titleChange}
            value={title}
          />
          <input
            className="input"
            type="text"
            name="description"
            placeholder="Description*"
            required={true}
            onChange={descriptionChange}
            value={description}
          />
          <input
            className="input"
            type="text"
            name="price"
            placeholder="Price*"
            required={true}
            onChange={priceChange}
            value={price}
          />
          <input
            className="input"
            type="text"
            name="location"
            placeholder="Location"
            onChange={locationChange}
            value={location}
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
    </div>
  );
};

export default Add;
