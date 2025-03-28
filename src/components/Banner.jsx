import './styles/Banner.css';
import useIsMobile from "../hooks/useIsMobile";
import { Link } from "react-router-dom";
import pixelMouse from './images/pixelMouse.gif';

const Banner = () => {

    const isMobile = useIsMobile();

    return (
        <div className="banner_area">
            <ul>
                <li><Link to="/MeatParty/tickets" className="banner-text">Tickets Virtuales</Link></li>
                <li className="banner-buy-container">
                {!isMobile &&(
                    <img src={pixelMouse} alt="Mouse pixelado" className="banner-mouse" />
                )}
                    <Link to="/MeatParty/tickets" className="banner-buy-text">Comprar</Link>
                </li>
            </ul>
        </div>
    );
}

export default Banner;