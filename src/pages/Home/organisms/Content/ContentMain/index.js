import React from "react";
import ListBoxSong from "../ListBoxSong";
import Slider from "../Slider";
import "./style.scss";

function ContentMain() {
  return (
    <div className="ContentMain_wrapper">
      <Slider />
      <ListBoxSong />
    </div>
  );
}

export default ContentMain;
