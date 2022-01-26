import "./style.scss";
import { useState } from "react";
import { settigTogle } from "../../../../../data/dataFollowing";

function IconSetting() {
  const [toggle, setToggle] = useState(false);
  const clickSetting = () => {
    setToggle(!toggle);
  };

  const listItem = settigTogle.map(item => (
    <li className="list-item" key={item.id}>
      {item.icon}
      <p className="nav-title">{item.title}</p>
    </li>
  ));

  return (
    <>
      <div className="IconSetting_wrapper">
        <i
          className="icon_setting fas fa-cog"
          onClick={clickSetting}
        ></i>
      </div>
      <div
        className={
          toggle ? "setting-toggle active" : "setting-toggle"
        }
      >
        <ul>{listItem}</ul>
      </div>
    </>
  );
}

export default IconSetting;
