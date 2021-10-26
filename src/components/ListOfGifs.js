import React, { useState, useEffect } from "react";
import Gif from "./Gif/Gif";
import getGifs from "../services/getGifs";

/* Este es nuestro keyword para cambiar el estado como dependencia nuestro
  efecto recibe el keyword para nuestro efecto se vuelva a ejecutar
*/
export default function ListOfGifs({ params }) {
  const [gifs, setGifs] = useState([]);
  const { keyword } = params;

  useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]);

  return gifs.map((singleGif) => (
    <Gif
      id={singleGif.id}
      key={singleGif.id}
      url={singleGif.url}
      title={singleGif.title}
    />
  ));
}
