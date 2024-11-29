import style from "./index.module.css";
import { MyButtonSmall, MyButtonSmallBlue } from "ui/buttons";
import Image from "next/image";

export function MyCard() {
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
            <span className={style.icon}>✔</span> Creación de hábitos diarios
            ilimitados
          </p>
          <p>
            <span className={style.icon}>✔</span> Metas semanales
          </p>
          <p>
            <span className={style.icon}>✔</span> Recordatorios de tareas
            pendientes
          </p>
          <p>
            <span className={style.icon}>✖</span> Obtenga rutinas saludables
            adaptadas a tus objetivos
          </p>
          <p>
            <span className={style.icon}>✖</span> Mantente al tanto de tu
            progreso
          </p>
        </div>
        <div className={style.contenedorButton}>
          <MyButtonSmall>Comprar</MyButtonSmall>
        </div>
      </div>
    </div>
  );
}

export function MyCardPremium() {
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
            <span className={style.icon}>✔</span> Creación de hábitos diarios
            ilimitados
          </p>
          <p>
            <span className={style.icon}>✔</span> Metas semanales
          </p>
          <p>
            <span className={style.icon}>✔</span> Recordatorios de tareas
            pendientes
          </p>
          <p>
            <span className={style.icon}>✔</span> Obtenga rutinas saludables
            adaptadas a tus objetivos
          </p>
          <p>
            <span className={style.icon}>✔</span> Mantente al tanto de tu
            progreso
          </p>
        </div>
        <div className={style.contenedorButton}>
          <MyButtonSmallBlue>Comprar</MyButtonSmallBlue>
        </div>
      </div>
    </div>
  );
}
