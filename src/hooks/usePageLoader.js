import { useState, useEffect } from "react";

const usePageLoader = (imagesToLoad = []) => {
  const [loadedImages, setLoadedImages] = useState(0);
  const [loading, setLoading] = useState(true);
  const totalImages = imagesToLoad.length;

  // Se ejecuta cuando una imagen se carga
  useEffect(() => {
    if (loadedImages >= totalImages) {
      setTimeout(() => setLoading(false), 500);
    }
  }, [loadedImages, totalImages]);

  // Si después de 5 segundos no han cargado, ocultar el loader
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timeout);
  }, []);

  const handleImageLoad = () => setLoadedImages((prev) => prev + 1);

  return { loading, handleImageLoad };
};

export default usePageLoader;