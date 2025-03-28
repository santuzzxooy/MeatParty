import { useState, useEffect } from "react";
import "./styles/Loader.css";

const imagesToLoad = ["/ruta-de-tu-imagen-1.jpg", "/ruta-de-tu-imagen-2.jpg"];

const LoaderScreen = ({ children }) => {
  const [loadedImages, setLoadedImages] = useState(0);
  const totalImages = imagesToLoad.length;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loadedImages >= totalImages) {
      setTimeout(() => setLoading(false), 500);
    }
  }, [loadedImages, totalImages]);

  return (
    <>
      {loading && (
        <div className="loader-screen">
          <div className="loader"></div>
          <p>Cargando...</p>
        </div>
      )}

      {/* Imágenes ocultas para controlar la carga */}
      {imagesToLoad.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Preloading ${index}`}
          onLoad={() => setLoadedImages((prev) => prev + 1)}
          style={{ display: "none" }}
        />
      ))}

      {/* Mostrar contenido solo si se han cargado las imágenes */}
      {!loading && children}
    </>
  );
};

export default LoaderScreen;
