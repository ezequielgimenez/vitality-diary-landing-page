import style from "./index.module.css";

type myProps = {
  percentage: string;
  text: string;
  info: string;
};

export function StatsCard({ percentage, text, info }: myProps) {
  return (
    <div data-aos="zoom-in-right" className={style.stats__card}>
      <h3>{percentage}</h3>
      <h2>{text}</h2>
      <p>{info}</p>
    </div>
  );
}
