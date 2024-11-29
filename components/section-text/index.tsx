import style from "./index.module.css";
import { MyButton } from "ui/buttons";
import Image from "next/image";

export function MyHero() {
  return (
    <div>
      <section className={style.section}>
        <div className={style.contenedorTextos}>
          <div className={style.contenedorh1}>
            <h1>Transforma tu vida, un hábito a la vez</h1>
          </div>
          <div className={style.contenedorParrafo}>
            <p>
              Mejora tu bienestar con hábitos saludables, siguiendo tu progreso
              de manera simple y efectiva.
            </p>
          </div>
          <div className={style.contenedorBoton}>
            <MyButton>Comienza ahora</MyButton>
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
