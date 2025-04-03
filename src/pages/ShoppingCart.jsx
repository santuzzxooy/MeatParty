import { useMemo } from "react";
import { useCart } from "../context/CartContext";
import UseIsMobile from "../hooks/UseIsMobile";
import ParticlesComponent from "../components/Particles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../components/Title";
import SadBoy from "../public/SadBoy.webp";
import { Link } from "react-router-dom";
import ticketData from "../components/utils/prices.json";
import packagesData from "../components/utils/packages.json";
import "./styles/ShoppingCart.css";

const ShoppingCart = () => {
  const isMobile = UseIsMobile();
  const { cart, cartTotal, ticketsTotal, dispatch } = useCart();
  const signupIsMobile = UseIsMobile();
  const particlesMemoized = useMemo(() => !signupIsMobile && <ParticlesComponent />, [signupIsMobile]);

  // Combinar todos los productos disponibles
  const allProducts = [...ticketData, ...packagesData];

  const getProductDetails = (productId, productType) => {
    return allProducts.find(
      (product) => product.id === productId && 
      (productType ? product.type === productType : true)
    );
  };

  const serviceFee = cart.reduce((acc, item) => {
    const itemServiceFee = (item.price * 0.0329) + 952 + ((952 + (item.price * 0.0329)) * 0.19);
    return acc + itemServiceFee * item.quantity;
  }, 0);

  const roundedServiceFee = Math.round(serviceFee);
  const total = cartTotal + roundedServiceFee;

  const handleRemoveCompletely = (item) => {
    dispatch({
      type: "REMOVE_COMPLETELY",
      payload: {
        id: item.id,
        type: item.type
      }
    });
  };

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
                {cart.map((item) => {
                  const product = getProductDetails(item.id, item.type);
                  return (
                    <li key={`${item.id}-${item.type}`} className="cart-item">
                      <div className="cart-item-info">
                        {product?.name} - {item.type === 'package' ? 'Paquete' : 'Ticket'}
                      </div>
                      <div className="cart-item-actions">
                        <div className="quantity-control">
                          <button 
                            onClick={() => dispatch({
                              type: "UPDATE_QUANTITY",
                              payload: {
                                id: item.id,
                                type: item.type,
                                newQuantity: item.quantity - 1
                              }
                            })}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button 
                            onClick={() => dispatch({
                              type: "UPDATE_QUANTITY",
                              payload: {
                                id: item.id,
                                type: item.type,
                                newQuantity: item.quantity + 1
                              }
                            })}
                          >
                            +
                          </button>
                        </div>
                        <button 
                          onClick={() => handleRemoveCompletely(item)}
                          className="remove-btn"
                        >
                          Eliminar
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="cart-total">
                <h4 className="cart-total-precio">Valor del servicio: ${roundedServiceFee.toLocaleString()}</h4>
                <h3 className="cart-total-precio">Total: ${total.toLocaleString()}</h3>
                <h4 className="cart-total-precio">Total Tickets: {ticketsTotal}</h4>

                <Link to="/MeatParty/tickets" className="banner-buy-text">Pagar</Link>
              </div>
              <button 
                className="clear-cart" 
                onClick={() => dispatch({ type: "CLEAR_CART" })}
              >
                Vaciar carrito
              </button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;