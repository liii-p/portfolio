import React, { useState } from "react";
import styles from "../Navbar/Navbar.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Images/logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(showMenu);
  }

  return (
    <header className={styles.Navbar}>
      <img src={logo} alt="Logo" id="logo"/>
      <nav
        className={showMenu ? styles.menuVisible : styles.menuHidden}
        onClick={openMenu}
      >
        <a href="#intro">Home</a>
        <a href="#tech">Tech</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
        <FaBars onClick={openMenu} className={styles.Navbar__icon} />
      {/* <button>
      <FaTimes onClick={closeMenu} id="closeIcon"/>
      </button> */}
    </header>
  );
};

export default Navbar;
