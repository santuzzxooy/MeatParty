import './styles/Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <p>Meat Boy Party ®</p>
            <p>Eres artista? <Link to="/MeatParty">Contactanos</Link></p>
        </div>
    )
}

export default Footer