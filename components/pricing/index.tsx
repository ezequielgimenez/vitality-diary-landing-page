import { MyCard, MyCardPremium } from "ui/cards";
import style from "./index.module.css";
import { useTranslation } from "next-i18next";

export function PricingComp() {
  const { t } = useTranslation("common");
  return (
    <div>
      <section id="pricing" className={style.contenedorPricing}>
        <div className={style.contenedorTitulo}>
          <h1 data-aos="zoom-in-right">{t("titulo-precio")}</h1>
          <p data-aos="zoom-in-right">{t("parrafo-precio")}</p>
        </div>
        <div data-aos="zoom-in-right" className={style.contenedorCards}>
          <MyCard></MyCard>
          <MyCardPremium></MyCardPremium>
        </div>
      </section>
    </div>
  );
}
