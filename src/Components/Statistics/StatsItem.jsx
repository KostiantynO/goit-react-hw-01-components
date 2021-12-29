import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const randomBgColor = () => `#${Math.random().toString(16).slice(2, 8)}`;

const StatsItem = ({ id, label, percentage }) => {
  return (
    id && (
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

StatsItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatsItem;
