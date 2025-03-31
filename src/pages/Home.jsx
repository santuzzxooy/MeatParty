import UseIsMobile from "../hooks/UseIsMobile";
import ParticlesComponent from "../components/Particles";
import Header from "../components/Header";
import Banner from "../components/Banner";
import EventoCard from "../components/EventoCard";
import TelegramCard from "../components/TelegramCard"
import Telegram from "../components/Telegram";
import Footer from '../components/Footer'
import "../App.css";

function Home() {
  const isMobile = UseIsMobile();

  return (
    <div className="principAll-container">
      {!isMobile && <ParticlesComponent />}
      <Header />
      <div className="principMain-content">
        <Banner />
        <EventoCard />
        <TelegramCard />
        <Telegram />
      </div>
      <Footer />
    </div>
  );
}

export default Home;