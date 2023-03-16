import React from "react";
import troll from "../assets/troll.svg";

export default function Header() {
  return (
    <div className="head--cont">
      <img className="head--img" alt="" src={troll} />
      <h1 className="head--title">Meme Generator</h1>
      <h2 className="head--subtitle">React Course - Project 3</h2>
    </div>
  );
}
