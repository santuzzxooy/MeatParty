import './styles/Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <p>HardCode ®</p>
                <p>Eres DJ? <Link to="/MeatParty">Contactanos</Link></p>
            </div>
        </div>
    );
}

export default Footer;