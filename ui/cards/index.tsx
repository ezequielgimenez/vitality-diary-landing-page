import style from "./index.module.css";
import { MyButtonSmallCard, MyButtonSmallBlueCard } from "ui/buttons";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export function MyCard() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className={style.contenedorCard}>
        <div className={style.contenedorTitulo}>
          <h1>Free</h1>
          <h2>
            <div>
              <span className={style.firstLetter}>$</span>0
            </div>
          </h2>
        </div>
        <div className={style.contenedorItems}>
          <p>
            <span className={style.icon}>✔</span> {t("item-precio1")}
          </p>
          <p>
            <span className={style.icon}>✔</span> {t("item-precio2")}
          </p>
          <p>
            <span className={style.icon}>✔</span> {t("item-precio3")}
          </p>
          <p>
            <span className={style.icon}>✖</span> {t("item-precio4")}
          </p>
          <p>
            <span className={style.icon}>✖</span> {t("item-precio5")}
          </p>
        </div>
        <div className={style.contenedorButton}>
          <MyButtonSmallCard>{t("comprar")}</MyButtonSmallCard>
        </div>
      </div>
    </div>
  );
}

export function MyCardPremium() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className={style.contenedorCardPremium}>
        <div className={style.logoPro}>
          <img
            src="https://res.cloudinary.com/dkzmrfgus/image/upload/v1732839158/Landing%20Page/pro.png"
            alt="pro"
          />
        </div>
        <div className={style.contenedorTitulo}>
          <h1>Premium</h1>
          <h2>
            <div>
              <span className={style.firstLetter}>$</span>10
            </div>
          </h2>
        </div>
        <div className={style.contenedorItems}>
          <p>
            <span className={style.icon}>✔</span> {t("item-precio1")}
          </p>
          <p>
            <span className={style.icon}>✔</span> {t("item-precio2")}
          </p>
          <p>
            <span className={style.icon}>✔</span> {t("item-precio3")}
          </p>
          <p>
            <span className={style.icon}>✔</span> {t("item-precio4")}
          </p>
          <p>
            <span className={style.icon}>✔</span> {t("item-precio5")}
          </p>
        </div>
        <div className={style.contenedorButton}>
          <MyButtonSmallBlueCard>{t("comprar")}</MyButtonSmallBlueCard>
        </div>
      </div>
    </div>
  );
}
