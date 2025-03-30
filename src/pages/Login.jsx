import UseIsMobile from "../hooks/UseIsMobile";
import ParticlesComponent from '../components/Particles';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';
import { FaUserAstronaut, FaKey } from "react-icons/fa";
import './styles/Login.css';

const Login = () => {
  const loginIsMobile = UseIsMobile();

  return (
    <div className="principAll-container">
      {!loginIsMobile && <ParticlesComponent />}
      <Header className="login-header" />
      <div className="principMain-content">
        <Title />
        <form className="login-form">
          <div className="login-flex-row">
            <label className="login-label" htmlFor="login-username">
              <FaUserAstronaut />
            </label>
            <input id="login-username" className="login-input" placeholder="Correo" type="text" />
          </div>

          <div className="login-flex-row">
            <label className="login-label" htmlFor="login-password">
              <FaKey />
            </label>
            <input id="login-password" className="login-input" placeholder="Contraseña" type="password" />
          </div>

          <input className="login-submit" type="submit" value="Ingresar" />
          <a className="login-forgot" href="#">Olvidaste la Contraseña?</a>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;