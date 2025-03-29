import React from "react";
import { useLocation } from "react-router-dom";
import './styles/Title.css'

const Title = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/MeatParty/tickets":
        return "Tickets";
      case "/MeatParty/ingresar":
        return "Ingresar";
      default:
        return "Página Desconocida";
    }
  };

  return (
    <div className="title-container">
      <h1>{getTitle()}</h1>
    </div>
  );
};

export default Title;