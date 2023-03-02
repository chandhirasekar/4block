import React from "react";
import { useState } from "react";

const Input = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, error, ...input } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="form_input">
      <label>{label}</label>
      <br/>
      <input
        {...input}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => input.name === "confirmpassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{error}</span>
    </div>
  );
};

export default Input;
