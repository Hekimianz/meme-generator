/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    img: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = React.useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((oldMeme) => {
      return {
        ...meme,
        [name]: value,
      };
    });
  }
  React.useEffect(() => {
    console.log("effect ran");
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function memeUrl() {
    const randNum = Math.floor(Math.random() * allMemes.length);
    setMeme((prevMeme) => {
      return {
        ...meme,
        img: allMemes[randNum].url,
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
