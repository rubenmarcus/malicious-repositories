import React, { useState } from "react";
export const MenuItem = ({ delay, onClick, children }) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover((prevHover) => !prevHover);
  };

  const styles = {
    container: {
      opacity: 0,
      animation: "1s appear forwards",
      animationDelay: delay,
    },
    menuItem: {
      fontFamily: `'Open Sans', sans-serif`,
      fontSize: "1.2rem",
      padding: "1rem 0",
      margin: "0 5%",
      cursor: "pointer",
      color: hover ? "#7A36DA" : "#fafafa",
      transition: "color 0.2s ease-in-out",
      animation: "0.5s slideIn forwards",
      animationDelay: delay,
    },
    line: {
      width: "90%",
      height: "1px",
      background: "gray",
      margin: "0 auto",
      animation: "0.5s shrink forwards",
      animationDelay: delay,
    },
  };

  return (
    <div style={styles.container}>
      <div
        style={styles.menuItem}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={onClick}
      >
        {children}
      </div>
      <div style={styles.line} />
    </div>
  );
};
