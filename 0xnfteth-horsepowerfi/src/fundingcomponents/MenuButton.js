import React, { useState, useEffect } from "react";
export const MenuButton = ({ open, onClick, color }) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClick = () => {
    setIsOpen((prevOpen) => !prevOpen);
    onClick && onClick();
  };

  const styles = {
    container: {
      position: "absolute",
      right: "30px",
      top: "25px",
      height: "32px",
      width: "32px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      padding: "4px",
    },
    line: {
      height: "2px",
      width: "20px",
      background: color || "black",
      transition: "all 0.2s ease",
    },
    lineTop: {
      transform: isOpen ? "rotate(45deg)" : "none",
      transformOrigin: "top left",
      marginBottom: "5px",
    },
    lineMiddle: {
      opacity: isOpen ? 0 : 1,
      transform: isOpen ? "translateX(-16px)" : "none",
    },
    lineBottom: {
      transform: isOpen ? "translateX(-1px) rotate(-45deg)" : "none",
      transformOrigin: "top left",
      marginTop: "5px",
    },
  };

  return (
    <div>
      <div
        style={styles.container}
        onClick={handleClick}
        className="menuButton"
      >
        <div style={{ ...styles.line, ...styles.lineTop }} />
        <div style={{ ...styles.line, ...styles.lineMiddle }} />
        <div style={{ ...styles.line, ...styles.lineBottom }} />
      </div>
    </div>
  );
};
