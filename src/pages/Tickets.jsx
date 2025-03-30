import ParticlesComponent from '../components/Particles'
import Header from '../components/Header'
import UseIsMobile from "../hooks/UseIsMobile";
import Prices from '../components/Prices'
import Title from '../components/Title'
import Footer from '../components/Footer'

const Tickets = () => {
    const isMobile = UseIsMobile();

    return (
        <div className="principAll-container">
            {!isMobile && <ParticlesComponent />}
            <Header />
            <div className="principMain-content">
                <Title />
                <Prices />
            </div>
            <Footer />
        </div>
    )
}

export default Tickets