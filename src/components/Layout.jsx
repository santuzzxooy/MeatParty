import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import micro_boy from './images/micro_boy.gif';
import LoaderScreen from "./LoaderScreen";

const Layout = () => {
  const [loadedImages, setLoadedImages] = useState(0);
  const totalImages = 2; // Numero de imagenes a cargar
  const [loading, setLoading] = useState(true);

  // Función que se ejecuta cuando una imagen se carga
  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  // Cuando todas las imágenes se cargan se oculta
  useEffect(() => {
    if (loadedImages >= totalImages) {
      setTimeout(() => {
        setLoading(false);
      }, 500); // Agregamos un pequeño delay para evitar parpadeo
    }
  }, [loadedImages]);

  // Si después de 5 segundos no han cargado, ocultar el loader
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // Ajusta el tiempo según sea necesario

    return () => clearTimeout(timeout); // Limpiar el timeout si se desmonta el componente
  }, []);

  return (
    <>
      {loading && <LoaderScreen />}

      {/* Imágenes a cargar (pueden estar ocultas) */}
      <img src={micro_boy} alt="Micro_boy" onLoad={handleImageLoad} className="hidden-image" />
      <img src="https://i.postimg.cc/mrbynkz8/banner.jpg" alt="banner" onLoad={handleImageLoad} className="hidden-image" />

      {/* Contenido de la página */}
      {!loading && <Outlet />}
    </>
  );
};

export default Layout;