import style from "./index.module.css";
import { MyButtonSmallBlueCard } from "ui/buttons";
export function ContactComponet() {
  return (
    <div>
      <section id="contact" className={style.section}>
        <div>
          <h1 className={style.title}>Contáctanos</h1>
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
