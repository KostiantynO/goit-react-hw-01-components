import PropTypes from 'prop-types';
import { SectionTitle, StatisticsStyled, StatList } from './Statistics.styled';
import StatsItem from './StatsItem';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsStyled>
      {title && <SectionTitle>{title}</SectionTitle>}
      {stats && <StatList>{stats.map(StatsItem)}</StatList>}
    </StatisticsStyled>
  );
};

Statistics.defaultProps = {
  stats: [{ id: 'not-found', label: 'not-found', percentage: 0 }],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
