import React, { useState } from "react";
import "./style.scss";

function InputRange() {
  const [value, setValue] = useState(0);

  const rangeChange = event => {
    setValue(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <div className="InputRange_wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="range"
          value={value}
          onChange={rangeChange}
          className="input-range"
        />
      </form>
    </div>
  );
}

export default InputRange;
