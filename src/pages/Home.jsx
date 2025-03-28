import UseIsMobile from "../hooks/UseIsMobile";
import ParticlesComponent from "../components/Particles";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Telegram from "../components/Telegram";
import "../App.css";

function Home() {
  const isMobile = UseIsMobile();

  return (
    <div>
      {!isMobile && <ParticlesComponent />}
      <Header />
      <Banner />
      <Telegram />
    </div>
  );
}

export default Home;
