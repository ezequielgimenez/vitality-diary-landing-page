import Link from "next/link";
import style from "./index.module.css";
import Image from "next/image";
import { MyButtonOutlined, MenuButtonLanguage } from "ui/buttons";
import { BurgerIcon } from "ui/burger";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export function MyHeader() {
  const [mostrarNavegacion, setMostrar] = useState(false);
  const { i18n } = useTranslation();
  const router = useRouter();
  const handleNav = () => {
    setMostrar(!mostrarNavegacion);
  };

  const changeLenguage = (lng) => {
    i18n.changeLanguage(lng);
    router.push(router.pathname, router.asPath, { locale: lng });
  };

  return (
    <div>
      <header className={style.header}>
        <div className={style.headerDesktop}>
          <div className={style.contenedorLogo}>
            <h1 className={style.tituloLogo}>
              <div>
                <span className={style.firstLetter}>V</span>ITALITY
              </div>
              <div>
                <span className={style.firstLetter}> D</span>IARY ✔
              </div>
            </h1>
          </div>
          <nav className={style.contenedorNav}>
            <ul className={style.contenedorLista}>
              <li>
                <Link href="#features" scroll={false} className={style.link}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" scroll={false} className={style.link}>
                  Pricing
                </Link>
              </li>

              <li>
                <MyButtonOutlined onClick={() => "hola"}>
                  <a href="#contact" className={style.link}>
                    Contact
                  </a>
                </MyButtonOutlined>
              </li>
              <div>
                <MenuButtonLanguage
                  item1="ES"
                  item2="EN"
                  onClickItem1={() => changeLenguage("es")}
                  onClickItem2={() => changeLenguage("en")}
                >
                  <Image
                    className={style.img}
                    src="/images/lenguaje.png"
                    alt="lenguaje"
                    width={32}
                    height={32}
                  ></Image>
                  ⌵
                </MenuButtonLanguage>
              </div>
            </ul>
          </nav>
        </div>

        <div className={style.headerMobile}>
          <div className={style.contenedorLogo}>
            <h1 className={style.tituloLogo}>
              <div>
                <span className={style.firstLetter}>V</span>ITALITY
              </div>
              <div>
                <span className={style.firstLetter}> D</span>IARY ✔
              </div>
            </h1>
          </div>
          <div className={style.contenedorBurger} onClick={handleNav}>
            <BurgerIcon></BurgerIcon>
          </div>
          <div
            className={` ${style.contenedorNav} ${
              mostrarNavegacion ? style.open : style.closed
            }  `}
          >
            <div className={style.contenedorLink}>
              <div className={style.contenedorButtonMobile}>
                <div>
                  <MenuButtonLanguage
                    item1="ES"
                    item2="EN"
                    onClickItem1={() => changeLenguage("es")}
                    onClickItem2={() => changeLenguage("en")}
                  >
                    <Image
                      className={style.img}
                      src="/images/lenguaje.png"
                      alt="lenguaje"
                      width={32}
                      height={32}
                    ></Image>
                    ⌵
                  </MenuButtonLanguage>
                </div>
                <div>
                  <button className={style.closeButton} onClick={handleNav}>
                    ✖️
                  </button>
                </div>
              </div>
              <li>
                <Link href="#features" scroll={false} className={style.link}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" scroll={false} className={style.link}>
                  Pricing
                </Link>
              </li>

              <li>
                <Link href="#contact" scroll={false} className={style.link}>
                  Contacto
                </Link>
              </li>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
