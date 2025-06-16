import React from "react";

export const SliderControl = ({ type, title, handleClick }) => {
  return (
    <button
      className={`btn btn--${type}`}
      title={title}
      onClick={handleClick}
      style={{ background: "rgba(255, 255, 255, 0.05)" }}
    >
      {type === "previous" ? (
        <svg className="icon" viewBox="0 0 24 24">
          <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
        </svg>
      ) : (
        <svg className="icon" viewBox="0 0 24 24">
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      )}
    </button>
  );
};
