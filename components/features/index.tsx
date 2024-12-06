import style from "./index.module.css";
import { useTranslation } from "react-i18next";

export function FeaturesComp() {
  const { t } = useTranslation("common");

  return (
    <div>
      <section id="features" className={style.featuresSection}>
        <div data-aos="zoom-in-right" className={style.contenedorTitulo}>
          <h2>{t("titulo-Beneficios")}</h2>
        </div>
        <div data-aos="zoom-in-right" className={style.contenedorInfo}>
          <div className={style.contenedorImg}>
            <img
              src="https://res.cloudinary.com/dkzmrfgus/image/upload/v1732816597/Landing%20Page/features/1.png"
              alt=""
            />
          </div>
          <div className={style.contenedorTexto}>
            <div className={style.contenedorH1}>
              <h1>{t("titulo-item1")}</h1>
            </div>
            <div className={style.linea}></div>
            <div className={style.contenedorParrafo}>
              <p>{t("parrafo-item1")}</p>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-right" className={style.contenedorInfo}>
          <div className={style.contenedorImg}>
            <img
              src="https://res.cloudinary.com/dkzmrfgus/image/upload/v1732821105/Landing%20Page/features/2.png"
              alt=""
            />
          </div>
          <div className={style.contenedorTexto}>
            <div className={style.contenedorH1}>
              <h1>{t("titulo-item2")}</h1>
            </div>
            <div className={style.linea}></div>
            <div className={style.contenedorParrafo}>
              <p>{t("parrafo-item2")}</p>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-right" className={style.contenedorInfo}>
          <div className={style.contenedorImg}>
            <img
              src="https://res.cloudinary.com/dkzmrfgus/image/upload/v1732821123/Landing%20Page/features/3.png"
              alt=""
            />
          </div>
          <div className={style.contenedorTexto}>
            <div className={style.contenedorH1}>
              <h1>{t("titulo-item3")}</h1>
            </div>
            <div className={style.linea}></div>
            <div className={style.contenedorParrafo}>
              <p>{t("parrafo-item3")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
