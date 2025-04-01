import { useMemo } from "react";
import { useCart } from "../context/CartContext";
import UseIsMobile from "../hooks/UseIsMobile";
import ParticlesComponent from "../components/Particles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../components/Title";
import SadBoy from "../public/SadBoy.webp";
import { Link } from "react-router-dom";
import pricesData from "../components/utils/prices.json";
import "./styles/ShoppingCart.css";

const ShoppingCart = () => {
  const isMobile = UseIsMobile();
  const { cart, dispatch } = useCart();
  const signupIsMobile = UseIsMobile();
  const particlesMemoized = useMemo(() => !signupIsMobile && <ParticlesComponent />, [signupIsMobile]);

  const getTicketCount = (planId) => {
    const plan = pricesData.find((plan) => plan.id === planId);
    return plan ? plan.tickets : 0;
  };

  const serviceFee = cart.reduce((acc, item) => {
    const itemServiceFee = (item.price * 0.0329) + 952 + ((952 + (item.price * 0.0329)) * 0.19);
    return acc + itemServiceFee * item.quantity;
  }, 0);

  const roundedServiceFee = Math.round(serviceFee);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity + roundedServiceFee, 0);

  const totalTickets = cart.reduce((acc, item) => acc + getTicketCount(item.id) * item.quantity, 0);

  return (
    <div className="principAll-container">
      {particlesMemoized}
      <Header />
      <div className="principMain-content">
        <Title />
        <div className="cart-container">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <p>Tu carrito está vacío.</p>
              <div className="cart-gotickets">
                <img src={SadBoy} alt="Sad Boy" />
                <p>¿Estás buscando tickets?</p>
              </div>
              <Link to="/MeatParty/tickets" className="banner-buy-text">Tickets</Link>
            </div>
          ) : (
            <>
              <ul>
                {cart.map((item) => (
                  <li key={item.id} className="cart-item">
                    {item.plan} . ${item.price} x {item.quantity}
                    <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                <h4 className="cart-total-precio">Valor del servicio: $ {roundedServiceFee}</h4>
                <h3 className="cart-total-precio">Total: $ {total}</h3>
                <h4 className="cart-total-precio">Total Tickets: {totalTickets}</h4>

                <Link to="/MeatParty/tickets" className="banner-buy-text">Pagar</Link>
              </div>
              <button className="clear-cart" onClick={() => dispatch({ type: "CLEAR_CART" })}>Vaciar carrito</button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;