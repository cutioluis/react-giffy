import React, { useState } from "react";
import "./index.css";

const Navbar = () => {
  const [keyword, setKeyword] = useState("");

  function handleChange(e) {
    setKeyword(e.target.value);
    console.log(keyword);
  }

  return (
    <section className="container">
      <div className="navbar-container">
        <div>
          <h1>GIFS</h1>
        </div>
        <ul>
          <li>Reactions</li>
          <li>Entertainment</li>
          <li>Sports</li>
          <li>Stikcers</li>
        </ul>
        <div>
          <button>Uploaded</button>
          <button>Create</button>
        </div>
      </div>
      <input
        value={keyword}
        onChange={handleChange}
        className="form-control-nav"
        type="text"
        placeholder="Search all the Gifs and Stickers"
      />
    </section>
  );
};

export default Navbar;
