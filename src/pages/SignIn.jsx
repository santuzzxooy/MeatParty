import UseIsMobile from "../hooks/UseIsMobile";
import ParticlesComponent from '../components/Particles';
import Header from '../components/Header';
import Title from '../components/Title'
import Footer from '../components/Footer'
import './styles/SignIn.css';

const SignIn = () => {

  const isMobile = UseIsMobile();

  return (
    <div className="home-container">
      {!isMobile && <ParticlesComponent />}
      <Header className="Header" />
      <div className="main-content">
        <Title />

        <form className="login-form">
          <div className="flex-row">
            <label className="lf--label" htmlFor="username">
              <svg width="12px" height="13px">
                <path
                  fill="#B1B7C4"
                  d="M8.9,7.2C9,6.9,9,6.7,9,6.5v-4C9,1.1,7.9,0,6.5,0h-1C4.1,0,3,1.1,3,2.5v4c0,0.2,0,0.4,0.1,0.7 
                C1.3,7.8,0,9.5,0,11.5V13h12v-1.5C12,9.5,10.7,7.8,8.9,7.2z"
                />
              </svg>
            </label>
            <input id="username" className="lf--input" placeholder="Correo" type="text" />
          </div>

          <div className="flex-row">
            <label className="lf--label" htmlFor="password">
              <svg width="15px" height="5px">
                <path
                  fill="#B1B7C4"
                  d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1V2H6z"
                />
              </svg>
            </label>
            <input id="password" className="lf--input" placeholder="Contraseña" type="password" />
          </div>

          <input className="lf--submit" type="submit" value="LOGIN" />
          <a className="lf--forgot" href="#">Olvidaste la Contraseña?</a>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;