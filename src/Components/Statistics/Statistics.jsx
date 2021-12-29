import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import StatsItem from './StatsItem';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      {stats && <ul className={css.statList}>{stats.map(StatsItem)}</ul>}
    </section>
  );
};

Statistics.defaultProps = {
  stats: [{ id: 'not-found', label: 'not-found', percentage: 0 }],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};

export default Statistics;
