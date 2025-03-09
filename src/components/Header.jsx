import './styles/Header.css'
import micro_boy from './images/micro_boy.gif'
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { Link } from "react-router";

const Header = () => {
    return (
        <nav className="header">
            <div className='logo-container'>
                <Link to="/" className="logo">
                    <img src={micro_boy} alt='?' className="imgLogo" />
                    <h1>Meat Boy Party</h1>
                </Link>
            </div>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className='checkbtn'>
                <IoMdArrowDropleftCircle />
            </label>
            <ul>
                <li><Link className="active" to="/tickets">Tickets</Link></li>
                <li><a className='normal' href="#">Ingresar</a></li>
                <li><a className='ultimo' href="#">Registrarme</a></li>
            </ul>
        </nav>
    )
}

export default Header