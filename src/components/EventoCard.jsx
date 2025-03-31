import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/EventoCard.css";

const defaultEventCards = [
  { title: "DJs", img: "https://i.postimg.cc/yY6cBxdL/dj.jpg", url: "/MeatParty/tickets" },
  { title: "Ubicación", img: "https://i.postimg.cc/x893DCrS/rave.jpg", url: "/MeatParty/tickets" },
  { title: "Etapas", img: "https://i.postimg.cc/prKmJNqc/etapas.jpg", url: "/MeatParty/tickets" },
  { title: "Más", img: "https://i.postimg.cc/k57dY0wR/mas.png", url: "/MeatParty/tickets" },
];

const EventoCard = () => {
  const [eventCards, setEventCards] = useState(defaultEventCards);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

/*    CUANDO SE IMPLEMENTE EL BACKEND    */
  // useEffect(() => {
  //   const fetchEventCards = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch("https://api.example.com/events"); // ejemplo, cambiar por api real
  //       if (!response.ok) throw new Error("Error al obtener los datos");

  //       const data = await response.json();
  //       setEventCards(data);
  //     } catch (err) {
  //       setError("No se pudo cargar desde la API, usando datos locales.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchEventCards();
  // }, []);

  return (
    <div className="card-evento-container">
      <div className="card-evento-title-container">
        <h1 className="card-evento-title">Sobre el evento</h1>
      </div>
      {loading && <p>Cargando eventos...</p>}
      {error && <p>{error}</p>}
      <div className="card-evento-grid">
        {eventCards.map((event, index) => (
          <Link to={event.url}>
            <div key={index} className="card-evento-card">
              <img src={event.img} alt={event.title} className="card-evento-image" />
              <span className="card-evento-label">{event.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventoCard;