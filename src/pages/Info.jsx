import UseIsMobile from "../hooks/UseIsMobile";
import ParticlesComponent from "../components/Particles";
import Header from "../components/Header";
import InfoContent from "../components/InfoContent";
import Telegram from "../components/Telegram";
import Footer from '../components/Footer'

const Info = () => {

  const isMobile = UseIsMobile();

  return (
    <div className="principAll-container">
      {!isMobile && <ParticlesComponent />}
      <Header />
      <div className="principMain-content">
        <InfoContent />
        <Telegram />
      </div>
      <Footer />
    </div>
  )
}

export default Info