import './styles/Header.css'
import road_rage from './images/road_rage.png'
import micro_boy from './images/micro_boy.gif'

const Header = () => {
    return (
        <div className="header">
            <img src={micro_boy} alt='' className="imgLogo" />
            <img src={road_rage} alt="road rage.png" className='imgHeader' />
            <div className="header-right">
                <a className="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    )
}

export default Header