import './styles/Header.css'
import micro_boy from './images/micro_boy.gif'

const Header = () => {
    return (
        <div className="header">
            <img src={micro_boy} alt='' className="imgLogo" />
            <h1>Meat Boy Party</h1>
            <div className="header-right">
                <a className="active" href="#home">Entradas</a>
                <a href="#contact">Ingresar</a>
                <a href="#about">Registarme</a>
            </div>
        </div>
    )
}

export default Header