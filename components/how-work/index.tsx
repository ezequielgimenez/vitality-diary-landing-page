import style from "./index.module.css";
import { useTranslation } from "react-i18next";

export function HowWorkComponent() {
  const { t } = useTranslation("common");
  return (
    <div>
      <section
        data-aos="zoom-in-right"
        id="how-work"
        className={style.contenedorMain}
      >
        <div className={style.contenedorTitulo}>
          <h1>{t("titulo-work")}</h1>
        </div>
        <div className={style.contenedorImg}>
          <img
            src="https://res.cloudinary.com/dkzmrfgus/image/upload/v1733257960/Landing%20Page/how-work/zyav099ksiwp6roi131s.png"
            alt="steps"
          />
        </div>
        <div className={style.contenedorImgMobile}>
          <div className={style.itemMobile}>
            <div>
              <img
                src="https://res.cloudinary.com/dkzmrfgus/image/upload/v1733264579/Landing%20Page/how-work/how%20work%20mobile/1.png"
                alt="1"
              />
            </div>
            <div className={style.contenedorTextoMobile}>
              <h1>{t("titulo-item-work1")}</h1>
            </div>
            <div className={style.contenedorTextoMobile}>
              <p>{t("parrafo-item-work1")}</p>
            </div>
          </div>
          <div className={style.itemMobile}>
            <div>
              <img
                src="https://res.cloudinary.com/dkzmrfgus/image/upload/v1733264586/Landing%20Page/how-work/how%20work%20mobile/2.png"
                alt="2"
              />
            </div>
            <div className={style.contenedorTextoMobile}>
              <h1>{t("titulo-item-work2")}</h1>
            </div>
            <div className={style.contenedorTextoMobile}>
              <p>{t("parrafo-item-work2")}</p>
            </div>
          </div>
          <div className={style.itemMobile}>
            <div>
              <img
                src="https://res.cloudinary.com/dkzmrfgus/image/upload/v1733264590/Landing%20Page/how-work/how%20work%20mobile/3.png"
                alt="3"
              />
            </div>
            <div className={style.contenedorTextoMobile}>
              <h1>{t("titulo-item-work3")}</h1>
            </div>
            <div className={style.contenedorTextoMobile}>
              <p>{t("parrafo-item-work3")}</p>
            </div>
          </div>
        </div>
        <div className={style.contenedorParrafo}>
          <div data-aos="zoom-in-right" className={style.items}>
            <div>
              <h1>{t("titulo-item-work1")}</h1>
            </div>
            <div>
              <p>{t("parrafo-item-work1")}</p>
            </div>
          </div>
          <div data-aos="zoom-in-right" className={style.items}>
            <div>
              <h1>{t("titulo-item-work2")}</h1>
            </div>

            <div>
              <p>{t("parrafo-item-work2")}</p>
            </div>
          </div>
          <div data-aos="zoom-in-right" className={style.items}>
            <div>
              <h1>{t("titulo-item-work3")}</h1>
            </div>

            <div>
              <p>{t("parrafo-item-work3")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
