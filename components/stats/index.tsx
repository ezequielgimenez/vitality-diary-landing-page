import { StatsCard } from "ui/stats-card";
import style from "./index.module.css";

export function StatsSection() {
  return (
    <div className={style.statsLayout}>
      <section id="stats" className={style.stats}>
        <h2 className={style.stats__header}>Nuestros resultados en cifras</h2>
        <div className={style.stats__container}>
          <StatsCard
            percentage="99%"
            text="Usuarios satisfechos"
            info="Más de 10,000 usuarios ya estan transformando su vida con nuestra plataforma"
          ></StatsCard>
          <StatsCard
            percentage="300K"
            text="Tareas completadas"
            info="Se han completado más de 300,000 hábitos en nuestra plataforma."
          ></StatsCard>
          <StatsCard
            percentage="90%"
            text="Tasa de retención"
            info="El 90% de los usuarios continúan organizando su vida con nosotros después del primer mes."
          ></StatsCard>
          <StatsCard
            percentage="85%"
            text="Progreso alcanzado"
            info="El 85% de los usuarios reportan mejoras en su productividad y bienestar en las primeras 4 semanas."
          ></StatsCard>
        </div>
      </section>
    </div>
  );
}
