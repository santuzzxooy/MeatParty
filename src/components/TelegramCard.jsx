import React from "react";
import "./styles/TelegramCard.css";
import { FaTelegram } from "react-icons/fa";

const TelegramCard = () => {
  return (
    <div className="telegram-card">
      <h2 className="telegram-title">¿Por qué usamos Telegram? <FaTelegram /></h2>
      <p className="telegram-text">
        Telegram <FaTelegram /> es la mejor opción para organizar un rave underground gracias a su anonimato, 
        permitiendo chats sin revelar números de teléfono. Sus canales facilitan la difusión de 
        información sin saturar de mensajes. Además, la función de mapas y coordenadas exactas ayuda 
        a guiar a los asistentes al punto de encuentro sin confusión. Su bajo riesgo de censura, 
        junto con el soporte para proxies y VPN, garantiza que la comunicación se mantenga accesible 
        incluso en entornos restringidos.
      </p>
    </div>
  );
};

export default TelegramCard;
