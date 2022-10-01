import React, { useState } from "react";
import styles from "../Navbar/Navbar.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.Navbar}>
      <GiHamburgerMenu onClick={openMenu} className={styles.Navbar__icon} />
      <div
        className={showMenu ? styles.menuVisible : styles.menuHidden}
        onClick={openMenu}
      >
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
      </div>
    </div>
  );
};

export default Navbar;