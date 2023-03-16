import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [imgUrl, setImgUrl] = React.useState("");
  function memeUrl() {
    const memesArray = memesData.data.memes;
    const randNum = Math.floor(Math.random() * memesArray.length);
    setImgUrl(memesData.data.memes[randNum].url);
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
      <img src={imgUrl} alt="" className="meme--img" />
    </div>
  );
}
