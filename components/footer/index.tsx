import style from "./index.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export function Footer() {
  const router = useRouter();

  const handleHome = () => {
    router.push("/");
  };
  return (
    <div className={style.footerLayout}>
      <section id="footer" className={style.footer}>
        <div className={style.footer_mainLinks}>
          <h2 onClick={handleHome} className={style.tituloLogo}>
            <div>
              <span className={style.firstLetter}>V</span>ITALITY
            </div>
            <div>
              <span className={style.firstLetter}> D</span>IARY ✔
            </div>
          </h2>
          <div>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className={style.footer_secondLinks}>
          <h3>Developers</h3>
          <div>
            <p>
              <a href="https://github.com/ezequielgimenez" target="_blank">
                <Image
                  className={style.img}
                  src="/images/github.png"
                  alt="decore"
                  width={48}
                  height={48}
                ></Image>
              </a>
              <a href="" target="_blank">
                <Image
                  className={style.img}
                  src="/images/linkedin.png"
                  alt="decore"
                  width={48}
                  height={48}
                ></Image>
              </a>
            </p>
            <p>
              <a href="https://github.com/lucasfrezzini" target="_blank">
                <Image
                  className={style.img}
                  src="/images/github.png"
                  alt="decore"
                  width={48}
                  height={48}
                ></Image>
              </a>
              <a href="" target="_blank">
                <Image
                  className={style.img}
                  src="/images/linkedin.png"
                  alt="decore"
                  width={48}
                  height={48}
                ></Image>
              </a>
            </p>
          </div>
        </div>
        <p>© 2024 VitalityDiary Inc. All rights reserved</p>
      </section>
    </div>
  );
}
