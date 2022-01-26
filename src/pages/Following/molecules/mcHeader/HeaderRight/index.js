import Avatar from "../../../atoms/atHeader/Avatar";
import IconSetting from "../../../atoms/atHeader/IconSetting";
import IconSubject from "../../../atoms/atHeader/IconSubject";
import IconUpload from "../../../atoms/atHeader/IconUpload";
import "./style.scss";

function HeaderRight() {
  return (
    <div className="HeaderRight_wraper">
      <IconSubject />
      <IconUpload />
      <IconSetting />
      <Avatar />
    </div>
  );
}

export default HeaderRight;
