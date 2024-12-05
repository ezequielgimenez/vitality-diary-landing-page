import { MyCard, MyCardPremium } from "ui/cards";
import style from "./index.module.css";

export function PricingComp() {
  return (
    <div>
      <section id="pricing" className={style.contenedorPricing}>
        <div className={style.contenedorTitulo}>
          <h1 data-aos="zoom-in-right">Nuestros precios</h1>
          <p data-aos="zoom-in-right">
            Elige entre nuestro plan gratuito para comenzar, o desbloquea todas
            las funciones avanzadas con nuestro plan Premium. ¡Tú decides cómo
            transformar tus hábitos!
          </p>
        </div>
        <div data-aos="zoom-in-right" className={style.contenedorCards}>
          <MyCard></MyCard>
          <MyCardPremium></MyCardPremium>
        </div>
      </section>
    </div>
  );
}
