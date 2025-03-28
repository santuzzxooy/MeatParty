import './styles/Banner.css';
import { Link } from "react-router-dom";
import pixelMouse from './images/pixelMouse.gif'; // Asegúrate de que la imagen esté en la carpeta correcta

const Banner = () => {
    return (
        <div className="banner_area">
            <ul>
                <li><Link to="/MeatParty/tickets" className="banner-text">Tickets Virtuales</Link></li>
                <li className="banner-buy-container">
                    <img src={pixelMouse} alt="Mouse pixelado" className="banner-mouse" />
                    <Link to="/MeatParty/tickets" className="banner-buy-text">Comprar</Link>
                </li>
            </ul>
        </div>
    );
}

export default Banner;