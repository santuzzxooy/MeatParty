import './styles/Banner.css'
import { Link } from "react-router";

const Banner = () => {
    return (
        <div className='banner_area'>
            <ul>
                <li><Link to="/tickets">tickets virtuales</Link></li>
            </ul>
        </div>
    )
}

export default Banner