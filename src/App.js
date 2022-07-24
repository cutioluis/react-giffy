import { useEffect, useState } from "react";
import "./App.css";

/* Component */
import Navbar from "./components/Navbar/index";
import SectionGif from "./components/SectionGif/index";

const apiKey = "AcRbFv97bWUVZ7sdtnGLNoswPV1ITidz";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    async function getGifs(keyword = "code") {
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=15&offset=0&rating=g&lang=en`
      );
      const data = await res.json();
      setGifs(data.data);
    }
    getGifs();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <SectionGif gifs={gifs} title={"Treanding"} />
    </div>
  );
}

export default App;
