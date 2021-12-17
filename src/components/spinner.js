import React from "react";

const Spinner = () => {
  return (
    <>
      <button className="btn btn-primary" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Loading...</span>
      </button>
    </>
  );
};

export default Spinner;
