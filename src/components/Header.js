import React from "react";
import { Link } from "react-router-dom";

const Header = ({ loggedIn, setLoggedIn }) => {
  return (
    <div className="header">
      {loggedIn ? (
        <>
          <Link className="titleMain" to="/Home">
            Stranger's Things
          </Link>
          <Link className="navButton" to="/Posts">
            POSTS
          </Link>
          <Link className="navButton" to="/Profile">
            PROFILE
          </Link>
          <Link
            className="navButton"
            to="/"
            onClick={() => {
              localStorage.clear();
              setLoggedIn(false);
            }}
          >
            LOG OUT
          </Link>
        </>
      ) : (
        <>
          <Link className="titleMain" to="/Home">
            Stranger's Things
          </Link>
          <Link className="navButton" to="/Posts">
            POSTS
          </Link>
          <Link className="navButton" to="/">
            LOGIN
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
