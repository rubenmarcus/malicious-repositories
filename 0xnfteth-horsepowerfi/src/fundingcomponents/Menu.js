import React, { useState, useEffect } from "react";
export const Menu = ({ open, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const styles = {
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      height: isOpen ? "100%" : 0,
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      background: "black",
      opacity: 0.95,
      color: "#fafafa",
      transition: "height 0.3s ease",
      zIndex: 500,
    },
    menuList: {
      paddingTop: "3rem",
    },
  };

  return (
    <div style={styles.container}>
      {isOpen && <div style={styles.menuList}>{children}</div>}
    </div>
  );
};
