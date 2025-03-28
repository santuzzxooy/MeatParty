import './styles/Header.css';
import micro_boy from './images/micro_boy.gif';
import { IoMdArrowDropleftCircle, IoMdClose } from "react-icons/io"; // Agregado el icono de cierre
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="header">
            <div className="header-logo-container">
                <Link to="/MeatParty" className="header-logo">
                    <img src={micro_boy} alt="Logo" className="header-imgLogo" />
                    <h1 className="header-title">Meat Boy Party</h1>
                </Link>
            </div>

            {/* Input checkbox para controlar el menú */}
            <input type="checkbox" id="header-check" className="header-check" />
            <label htmlFor="header-check" className="header-checkbtn">
                <IoMdArrowDropleftCircle />
            </label>

            {/* Menú de navegación */}
            <ul className="header-menu">
                {/* Botón para cerrar el menú */}
                <label htmlFor="header-check" className="header-closebtn">
                    <IoMdClose />
                </label>
                
                <li><Link className="header-link header-active" to="/MeatParty/tickets">Tickets</Link></li>
                <li><Link className="header-link" to="/MeatParty/ingresar">Ingresar</Link></li>
                <li><Link className="header-link" to="#">Registrarme</Link></li>
            </ul>
        </nav>
    );
}

export default Header;
