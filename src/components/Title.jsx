import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './styles/Title.css';

const Title = ({ title: propTitle }) => {
  const location = useLocation();
  const [title, setTitle] = useState(propTitle || "Cargando...");

  useEffect(() => {
    // Simulación de carga desde el backend
    const fetchTitle = async () => {
      const titleMap = {
        "/MeatParty/tickets": "Tickets",
        "/MeatParty/login": "Ingresar",
        "/MeatParty/signup": "Registro",
      };

      // Simulacion de fetch
      setTimeout(() => {
        setTitle(titleMap[location.pathname] || "Página Desconocida");
      }, 200);
    };

  /*  PARA CUANDO EXISTA BACKEND  */
    //const fetchTitle = async () => {
      //try {
        //const response = await fetch(`https://api.example.com/titles?route=${location.pathname}`);
        //const data = await response.json();
        //setTitle(data.title || "Página Desconocida");
      //} catch (error) {
        //setTitle("Error al cargar el título");
      //}
    //};


    fetchTitle();
  }, [location.pathname, propTitle]);

  return (
    <div className="title-container">
      <h1>{title}</h1>
    </div>
  );
};

export default Title;