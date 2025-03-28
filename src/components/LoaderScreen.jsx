import usePageLoader from "../hooks/usePageLoader";
import "./styles/Loader.css";

const LoaderScreen = ({ images }) => {
  const { loading, handleImageLoad } = usePageLoader(images);

  return (
    <>
      {loading && (
        <div className="loader-screen">
          <div className="loader"></div>
          <p>Cargando...</p>
        </div>
      )}

      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Preloading ${index}`}
          onLoad={handleImageLoad}
          style={{ display: "none" }}
        />
      ))}
    </>
  );
};

export default LoaderScreen;
