import Link from "next/link";
import style from "./index.module.css";
import Image from "next/image";
import { MyButtonOutlined, MenuButtonLanguage } from "ui/buttons";

export function MyHeader() {
  return (
    <div>
      <header className={style.header}>
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
              <Link
                href="#features"
                scroll={false}
                style={{ textDecoration: "none", color: "#170F49" }}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                scroll={false}
                style={{ textDecoration: "none", color: "#170F49" }}
              >
                Pricing
              </Link>
            </li>

            <li>
              <MyButtonOutlined onClick={() => "hola"}>
                Contact
              </MyButtonOutlined>
            </li>
            <li>
              <MenuButtonLanguage item1="ES" item2="EN" redirectLanguageEN="/">
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
      </header>
    </div>
  );
}
