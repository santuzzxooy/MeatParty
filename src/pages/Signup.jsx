import React, { useState, useMemo } from "react";
import UseIsMobile from "../hooks/UseIsMobile";
import { validateEmail, validatePassword, validateUsername } from "./utils/validators";
import { checkUsernameAvailability } from "./utils/checkUsername";
import ParticlesComponent from "../components/Particles";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import { FaUserAstronaut, FaKey, FaCheck, FaEye, FaEyeSlash } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdOutlineNotInterested } from "react-icons/md";
import { TbUserSearch } from "react-icons/tb";
import "./styles/Signup.css";

const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const [signupForm, setSignupForm] = useState({
    signupEmail: "",
    signupConfirmEmail: "",
    signupUsername: "",
    signupPassword: "",
    signupConfirmPassword: "",
  });

  const [signupErrors, setSignupErrors] = useState({});
  const [signupUsernameAvailable, setSignupUsernameAvailable] = useState(null);
  const signupIsMobile = UseIsMobile();

  // Memorizar Particles para que no se regenere en cada render
  const particlesMemoized = useMemo(() => !signupIsMobile && <ParticlesComponent />, [signupIsMobile]);

  const handleSignupChange = (e) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };

  const handleSignupUsernameCheck = () => {
    if (!signupForm.signupUsername.trim()) {
      setSignupUsernameAvailable(null);
      setSignupErrors((prevErrors) => ({
        ...prevErrors,
        signupUsername: "Por favor, ingresa un nombre de usuario",
      }));
      return;
    }

    setSignupErrors((prevErrors) => ({ ...prevErrors, signupUsername: undefined }));
    setSignupUsernameAvailable(checkUsernameAvailability(signupForm.signupUsername));
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!validateEmail(signupForm.signupEmail)) newErrors.signupEmail = "Correo inválido";
    if (signupForm.signupEmail !== signupForm.signupConfirmEmail)
      newErrors.signupConfirmEmail = "Los correos no coinciden";
    if (!validateUsername(signupForm.signupUsername))
      newErrors.signupUsername = "Usuario inválido (min 3, max 15 caracteres, sin espacios)";
    if (!validatePassword(signupForm.signupPassword))
      newErrors.signupPassword = "Contraseña débil";
    if (signupForm.signupPassword !== signupForm.signupConfirmPassword)
      newErrors.signupConfirmPassword = "Las contraseñas no coinciden";

    setSignupErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Formulario enviado correctamente");
    }
  };

  return (
    <div className="principAll-container">
      {particlesMemoized}
      <Header />
      <div className="principMain-content">
        <Title />

        <form className="signup-form" onSubmit={handleSignupSubmit}>
          {/* Correo */}
          <div className="signup-flex-row">
            <label className="signup-label" htmlFor="signup-email"><IoIosMail /></label>
            <input
              id="signup-email"
              className="signup-input"
              placeholder="Correo"
              type="email"
              name="signupEmail"
              value={signupForm.signupEmail}
              onChange={handleSignupChange}
            />
          </div>
          {signupErrors.signupEmail && <p className="signup-error">{signupErrors.signupEmail}</p>}

          {/* Confirmar Correo */}
          <div className="signup-flex-row">
            <label className="signup-label" htmlFor="signup-confirm-email"><IoIosMail /></label>
            <input
              id="signup-confirm-email"
              className="signup-input"
              placeholder="Confirmar Correo"
              type="email"
              name="signupConfirmEmail"
              value={signupForm.signupConfirmEmail}
              onChange={handleSignupChange}
              onPaste={(e) => e.preventDefault()} // 🚫 Bloquea el pegado
            />
          </div>
          {signupErrors.signupConfirmEmail && <p className="signup-error">{signupErrors.signupConfirmEmail}</p>}


          {/* Nombre de Usuario */}
          <div className="signup-flex-row">
            <label className="signup-label" htmlFor="signup-username"><FaUserAstronaut /></label>
            <input
              id="signup-username"
              className="signup-input"
              placeholder="Usuario"
              type="text"
              name="signupUsername"
              value={signupForm.signupUsername}
              onChange={handleSignupChange}
            />
            <button type="button" className="signup-verify-btn" onClick={handleSignupUsernameCheck}>
              <TbUserSearch />
            </button>
          </div>
          {signupErrors.signupUsername ? (
            <p className="signup-error">{signupErrors.signupUsername}</p>
          ) : signupUsernameAvailable !== null && signupForm.signupUsername.trim() !== "" && (
            <p className={`signup-info ${signupUsernameAvailable ? "SUavailable" : "SUnot-available"}`}>
              {signupUsernameAvailable ? <><FaCheck /> Usuario disponible</> : <><MdOutlineNotInterested /> Usuario No disponible</>}
            </p>
          )}

          {/* Contraseña */}
          <div className="signup-flex-row">
            <label className="signup-label" htmlFor="signup-password"><FaKey /></label>
            <input
              id="signup-password"
              className="signup-input"
              placeholder="Contraseña"
              type={showPassword ? "text" : "password"}
              name="signupPassword"
              value={signupForm.signupPassword}
              onChange={handleSignupChange}
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <p className="signup-info">Nivel de Seguridad: {validatePassword(signupForm.signupPassword)}</p>
          {signupErrors.signupPassword && <p className="signup-error">{signupErrors.signupPassword}</p>}

          {/* Confirmar Contraseña */}
          <div className="signup-flex-row">
            <label className="signup-label" htmlFor="signup-confirm-password"><FaKey /></label>
            <input
              id="signup-confirm-password"
              className="signup-input"
              placeholder="Confirmar Contraseña"
              type={showConfirmPassword ? "text" : "password"}
              name="signupConfirmPassword"
              value={signupForm.signupConfirmPassword}
              onChange={handleSignupChange}
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {signupErrors.signupConfirmPassword && <p className="signup-error">{signupErrors.signupConfirmPassword}</p>}

          <button type="submit" className="signup-submit">Registrarse</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;