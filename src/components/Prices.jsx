import "./styles/Prices.css";
import { IoTicketOutline } from "react-icons/io5";
import { LuCandy } from "react-icons/lu";
import { TbMoodSadDizzy } from "react-icons/tb";
import { LiaPiggyBankSolid } from "react-icons/lia";
import pricesData from "./utils/prices.json";

const iconMap = {
  IoTicketOutline: <IoTicketOutline />,
  LuCandy: <LuCandy />,
  TbMoodSadDizzy: <TbMoodSadDizzy />,
  LiaPiggyBankSolid: <LiaPiggyBankSolid />,
};

const Prices = () => {

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
                <a href="#" className="prices-btn">
                  Comprar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Prices;