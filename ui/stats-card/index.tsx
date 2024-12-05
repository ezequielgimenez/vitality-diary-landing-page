import style from "./index.module.css";

export function StatsCard(props: any) {
  const { percentage, text, info } = props;
  return (
    <div data-aos="zoom-in-right" className={style.stats__card}>
      <h3>{percentage}</h3>
      <h2>{text}</h2>
      <p>{info}</p>
    </div>
  );
}
