import './styles/Banner.css';
import { Link } from "react-router-dom"; // Corregido: "react-router-dom"

const Banner = () => {
    return (
        <div className="banner_area">
            <ul>
                <li><Link to="/MeatParty/tickets" className="banner-text">Tickets Virtuales</Link></li>
                <li><Link to="/MeatParty/tickets" className="banner-button">Comprar</Link></li>
            </ul>
        </div>
    );
}

export default Banner;
