import './styles/Prices.css'
import { IoTicketOutline } from "react-icons/io5";
import { LuCandy } from "react-icons/lu";
import { TbMoodSadDizzy } from "react-icons/tb";
import { LiaPiggyBankSolid } from "react-icons/lia";

const Prices = () => {
    return (
        <div className='prices_page'>
            <section className="pricing">
                <h1>asdflkjsdajkhlsdajklsdfa</h1>
                <div className="cards-wrapper">
                    <div className="price-card clr-1">
                        <div className="price-container">
                            <div className="price">
                                <span>30</span>
                                <span>K</span>
                            </div>
                        </div>
                        <h4 className="plan"><span> Solo </span></h4>
                        <div className="deliverables-wrapper">
                            <div className="deliverable">
                                <span>1 Ticket</span>
                                <span><IoTicketOutline /></span>
                            </div>
                            <div className="deliverable">
                                <span>Precio full</span>
                                <span><TbMoodSadDizzy /></span>
                            </div>
                            <div className="deliverable">
                                <span>Caramelo de soledad </span>
                                <span><LuCandy /></span>
                            </div>
                        </div>
                        <div className="align-center">
                            <a href="#" className="btn">Comprar</a>
                        </div>
                    </div>
                    <div className="price-card clr-2">
                        <div className="price-container">
                            <div className="price">
                                <span>50</span>
                                <span>K</span>
                            </div>
                        </div>
                        <h4 className="plan"><span> Duo </span></h4>
                        <div className="deliverables-wrapper">
                            <div className="deliverable">
                                <span>2 Tickets</span>
                                <span><IoTicketOutline /></span>
                                <span><IoTicketOutline /></span>
                            </div>
                            <div className="deliverable">
                                <span>Descuento 15%</span>
                                <span><LiaPiggyBankSolid /></span>
                            </div>
                            <div className="deliverable">
                                <span>Descuento 15%</span>
                                <span></span>
                            </div>
                        </div>
                        <div className="align-center">
                            <a href="#" className="btn">Comprar</a>
                        </div>
                    </div>
                    <div className="price-card clr-3">
                        <div className="price-container">
                            <div className="price">
                                <span>120</span>
                                <span>K</span>
                            </div>
                        </div>
                        <h4 className="plan"><span> Panas </span></h4>
                        <div className="deliverables-wrapper">
                            <div className="deliverable">
                                <span>5 Tickets</span>
                                <span><IoTicketOutline /></span>
                                <span><IoTicketOutline /></span>
                                <span><IoTicketOutline /></span>
                                <span><IoTicketOutline /></span>
                                <span><IoTicketOutline /></span>
                            </div>
                            <div className="deliverable">
                                <span>Descuento 20%</span>
                                <span><LiaPiggyBankSolid /></span>
                                <span><LiaPiggyBankSolid /></span>
                            </div>
                            <div className="deliverable">
                                <span>Descuento 20%</span>
                                <span></span>
                            </div>
                        </div>
                        <div className="align-center">
                            <a href="#" className="btn">Comprar</a>
                        </div>
                    </div>
                </div>
                <div class="container_prices">
                    <div class="item_prices">
                        <h1>Los precios mostrados en esta pagina varian segun la etapa</h1>
                        <h3>A pocos pasos de vivir la experiencia de un rave underground nunca antes visto en
                            la ciudad</h3>
                        <p>Esta es la pagina de compra de entradas a la meat boy party, donde te podrás
                            registrar con una cuenta de TELEGRAM y pagar a traves de PAYPAL además de contar
                            con una locación secreta hasta cuatro dias antes del evento.
                        </p>
                        <p>Compra tus entradas en las primeras etapas y aprovecha los precios ya que en la tercera
                            etapa los precios serán mas elevados, sin embargo las promociones de pareja y amigos
                            aún estarán disponibles con rebajas significativas.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Prices