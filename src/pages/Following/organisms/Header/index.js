import React from "react";
import HeaderLeft from "../../atoms/atHeader/HeaderLeft";
import HeaderForm from "../../atoms/atHeader/HeaderForm";
import HeaderRight from "../../molecules/mcHeader/HeaderRight";

import "./style.scss";

function Header() {
  return (
    <div className="Header_wrapper">
      <HeaderLeft />
      <HeaderForm />
      <HeaderRight />
    </div>
  );
}

export default Header;
