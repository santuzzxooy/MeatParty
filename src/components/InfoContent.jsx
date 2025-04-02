import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles/InfoContent.css";
import Title from "./Title";
import useScrollPosition from "../hooks/useScrollPosition";
import { BiSolidLeftArrow } from "react-icons/bi";
import UseIsMobile from "../hooks/UseIsMobile";

const InfoContent = () => {
  const scrolled = useScrollPosition(50);
  const isMobile = UseIsMobile();
  const location = useLocation();
  const [showButtons, setShowButtons] = useState(false);

  // Función para hacer scroll hacia la sección
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 30;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  // Detectar si hay un hash en la URL y hacer scroll automáticamente
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      scrollToSection(sectionId);
    }
  }, [location]);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  // Estado para la cuenta regresiva
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false
  });

  // Fecha objetivo: 3 días antes del evento (12 de Noviembre 2023 a las 00:00 GMT-5)
  // Nota: Usamos el formato ISO y ajustamos la zona horaria
  const targetDate = new Date('2025-11-12T00:00:00-05:00');

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setCountdown(prev => ({ ...prev, expired: true }));
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds, expired: false });
    };

    // Ejecutamos inmediatamente para evitar retraso inicial
    calculateCountdown();

    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      {!isMobile && (
        <>
          <div className={`info-button-toggle ${showButtons ? 'active' : ''}`} onClick={toggleButtons}>
            <span><BiSolidLeftArrow /></span>
          </div>
          <div className={`info-button-container ${scrolled ? "info-button-scrolled" : ""} ${showButtons ? 'visible' : ''}`}>
            <button className="info-button" onClick={() => scrollToSection("djs")}>DJ's</button>
            <button className="info-button" onClick={() => scrollToSection("ubicacion")}>Ubicación</button>
            <button className="info-button" onClick={() => scrollToSection("etapas")}>Etapas</button>
            <button className="info-button" onClick={() => scrollToSection("mas")}>Más</button>
          </div>
        </>
      )}

      <Title />
      <p className="info-text">Toda la información sobre el evento la encontrarás aquí</p>

      <div className="info-container">
        <h1 id="djs" className="info-title">DJ's</h1>
        <div className="dj-section">
          {["DJ Phantom", "DJ Solaris", "DJ Electra"].map((dj, index) => (
            <div key={index} className="dj-image-container">
              <img
                src={`https://picsum.photos/1920/150?random=${index + 1}`}
                alt={dj}
                className="dj-image"
              />
              <h3 className="dj-name">{dj}</h3>
            </div>
          ))}
        </div>
        <h1 id="ubicacion" className="info-title">Ubicación</h1>
        <div className="ubicacion-content">
          <div className="ubicacion-image">
            <img src="https://i.postimg.cc/prcvK25H/ibagu.png"
              alt="Mapa de ubicación" />
          </div>
          <div className="ubicacion-text">
            <h3>Zona Urbana de Ibagué</h3>
            <p>Queremos que el ambiente del evento mantenga su escencia de rave underground, por lo que revelaremos el lugar de encuentro 3 días antes del evento</p>
            <p>Sin embargo podemos asegurar que será dentro de la zona urbana de Ibagué para que sea más accesible para todas las personas</p>
            <p>Fecha: 15/11/2025</p>
            <p>Horario: 20:00 - 06:00</p>
          </div>
        </div>

        {!countdown.expired && (
          <div className="countdown-container">
            <h3 className="countdown-title">Revelación del lugar exacto en:</h3>
            <div className="countdown-timer">
              <div className="countdown-item">
                <span className="countdown-value">
                  {String(countdown.days).padStart(2, '0')}
                </span>
                <span className="countdown-label">Días</span>
              </div>

              <div className="countdown-separator">:</div>

              <div className="countdown-item">
                <span className="countdown-value">
                  {String(countdown.hours).padStart(2, '0')}
                </span>
                <span className="countdown-label">Horas</span>
              </div>

              <div className="countdown-separator">:</div>

              <div className="countdown-item">
                <span className="countdown-value">
                  {String(countdown.minutes).padStart(2, '0')}
                </span>
                <span className="countdown-label">Minutos</span>
              </div>

              <div className="countdown-separator">:</div>

              <div className="countdown-item">
                <span className="countdown-value">
                  {String(countdown.seconds).padStart(2, '0')}
                </span>
                <span className="countdown-label">Segundos</span>
              </div>
            </div>

            <div className="target-date">
              {targetDate.toLocaleDateString('es-CO', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
          </div>
        )}

        <h1 id="etapas" className="info-title">Etapas</h1>
        <p className="info-text">El evento contará con varias etapas de compra, aproveha las primeras para oobtener un mejor precio</p>

        <div className="etapas-container">
          {/* Etapa 1 */}
          <div className="etapa-card">
            <h3 className="etapa-title">Etapa 1: Early Bird</h3>
            <div className="etapa-image-container">
              <img
                src="https://i.postimg.cc/JhCLNY0G/jesus.jpg"
                alt="Etapa Early Bird"
                className="etapa-image"
              />
            </div>
            <div className="etapa-info">
              <p className="etapa-price">$30.000 COP x1</p>
              <p className="etapa-price">$50.000 COP x2</p>
              <p className="etapa-price">$120.000 COP x5</p>
              <p className="etapa-date">Disponible hasta: 30 Sept 2023</p>
            </div>
          </div>

          {/* Etapa 2 */}
          <div className="etapa-card">
            <h3 className="etapa-title">Etapa 2: Regular</h3>
            <div className="etapa-image-container">
              <img
                src="https://i.postimg.cc/B6JKtgGK/fist-pump.jpg"
                alt="Etapa Regular"
                className="etapa-image"
              />
            </div>
            <div className="etapa-info">
              <p className="etapa-price">$30.000 COP x1</p>
              <p className="etapa-price">$50.000 COP x2</p>
              <p className="etapa-price">$120.000 COP x5</p>
              <p className="etapa-date">Disponible hasta: 31 Oct 2023</p>
            </div>
          </div>

          {/* Etapa 3 */}
          <div className="etapa-card">
            <h3 className="etapa-title">Etapa 3: Casi por fuera</h3>
            <div className="etapa-image-container">
              <img
                src="https://i.postimg.cc/VkbMhvRd/atrapado.jpg"
                alt="Etapa Última Oportunidad"
                className="etapa-image"
              />
            </div>
            <div className="etapa-info">
              <p className="etapa-price">$30.000 COP x1</p>
              <p className="etapa-price">$50.000 COP x2</p>
              <p className="etapa-price">$120.000 COP x5</p>
              <p className="etapa-date">Disponible hasta: 14 Nov 2023</p>
            </div>
          </div>
        </div>
        <p>* Existe un número limitado de tickets, no te quedes afuera *</p>

        <h1 id="mas" className="info-title">Más</h1>
        <p className="info-text">Hay cosas que simplemente no podemos permitir, te contamos:</p>

        <div className="mas-container">
          {/* Card 1: Artículos prohibidos */}
          <div className="mas-card">
            <h3 className="mas-card-title">Artículos Prohibidos</h3>
            <ul className="mas-card-list">
              <li>Armas de cualquier tipo</li>
              <li>Cuchillos o objetos punzantes</li>
              <li>Drogas o sustancias ilegales</li>
              <li>Objetos de vidrio</li>
              <li>Material pirotécnico</li>
            </ul>
          </div>

          {/* Card 2: Restricciones */}
          <div className="mas-card">
            <h3 className="mas-card-title">Restricciones</h3>
            <ul className="mas-card-list">
              <li>No se permiten menores de edad</li>
              <li>Prohibido el ingreso a personas no gratas en la ciudad</li>
              <li>Nos reservamos el derecho de admisión</li>
              <li>Edad mínima: 18 años con identificación</li>
              <li>No reembolsos por expulsión del evento</li>
            </ul>
          </div>
        </div>
        <p>* El evento contará con venta de bebidas alcoholicas y no alcoholicas ademas de snacks basicos *</p>
      </div>
    </>
  );
};

export default InfoContent;