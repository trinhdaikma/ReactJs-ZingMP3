import React from "react";
import Content from "./organisms/Content";
import Footer from "./organisms/Footer";
import Header from "./organisms/Header";
import NavBarLeft from "./organisms/NavBarLeft";
import NavBarRight from "./organisms/NavBarRight";
import "./style.scss";

function Following() {
  return (
    <div className="Following_wrapper">
      <Header />
      <NavBarLeft />
      <Content />
      <NavBarRight />
      <Footer />
    </div>
  );
}

export default Following;
