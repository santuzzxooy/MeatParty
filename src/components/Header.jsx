import './styles/Header.css'
import micro_boy from './images/micro_boy.gif'
import { AiOutlineUnorderedList } from "react-icons/ai";
import { IoMdArrowDropleftCircle } from "react-icons/io";

const Header = () => {
    return (
        <nav className="header">
            <div className='logo-container'>
                <a href="#" className="logo">
                    <img src={micro_boy} alt='?' className="imgLogo" />
                    <h1>Meat Boy Party</h1>
                </a>
            </div>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className='checkbtn'>
            <IoMdArrowDropleftCircle />
            </label>
            <ul>
                <li><a className="active" href="/Entradas">Entradas</a></li>
                <li><a className='normal' href="#contact">Ingresar</a></li>
                <li><a className='ultimo' href="#about">Registrarme</a></li>
            </ul>
        </nav>
    )
}

export default Header