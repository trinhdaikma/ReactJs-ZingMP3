import Content from "./organisms/Content";
import Footer from "../Following/organisms/Footer";
import Header from "../Following/organisms/Header";
import NavBarLeft from "../Following/organisms/NavBarLeft";
import NavBarRight from "../Following/organisms/NavBarRight";
import "./style.scss";

function Radio() {
  return (
    <div className="Radio_wrapper">
      <Header />
      <NavBarLeft />
      <Content />
      <NavBarRight />
      <Footer />
    </div>
  );
}

export default Radio;
