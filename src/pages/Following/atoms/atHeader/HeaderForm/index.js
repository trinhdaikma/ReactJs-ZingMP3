import React, { useState } from "react";
import "./style.scss";

function HeaderForm() {
  const [value, setValue] = useState("");

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className="HeaderForm_wraper">
      <form className="form" onSubmit={handleSubmit}>
        <i className="icon-search fas fa-search"></i>
        <input
          className="form-input"
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Nhập tên bài hát, Nhạc sĩ hoặc MV..."
        />
      </form>
    </div>
  );
}

export default HeaderForm;
