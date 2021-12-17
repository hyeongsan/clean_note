import React from "react";

const InputField = ({ type, value, placeholder, onChange, errorMessage }) => {
  return (
    <>
      <input
        className="movieTitle"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <span className="nullText">{errorMessage}</span>
    </>
  );
};

export default InputField;
