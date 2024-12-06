import { StatsCard } from "ui/stats-card";
import style from "./index.module.css";
import { useTranslation } from "next-i18next";

export function StatsSection() {
  const { t } = useTranslation("common");

  return (
    <div className={style.statsLayout}>
      <section id="stats" className={style.stats}>
        <h2 data-aos="zoom-in-right" className={style.stats__header}>
          {t("titulo-stats")}
        </h2>
        <div className={style.stats__container}>
          <StatsCard
            percentage="99%"
            text={t("titulo-item-stats1")}
            info={t("parrafo-item-stats1")}
          ></StatsCard>
          <StatsCard
            percentage="300K"
            text={t("titulo-item-stats2")}
            info={t("parrafo-item-stats2")}
          ></StatsCard>
          <StatsCard
            percentage="90%"
            text={t("titulo-item-stats3")}
            info={t("parrafo-item-stats3")}
          ></StatsCard>
          <StatsCard
            percentage="85%"
            text={t("titulo-item-stats4")}
            info={t("parrafo-item-stats4")}
          ></StatsCard>
        </div>
      </section>
    </div>
  );
}
