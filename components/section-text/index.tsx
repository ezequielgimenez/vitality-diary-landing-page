import style from "./index.module.css";
import { MyButtonHero, MyButtonHeroMobile } from "ui/buttons";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export function SectionTextComp() {
  const { t, i18n } = useTranslation("common");

  return (
    <div>
      <section className={style.section}>
        <div className={style.contenedorTextos}>
          <div className={style.contenedorh1}>
            <h1>{t("titulo")}</h1>
          </div>
          <div className={style.contenedorParrafo}>
            <p>{t("parrafo")}</p>
          </div>
          <div className={style.contenedorBoton}>
            <a href="#pricing">
              <MyButtonHero>{t("buttonComienza")}</MyButtonHero>
            </a>
          </div>
          <div className={style.contenedorBotonMobile}>
            <a href="#pricing">
              <MyButtonHeroMobile>{t("buttonComienza")}</MyButtonHeroMobile>
            </a>
          </div>
        </div>
        <div className={style.contenedorImagen}>
          {/* <Image
            className={style.img}
            src="/images/hero-image.png"
            alt="hero-image"
            width={539}
            height={593}
          ></Image> */}
          <img
            src="https://res.cloudinary.com/dkzmrfgus/image/upload/v1732823218/Landing%20Page/hero.png"
            alt="hero-img"
          />
        </div>
      </section>
    </div>
  );
}
