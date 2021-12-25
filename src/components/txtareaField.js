import React from "react";

const TxtareaField = ({ type, value, placeholder, onChange, errorMessage }) => {
  return (
    <>
      <textarea
        wrap="hard"
        className="movieText"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <span className="nullText">{errorMessage}</span>
    </>
  );
};

export default TxtareaField;
