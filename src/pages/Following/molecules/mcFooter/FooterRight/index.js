import "./style.scss";
import { rightIcons } from "../../../../../data/dataFollowing";
import RightVertical from "../../../atoms/atFooter/RightVertical";
import InputRange from "../../../atoms/atFooter/InputRange";
import ToggleIcon from "../../../atoms/atFooter/ToggleIcon";

function FooterRight() {
  const icon = rightIcons.map(icon => (
    <div className={icon.cName} key={icon.id}>
      {icon.icon}
    </div>
  ));
  return (
    <div className="FooterRight_wrapper">
      {icon}
      <InputRange />
      <RightVertical />
      <ToggleIcon />
    </div>
  );
}

export default FooterRight;
