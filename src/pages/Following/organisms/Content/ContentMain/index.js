import React from "react";
import GridContent from "../GridContent";
import SingerList from "../SingerList";
import "./style.scss";

function ContentMain() {
  return (
    <>
      <div className="ContentMain_wrapper">
        <SingerList />
        <GridContent />
      </div>
    </>
  );
}

export default ContentMain;
