import React from "react";
import Footer from "../Following/organisms/Footer";
import Header from "../Following/organisms/Header";
import NavBarLeft from "../Following/organisms/NavBarLeft";
import "./index.scss";
import Content from "./organisms/Content";

function Home() {
  return (
    <div className="Home_wrapper">
      <Header />
      <NavBarLeft />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
