import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
      </div>
      <div>
        <LoginButton />
      </div>
    </div>
  );
};

export default Header;
