import Link from "next/link";
import style from "./index.module.css";
import Image from "next/image";
import { MyButtonOutlined, MenuButtonLanguage } from "ui/buttons";
import { BurgerIcon } from "ui/burger";
import { useState } from "react";

export function MyHeader() {
  const [mostrarNavegacion, setMostrar] = useState(false);

  const handleNav = () => {
    setMostrar(!mostrarNavegacion);
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
              <li>
                <MenuButtonLanguage
                  item1="ES"
                  item2="EN"
                  redirectLanguageEN="/"
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
              </li>
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
            </h1>{" "}
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
              <div className={style.contenedorButtonClose}>
                <button className={style.closeButton} onClick={handleNav}>
                  ✖️
                </button>
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
