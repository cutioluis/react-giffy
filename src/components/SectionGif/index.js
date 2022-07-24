import React, { useState } from "react";
import "./index.css";

import { AiFillHeart, AiOutlineLink } from "react-icons/ai";

const SectionGif = ({ gifs, title }) => {

  return (
    <section className="sectionGifs-container">
      <div className="gifnav-section">
        <span>{title}</span>
        <a href="">All Gifs</a>
      </div>
      <div className="gifs-container">
        {gifs.map((gif) => (
          <div className="container-gifs=md" key={gif.id}>
            <img
              className="gifs-md"
              src={gif.images.downsized_medium.url}
              alt=""
            />
            <div className="gifs-md-icons">
              <AiFillHeart className="icon-heart" />
              <AiOutlineLink className="icon-link" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionGif;
