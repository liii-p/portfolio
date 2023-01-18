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
      <img src={logo} alt="Logo" id={styles["logo"]} className={styles.Navbar__navIcons}/>
      <nav
        className={showMenu ? styles.menuVisible : styles.menuHidden}
        onClick={openMenu}
      >
        <a href="#intro">About</a>
        <a href="#tech">Tech</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
        <FaBars onClick={openMenu} className={styles.Navbar__navIcons} />
      {/* <button>
      <FaTimes onClick={closeMenu} id="closeIcon"/>
      </button> */}
    </header>
  );
};

export default Navbar;
