import { useCart } from "../context/CartContext";
import UseIsMobile from "../hooks/UseIsMobile";
import ParticlesComponent from "../components/Particles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../components/Title";
import "./styles/ShoppingCart.css";

const ShoppingCart = () => {
  const isMobile = UseIsMobile();
  const { cart, dispatch } = useCart();

  // total sumando todos los productos
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="principAll-container">
      {!isMobile && <ParticlesComponent />}
      <Header />
      <div className="principMain-content">
        <Title />
        <div className="cart-container">
          {cart.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            <>
              <ul>
                {cart.map((item) => (
                  <li key={item.id} className="cart-item">
                    {item.plan} - ${item.price} x {item.quantity}
                    <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                <h3>Total: ${total.toFixed(2)}</h3>
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