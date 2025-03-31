import "./styles/Prices.css";
import { IoTicketOutline } from "react-icons/io5";
import { LuCandy } from "react-icons/lu";
import { TbMoodSadDizzy } from "react-icons/tb";
import { LiaPiggyBankSolid } from "react-icons/lia";
import pricesData from "./utils/prices.json";
import { useCart } from "../context/CartContext"; // Importa el contexto del carrito
import { useNavigate } from "react-router-dom"; // Importa para redirigir

const iconMap = {
  IoTicketOutline: <IoTicketOutline />,
  LuCandy: <LuCandy />,
  TbMoodSadDizzy: <TbMoodSadDizzy />,
  LiaPiggyBankSolid: <LiaPiggyBankSolid />,
};

const Prices = () => {
  const { dispatch } = useCart(); // Usa el dispatch del carrito
  const navigate = useNavigate(); // Hook para redirigir

  const handleAddToCart = (plan) => {
    const item = {
      id: plan.id,
      plan: plan.plan,
      price: plan.price,
    };
    dispatch({ type: "ADD_TO_CART", payload: item }); // Añadir al carrito
    navigate("/MeatParty/carrito"); // Redirigir al carrito
  };

  return (
    <section className="pricing">
      <div className="prices-cards-wrapper">
        {pricesData.map((plan) => (
          <div key={plan.id} className="price-card">
            <div className="price-container">
              <div className="price">
                <span>{plan.price}</span>
                <span>{plan.currency}</span>
              </div>
            </div>
            <h4 className="prices-plan">
              <span>{plan.plan}</span>
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
        ))}
      </div>
    </section>
  );
};

export default Prices;