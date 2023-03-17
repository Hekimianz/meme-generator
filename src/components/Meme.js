import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    img: "",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);
  console.log(allMemeImages);

  function memeUrl() {
    const memesArray = allMemeImages.data.memes;
    const randNum = Math.floor(Math.random() * memesArray.length);
    setMeme((prevMeme) => {
      return {
        ...meme,
        img: allMemeImages.data.memes[randNum].url,
      };
    });
  }

  return (
    <div className="meme--cont">
      <div className="meme--inputs-cont">
        <input type="text" className="meme--input" />
        <input type="text" className="meme--input" />
      </div>
      <button onClick={memeUrl} className="meme--btn">
        Get a new meme image 🖼
      </button>
      <img src={meme.img} alt="" className="meme--img" />
    </div>
  );
}
