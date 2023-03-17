/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    img: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((oldMeme) => {
      return {
        ...meme,
        [name]: value,
      };
    });
  }
  console.log(meme);

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

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
        <input
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          type="text"
          className="meme--input"
        />
        <input
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          type="text"
          className="meme--input"
        />
      </div>
      <button onClick={memeUrl} className="meme--btn">
        Get a new meme image 🖼
      </button>
      <div className="meme">
        <img src={meme.img} alt="" className="meme--img" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
