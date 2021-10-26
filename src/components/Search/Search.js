import React, { useState } from "react";
import { useLocation } from "wouter";

import "./Search.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useLocation();

  function handdleChange(e) {
    setKeyword(e.target.value);
  }

  function handdleSubmit(e) {
    e.preventDefault();
    setLocation(`/gif/${keyword}`);
  }

  return (
    <form onSubmit={handdleSubmit}>
      <input
        onChange={handdleChange}
        className="search-input"
        placeholder="Search all the Gifs and Stikers"
        type="text"
      />
    </form>
  );
};

export default Search;
