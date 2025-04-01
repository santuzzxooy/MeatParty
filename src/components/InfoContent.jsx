import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./styles/InfoContent.css";
import useScrollPosition from "../hooks/useScrollPosition";
import UseIsMobile from "../hooks/UseIsMobile";

const InfoContent = () => {
  const scrolled = useScrollPosition(50);
  const isMobile = UseIsMobile();
  const location = useLocation();

  // Función para hacer scroll hacia la sección
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Detectar si hay un hash en la URL y hacer scroll automáticamente
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", ""); // Quitar el #
      scrollToSection(sectionId);
    }
  }, [location]);

  return (
    <>
      {!isMobile && (
        <div className={`info-buttons-container ${scrolled ? "info-button-scrolled" : ""}`}>
          <button className="info-button" onClick={() => scrollToSection("djs")}>DJ's</button>
          <button className="info-button" onClick={() => scrollToSection("ubicacion")}>Ubicación</button>
          <button className="info-button" onClick={() => scrollToSection("etapas")}>Etapas</button>
          <button className="info-button" onClick={() => scrollToSection("mas")}>Más</button>
        </div>
      )}

      <div className="info-container">
        <h1 id="djs" className="info-title">DJ's</h1>
        <div className="dj-section">
          {["DJ Phantom", "DJ Solaris", "DJ Electra"].map((dj, index) => (
            <div key={index} className="dj-image-container">
              <img
                src={`https://picsum.photos/1920/200?random=${index + 1}`}
                alt={dj}
                className="dj-image"
              />
              <h3 className="dj-name">{dj}</h3>
            </div>
          ))}
        </div>

        <h1 id="ubicacion" className="info-title">Ubicación</h1>
        <p className="info-text">El evento se llevará a cabo en [nombre del lugar], ubicado en [dirección].</p>

        <h1 id="etapas" className="info-title">Etapas</h1>
        <p className="info-text">El festival contará con varias etapas, cada una con una experiencia única.</p>

        <h1 id="mas" className="info-title">Más</h1>
        <p className="info-text">Descubre más sobre los horarios, actividades y sorpresas del evento.</p>
      </div>
    </>
  );
};

export default InfoContent;