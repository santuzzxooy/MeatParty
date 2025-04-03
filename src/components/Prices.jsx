import "./styles/Prices.css";
import { IoTicketOutline } from "react-icons/io5";
import { LuCandy } from "react-icons/lu";
import { TbMoodSadDizzy } from "react-icons/tb";
import { LiaPiggyBankSolid } from "react-icons/lia";
import ticketData from "./utils/prices.json";
import packagesData from "./utils/packages.json";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const iconMap = {
  IoTicketOutline: <IoTicketOutline />,
  LuCandy: <LuCandy />,
  TbMoodSadDizzy: <TbMoodSadDizzy />,
  LiaPiggyBankSolid: <LiaPiggyBankSolid />,
};

const PriceCard = ({ plan, handleAddToCart }) => (
  <div key={plan.id} className="price-card">
    <div className="price-container">
      <div className="price">
        <span>{plan.price}</span>
        <span>{plan.currency}</span>
      </div>
    </div>
    <h4 className="prices-plan">
      <span>{plan.name}</span>
    </h4>
    <div className="prices-deliverables-wrapper">
      {plan.features.map((feature, index) => (
        <div key={index} className="prices-deliverable">
          <span>{feature.text}</span>
          <span>{iconMap[feature.icon]}</span>
        </div>
      ))}
    </div>
    <div className="prices-align-center">
      <button className="prices-btn" onClick={() => handleAddToCart(plan)}>
        Comprar
      </button>
    </div>
  </div>
);

const Prices = () => {
  const { dispatch } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (plan) => {
    const item = {
      id: plan.id,
      name: plan.name,
      price: plan.price,
      type: plan.type || "ticket", // Agregamos tipo para diferenciar
      tickets: plan.tickets // Mantenemos la cantidad de tickets
    };
    dispatch({ type: "ADD_TO_CART", payload: item });
    navigate("/MeatParty/carrito");
  };

  return (
    <section className="pricing">
      {/* Sección de Ticket Individual */}
      <h3 className="prices-section-title">Individual</h3>
      <div className="prices-cards-wrapper">
        {ticketData.filter(plan => plan.id === 1).map((plan) => (
          <PriceCard key={plan.id} plan={plan} handleAddToCart={handleAddToCart} />
        ))}
      </div>

      {/* Sección de Paquetes */}
      <h3 className="prices-section-title">Paquetes</h3>
      <div className="prices-cards-wrapper">
        {packagesData.map((plan) => (
          <PriceCard key={plan.id} plan={plan} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </section>
  );
};

export default Prices;