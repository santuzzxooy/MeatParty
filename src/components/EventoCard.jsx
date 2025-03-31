import React, { useState, useEffect } from "react";
import "./styles/EventoCard.css";

const defaultEventCards = [
  { title: "DJs", img: "https://picsum.photos/300?random=1" },
  { title: "Ubicación", img: "https://picsum.photos/300?random=2" },
  { title: "Etapas", img: "https://picsum.photos/300?random=3" },
  { title: "Más", img: "https://picsum.photos/300?random=4" },
];

const EventoCard = () => {
  const [eventCards, setEventCards] = useState(defaultEventCards);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventCards = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://api.example.com/events"); // ejemplo, cambiar por api real
        if (!response.ok) throw new Error("Error al obtener los datos");

        const data = await response.json();
        setEventCards(data);
      } catch (err) {
        setError("No se pudo cargar desde la API, usando datos locales.");
      } finally {
        setLoading(false);
      }
    };

    fetchEventCards();
  }, []);

  return (
    <div className="card-evento-container">
      <h1 className="card-evento-title">Sobre el evento</h1>
      {loading && <p>Cargando eventos...</p>}
      {error && <p>{error}</p>}
      <div className="card-evento-grid">
        {eventCards.map((event, index) => (
          <div key={index} className="card-evento-card">
            <img src={event.img} alt={event.title} className="card-evento-image" />
            <span className="card-evento-label">{event.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventoCard;