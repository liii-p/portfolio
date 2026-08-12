"use client";

import React, { useState } from "react";
import styles from "../Navbar/Navbar.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.Navbar}>
      <button><GiHamburgerMenu onClick={openMenu} className={styles.Navbar__icon} /></button>
      <nav
        className={showMenu ? styles.menuVisible : styles.menuHidden}
        onClick={openMenu}
      >
        <a href="#intro">Home</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#tech">Tech</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Navbar;
