import style from "./index.module.css";
import Image from "next/image";
import LinkedInIMG from "../../public/images/linkedin.png";
import GithubIMG from "../../public/images/github.png";

export function Footer() {
  return (
    <div className={style.footerLayout}>
      <section id="footer" className={style.footer}>
        <div className={style.footer_mainLinks}>
          <h2 className={style.tituloLogo}>
            <div>
              <span className={style.firstLetter}>V</span>ITALITY
            </div>
            <div>
              <span className={style.firstLetter}> D</span>IARY ✔
            </div>
          </h2>
          <div>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className={style.footer_secondLinks}>
          <h3>Developers</h3>
          <div>
            <p>
              <a href="" target="_blank">
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
              <a href="" target="_blank">
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
