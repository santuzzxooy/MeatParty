import ParticlesComponent from '../components/Particles'
import Header from '../components/Header'
import UseIsMobile from "../hooks/UseIsMobile";
import Prices from '../components/Prices'

const Tickets = () => {
    const isMobile = UseIsMobile();

    return (
        <div>
            {!isMobile && <ParticlesComponent />}
            <Header />
            <Prices />
        </div>
    )
}

export default Tickets