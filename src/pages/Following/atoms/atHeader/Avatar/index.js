import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Avatar() {
  return (
    <div className="Avatar_wrapper">
      <Link to="/canhan">
        <img
          src="https://1.bp.blogspot.com/-cW8PDL7l40U/Xxbk_KL9_7I/AAAAAAAAtig/-1pYlRQaOZEX7dAi8d3w56856-E40J7NQCLcBGAsYHQ/s1600/Avatar-con-trai%2B%252819%2529.jpg"
          alt=""
          className="avatar-img"
        />
      </Link>
    </div>
  );
}

export default Avatar;
