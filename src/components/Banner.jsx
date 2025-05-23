import './styles/Banner.css'; 
import UseIsMobile from "../hooks/UseIsMobile";
import { Link } from "react-router-dom";
import pixelMouse from './images/pixelMouse.webp';

const Banner = () => {
    const isMobile = UseIsMobile();
    const bannerImage = "https://i.postimg.cc/mrbynkz8/banner.jpg";

    return (
        <div 
            className="banner_area"
            style={{ backgroundImage: `url(${bannerImage})` }}
        >
            <ul>
                <li><Link to="/MeatParty/tickets" className="banner-text">Tickets Virtuales</Link></li>
                <li className="banner-buy-container">
                    <Link to="/MeatParty/tickets" className="banner-buy-text">
                        {!isMobile && (
                            <img src={pixelMouse} alt="Mouse pixelado" className="banner-mouse" />
                        )}
                        Comprar
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Banner;