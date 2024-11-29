import style from "./index.module.css";
import Image from "next/image";
import { MyHeader } from "components/header";
import { MyHero } from "components/section-text";

export default function HeroSection() {
  return (
    <div>
      <section className={style.mainSection}>
        <div className={style.contenedorImg}>
          <Image
            className={style.img}
            src="/images/decore2.png"
            alt="decore"
            width={748}
            height={625}
          ></Image>
        </div>
        <MyHeader></MyHeader>
        <MyHero></MyHero>
      </section>
    </div>
  );
}
