import PropTypes from "prop-types";
import css from "./Statistics.module.css";

const randomBgColor = () => `#${Math.random().toString(16).slice(2, 8)}`;

const StatsItem = ({ id, label, percentage }) => {
  return (
    id &&
    typeof id === "string" &&
    typeof label === "string" &&
    typeof percentage === "number" && (
      <li
        key={id}
        style={{ backgroundColor: randomBgColor() }}
        className={css.item}
      >
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}&#37;</span>
      </li>
    )
  );
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      {Array.isArray(stats) && stats.length && (
        <ul className={css.statList}>{stats.map(StatsItem)}</ul>
      )}
    </section>
  );
};

Statistics.defaultProps = {
  stats: [{ id: "not-found", label: "not-found", percentage: 0 }],
};

Statistics.propTypes = {
  title: PropTypes.string,

  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
