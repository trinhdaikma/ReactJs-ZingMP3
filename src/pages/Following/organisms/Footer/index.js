import FooterCenter from "../../molecules/mcFooter/FooterCenter";
import FooterLeft from "../../molecules/mcFooter/FooterLeft";
import FooterRight from "../../molecules/mcFooter/FooterRight";
import "./style.scss";

function Footer() {
  return (
    <div className="Footer_wrapper">
      <FooterLeft />
      <FooterCenter />
      <FooterRight />
    </div>
  );
}

export default Footer;
