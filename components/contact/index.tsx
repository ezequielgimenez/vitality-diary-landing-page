import style from "./index.module.css";
import { MyButtonSmallBlueCard } from "ui/buttons";

import { useTranslation } from "next-i18next";

export function ContactComponet() {
  const { t } = useTranslation("common");
  return (
    <div>
      <section data-aos="zoom-in-right" id="contact" className={style.section}>
        <div>
          <h1 className={style.title}>{t("contacto-titulo")}</h1>
        </div>
        <form className={style.form} action="">
          <div className={style.content}>
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          <div className={style.content}>
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <div className={style.content}>
            <label htmlFor="">Message</label>
            <textarea name="" id=""></textarea>
          </div>
          <div className={style.contenedorButton}>
            <MyButtonSmallBlueCard>Send</MyButtonSmallBlueCard>
          </div>
        </form>
      </section>
    </div>
  );
}
