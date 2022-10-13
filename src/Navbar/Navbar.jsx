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
      <GiHamburgerMenu onClick={openMenu} className={styles.Navbar__icon} />
      <nav
        className={showMenu ? styles.menuVisible : styles.menuHidden}
        onClick={openMenu}
      >
        <a href="#intro">Home</a>
        <a href="#tech">Tech</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        {/* <HashLink
          to="/#intro"
          scroll={(el) => el.scrollIntoView({ behavior: "auto", block: "end" })}
        >
          About
        </HashLink>
        <HashLink
          to="/#tech"
          scroll={(el) => el.scrollIntoView({ behavior: "auto", block: "end" })}
        >
          Tech Stack
        </HashLink>
        <HashLink
          to="/#projects"
          scroll={(el) => el.scrollIntoView({ behavior: "auto", block: "end" })}
        >
          Projects
        </HashLink>
        <HashLink
          to="/#contact"
          scroll={(el) => el.scrollIntoView({ behavior: "auto", block: "end" })}
        >
          Contact
        </HashLink> */}
      </nav>
    </div>
  );
};

export default Navbar;
