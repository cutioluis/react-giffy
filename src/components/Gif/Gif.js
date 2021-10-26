import React from "react";
import "./Gif.css";

export default function Gif({ title, id, url }) {
  return (
    <a className="gif_ancla" href={`#${id}`}>
      <p>{title}</p>
      <img src={url} alt="" />
    </a>
  );
}
