import css from "./Statistics.module.css";

const randomBgColor = () => `#${Math.random().toString(16).slice(2, 8)}`;

const makeStatItemMarkup = ({ id, label, percentage }) => (
  <li
    key={id}
    style={{ backgroundColor: randomBgColor() }}
    className={css.item}
  >
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}&#37;</span>
  </li>
);

const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.statList}>{stats.map(makeStatItemMarkup)}</ul>
  </section>
);

export default Statistics;
