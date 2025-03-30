import React, { useState, useMemo } from "react";
import UseIsMobile from "../hooks/UseIsMobile";
import ParticlesComponent from '../components/Particles';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';
import { FaUserAstronaut, FaKey, FaEye, FaEyeSlash } from "react-icons/fa";
import './styles/Login.css';

const Login = () => {

  const signupIsMobile = UseIsMobile();

  // Memorizar Particles para que no se regenere en cada render
  const particlesMemoized = useMemo(() => !signupIsMobile && <ParticlesComponent />, [signupIsMobile]);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="principAll-container">
      {particlesMemoized}
      <Header className="login-header" />
      <div className="principMain-content">
        <Title />
        <form className="login-form">
          {/* Usuario */}
          <div className="login-flex-row">
            <label className="login-label" htmlFor="login-username">
              <FaUserAstronaut />
            </label>
            <input id="login-username" className="login-input" placeholder="Usuario o Correo" type="text" />
          </div>

          {/* Contraseña con botón de mostrar/ocultar */}
          <div className="login-flex-row">
            <label className="login-label" htmlFor="login-password">
              <FaKey />
            </label>
            <input
              id="login-password"
              className="login-input"
              placeholder="Contraseña"
              type={showPassword ? "text" : "password"}
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
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