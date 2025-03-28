import './styles/Header.css';
import useIsMobile from "../hooks/useIsMobile";
import micro_boy from './images/micro_boy.gif';
import { IoMdArrowDropleftCircle, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {

    const isMobile = useIsMobile();

    return (
        <nav className="header">
            <div className="header-logo-container">
                <Link to="/MeatParty" className="header-logo">
                {!isMobile && ( 
                    <img src={micro_boy} alt="Logo" className="header-imgLogo" />
                )}
                    <h1 className="header-title">Meat Boy Party</h1>
                </Link>
            </div>

            <input type="checkbox" id="header-check" className="header-check" />
            <label htmlFor="header-check" className="header-checkbtn">
                <IoMdArrowDropleftCircle />
            </label>


            <ul className="header-menu">

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
