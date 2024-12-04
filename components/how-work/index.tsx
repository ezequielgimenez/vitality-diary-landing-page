import style from "./index.module.css";

export function HowWorkComponent() {
  return (
    <div>
      <section id="how-work" className={style.contenedorMain}>
        <div className={style.contenedorTitulo}>
          <h1>Obtenga más información sobre el proceso</h1>
        </div>
        <div className={style.contenedorImg}>
          <img
            src="https://res.cloudinary.com/dkzmrfgus/image/upload/v1733257960/Landing%20Page/how-work/zyav099ksiwp6roi131s.png"
            alt="steps"
          />
        </div>
        <div className={style.contenedorImgMobile}>
          <div className={style.itemMobile}>
            <div>
              <img
                src="https://res.cloudinary.com/dkzmrfgus/image/upload/v1733264579/Landing%20Page/how-work/how%20work%20mobile/1.png"
                alt="1"
              />
            </div>
            <div className={style.contenedorTextoMobile}>
              <h1>Regístrate</h1>
            </div>
            <div className={style.contenedorTextoMobile}>
              <p>Crea tu cuenta en segundos.</p>
            </div>
          </div>
          <div className={style.itemMobile}>
            <div>
              <img
                src="https://res.cloudinary.com/dkzmrfgus/image/upload/v1733264586/Landing%20Page/how-work/how%20work%20mobile/2.png"
                alt="2"
              />
            </div>
            <div className={style.contenedorTextoMobile}>
              <h1>Completa tus datos</h1>
            </div>
            <div className={style.contenedorTextoMobile}>
              <p>
                Configura tu perfil de manera rápida y sencilla. Completa tu
                información básica para personalizar tu experiencia y recibir
                recomendaciones adaptadas a tus metas.
              </p>
            </div>
          </div>
          <div className={style.itemMobile}>
            <div>
              <img
                src="https://res.cloudinary.com/dkzmrfgus/image/upload/v1733264590/Landing%20Page/how-work/how%20work%20mobile/3.png"
                alt="3"
              />
            </div>
            <div className={style.contenedorTextoMobile}>
              <h1>Utiliza la aplicación web</h1>
            </div>
            <div className={style.contenedorTextoMobile}>
              <p>
                Establece rutinas manteniendo el foco con notificaciones y
                celebra cada avance hacia una rutina mejor.
              </p>
            </div>
          </div>
        </div>
        <div className={style.contenedorParrafo}>
          <div className={style.items}>
            <div>
              <h1>Regístrate</h1>
            </div>
            <div>
              <p>Crea tu cuenta en segundos.</p>
            </div>
          </div>
          <div className={style.items}>
            <div>
              <h1>Completa tus datos</h1>
            </div>

            <div>
              <p>
                Configura tu perfil de manera rápida y sencilla. Completa tu
                información básica para personalizar tu experiencia y recibir
                recomendaciones adaptadas a tus metas.
              </p>
            </div>
          </div>
          <div className={style.items}>
            <div>
              <h1>Utiliza la aplicación web</h1>
            </div>

            <div>
              <p>
                Establece rutinas manteniendo el foco con notificaciones y
                celebra cada avance hacia una rutina mejor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
