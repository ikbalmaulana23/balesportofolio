import React, { useState } from "react";
import "./header.css";

const Header = () => {
  /*=============== Tugul Menu ===============*/

  const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="" className="nav__logo">
          <i class="bx bx-grid-vertical logo__img"></i>
          Ikbal Maulana
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav_icon "></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file nav_icon"></i>Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav_icon"></i> Service
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav_icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav_icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
