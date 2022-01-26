import Content from "./organisms/Content";
import Footer from "../Following/organisms/Footer";
import Header from "../Following/organisms/Header";
import NavBarLeft from "../Following/organisms/NavBarLeft";
import NavBarRight from "../Following/organisms/NavBarRight";
import "./style.scss";

function ZingChart() {
  return (
    <div className="ZingChart_wrapper">
      <Header />
      <NavBarLeft />
      <Content />
      <NavBarRight />
      <Footer />
    </div>
  );
}

export default ZingChart;
