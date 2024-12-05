import style from "./index.module.css";

export function FeaturesComp() {
  return (
    <div>
      <section id="features" className={style.featuresSection}>
        <div data-aos="zoom-in-right" className={style.contenedorTitulo}>
          <h2>Beneficios Destacados</h2>
        </div>
        <div data-aos="zoom-in-right" className={style.contenedorInfo}>
          <div className={style.contenedorImg}>
            <img
              src="https://res.cloudinary.com/dkzmrfgus/image/upload/v1732816597/Landing%20Page/features/1.png"
              alt=""
            />
          </div>
          <div className={style.contenedorTexto}>
            <div className={style.contenedorH1}>
              <h1>Crea y organiza</h1>
            </div>
            <div className={style.linea}></div>
            <div className={style.contenedorParrafo}>
              <p>
                Establece y organiza tu rutina diaria fijando metas semanales
                claras y alcanzables. Personaliza tus hábitos según tus
                necesidades y lleva el control de tus avances para mantenerte
                enfocado y motivado cada día.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-right" className={style.contenedorInfo}>
          <div className={style.contenedorImg}>
            <img
              src="https://res.cloudinary.com/dkzmrfgus/image/upload/v1732821105/Landing%20Page/features/2.png"
              alt=""
            />
          </div>
          <div className={style.contenedorTexto}>
            <div className={style.contenedorH1}>
              <h1>Recibe notificaciones</h1>
            </div>
            <div className={style.linea}></div>
            <div className={style.contenedorParrafo}>
              <p>
                Recibe recordatorios para mantenerte al día con tus habitos
                diarios y metas semanales. Recibe notificaciones para completar
                tus tareas pendientes sin completar del día. Nunca más olvides
                lo importante para tu bienestar.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-right" className={style.contenedorInfo}>
          <div className={style.contenedorImg}>
            <img
              src="https://res.cloudinary.com/dkzmrfgus/image/upload/v1732821123/Landing%20Page/features/3.png"
              alt=""
            />
          </div>
          <div className={style.contenedorTexto}>
            <div className={style.contenedorH1}>
              <h1>Observa tu mejora</h1>
            </div>
            <div className={style.linea}></div>
            <div className={style.contenedorParrafo}>
              <p>
                Visualiza tu progreso de forma clara y sencilla. Obtén rutinas
                saludables diseñadas especialmente para ti, adaptadas a tus
                objetivos y necesidades mejorando tu salud y aumentando tu
                productividad dedicando más tiempo a lo que realmente amas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
