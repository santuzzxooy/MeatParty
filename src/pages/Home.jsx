import UseIsMobile from "../hooks/UseIsMobile";
import ParticlesComponent from "../components/Particles";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Telegram from "../components/Telegram";
import Footer from '../components/Footer'
import "../App.css";

function Home() {
  const isMobile = UseIsMobile();

  return (
    <div className="home-container">
      {!isMobile && <ParticlesComponent />}
      <Header />
      <div className="main-content">
        <Banner />
        <Telegram />
      </div>
      <Footer />
    </div>
  );
}

export default Home;