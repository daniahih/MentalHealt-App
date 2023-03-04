import { useState, useEffect } from "react";

export default function MemesPage() {
  const [meme, setMeme] = useState(null);
  const [clicked, setClicked] = useState(false);

  const fetchRandomMeme = () => {
    return fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.data.memes.length);
        setMeme(data.data.memes[randomIndex]);
      });
  };

  const handleClick = () => {
    setClicked(true);
    fetchRandomMeme();
  };

  return (
    <div>
      <button onClick={handleClick}>another on</button>
      {clicked && meme && <img key={meme.id} src={meme.url} alt={meme.name} />}
    </div>
  );
}
