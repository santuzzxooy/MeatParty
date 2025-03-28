import './styles/Prices.css';
import { IoTicketOutline } from "react-icons/io5";
import { LuCandy } from "react-icons/lu";
import { TbMoodSadDizzy } from "react-icons/tb";
import { LiaPiggyBankSolid } from "react-icons/lia";
import pixelMouse from './images/pixelMouse.gif';
import pricesData from './utils/prices.json';

const iconMap = {
    IoTicketOutline: <IoTicketOutline />,
    LuCandy: <LuCandy />,
    TbMoodSadDizzy: <TbMoodSadDizzy />,
    LiaPiggyBankSolid: <LiaPiggyBankSolid />
};

const Prices = () => {
    return (
        <div className='prices_page'>
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
                            <h4 className="prices-plan"><span>{plan.plan}</span></h4>
                            <div className="prices-deliverables-wrapper">
                                {plan.features.map((feature, index) => (
                                    <div key={index} className="prices-deliverable">
                                        <span>{feature.text}</span>
                                        <span>{iconMap[feature.icon]}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="prices-align-center">
                                <img src={pixelMouse} alt="Mouse pixelado" className="prices-mouse" />
                                <a href="#" className="prices-btn">Comprar</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Prices;
