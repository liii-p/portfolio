"use client";

import React, { useEffect, useState } from "react";
import styles from "../Navbar/Navbar.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const links = [
  { href: "#intro", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#tech", label: "Tech" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);
  const closeMenu = () => setShowMenu(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!showMenu) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [showMenu]);

  return (
    <header
      className={`${styles.Navbar} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.Navbar__inner}>
        <a href="#intro" className={styles.Navbar__brand} onClick={closeMenu}>
          Lianna Pyman
        </a>

        <button
          className={styles.Navbar__menuButton}
          onClick={toggleMenu}
          aria-expanded={showMenu}
          aria-controls="primary-navigation"
          aria-label={showMenu ? "Close menu" : "Open menu"}
        >
          {showMenu ? (
            <IoClose className={styles.Navbar__icon} />
          ) : (
            <GiHamburgerMenu className={styles.Navbar__icon} />
          )}
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.Navbar__links} ${
            showMenu ? styles.isOpen : ""
          }`}
        >
          {links.map(({ href, label }) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div
        className={`${styles.Navbar__overlay} ${
          showMenu ? styles.isOpen : ""
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </header>
  );
};

export default Navbar;
