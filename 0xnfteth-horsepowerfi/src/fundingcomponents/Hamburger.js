import React, { useState } from "react";
import { MenuItem } from "./MenuItem";
import { MenuButton } from "./MenuButton";
import { Menu } from "./Menu";
import "./styleHamburger.css"; // Import CSS file with keyframes

export const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const styles = {
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: "600",
      opacity: 0.9,
      display: "flex",
      alignItems: "center",
      background: "black",
      width: "100%",
      color: "white",
      fontFamily: "Lobster",
    },
    logo: {
      margin: "0 auto",
    },
    body: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
      filter: menuOpen ? "blur(2px)" : null,
      transition: "filter 0.5s ease",
    },
  };

  const menu = ["Games", "Token", "Market Place", "Profile"];
  const menuItems = menu.map((val, index) => (
    <MenuItem key={index} delay={`${index * 0.1}s`} onClick={handleLinkClick}>
      {val}
    </MenuItem>
  ));

  return (
    <div>
      <div style={styles.container}>
        <MenuButton open={menuOpen} onClick={handleMenuClick} color="white" />
      </div>
      <Menu open={menuOpen}>{menuItems}</Menu>
    </div>
  );
};

export default Hamburger;
