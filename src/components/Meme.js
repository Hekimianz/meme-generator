import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  function memeUrl() {
    const memesArray = memesData.data.memes;
    const randNum = Math.floor(Math.random() * memesArray.length);
    console.log(memesData.data.memes[randNum].url);
    return memesData.data.memes[randNum].url;
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
    </div>
  );
}
