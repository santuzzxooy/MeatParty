import './styles/Header.css';
import micro_boy from './images/micro_boy.gif';
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { Link } from "react-router";

const Header = () => {
    return (
        <nav className="header">
            <div className="header-logo-container">
                <Link to="/MeatParty" className="header-logo">
                    <img src={micro_boy} alt="Logo" className="header-imgLogo" />
                    <h1 className="header-title">Meat Boy Party</h1>
                </Link>
            </div>
            <input type="checkbox" id="header-check" className="header-check" />
            <label htmlFor="header-check" className="header-checkbtn">
                <IoMdArrowDropleftCircle />
            </label>
            <ul className="header-menu">
                <li><Link className="header-link header-active" to="/MeatParty/tickets">Tickets</Link></li>
                <li><Link className="header-link" to="/MeatParty/ingresar">Ingresar</Link></li>
                <li><Link className="header-link header-last" to="#">Registrarme</Link></li>
            </ul>
        </nav>
    );
}

export default Header;