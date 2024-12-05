import style from "./index.module.css";
import Image from "next/image";
import { MyHeader } from "components/header";
import { SectionTextComp } from "components/section-text";

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
        <div className={style.contenedorImgMobile}>
          <Image
            className={style.imgMobile}
            src="/images/decore-mobile.png"
            alt="decore"
            width={360}
            height={861}
          ></Image>
        </div>
        <MyHeader></MyHeader>
        <SectionTextComp></SectionTextComp>
      </section>
    </div>
  );
}
