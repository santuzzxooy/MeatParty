import './styles/Banner.css'
import { Link } from "react-router";

const Banner = () => {
    return (
        <div className='banner_area'>
            <ul>
                <li><Link to="/MeatParty/tickets" className='texto'>tickets virtuales</Link></li>
                <li><Link to="/MeatParty/tickets" className='boton'>Comprar</Link></li>
            </ul>
        </div>
    )
}

export default Banner