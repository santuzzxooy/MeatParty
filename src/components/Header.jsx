import React from "react";
import "./styles/Header.css";
import useIsMobile from "../hooks/UseIsMobile";
import useScrollPosition from "../hooks/useScrollPosition";
import micro_boy from "./images/micro_boy.webp";
import MeatBoy from "./images/MeatBoy.webp";
import { IoMdArrowDropleftCircle, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const isMobile = useIsMobile();
  const scrolled = useScrollPosition(50);

  if (isMobile === null) {
    return (
      <div className="fullscreen-loader">
        <div className="loader"></div>
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <nav className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-logo-container">
        <Link to="/MeatParty" className="header-logo">
          {!isMobile && <img src={micro_boy} alt="Logo" className="header-imgLogo" />}
          {isMobile && <img src={MeatBoy} alt="Logo" className="header-imgLogo" />}
          <h1 className="header-title">Meat Boy Party</h1>
        </Link>
      </div>

      <input type="checkbox" id="header-check" className="header-check" />
      <label htmlFor="header-check" className="header-checkbtn">
        <IoMdArrowDropleftCircle />
      </label>

      <ul className="header-menu">
        <label htmlFor="header-check" className="header-closebtn">
          <IoMdClose />
        </label>
        <li><Link className="header-link header-active" to="/MeatParty/tickets">Tickets</Link></li>
        <li><Link className="header-link" to="/MeatParty/login">Ingresar</Link></li>
        <li><Link className="header-link" to="/MeatParty/signup">Registrarme</Link></li>
      </ul>
    </nav>
  );
};

export default Header;