const apiKey = "AcRbFv97bWUVZ7sdtnGLNoswPV1ITidz&q";

export default function getGifs({keyword = 'Goku'} = []) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=25&offset=0&rating=g&lang=en`;
  return fetch(apiURL)
    .then((response) => response.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => {
        const { images, title, id } = image;
        const { url } = images.downsized_medium;
        return { url, title, id };
      });
      return gifs;
    });
}

