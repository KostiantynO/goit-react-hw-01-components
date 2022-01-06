import { StatListStyled } from './Statistics.styled';
import StatsItem from './StatsItem';

export const StatList = ({ stats }) => {
  return <StatListStyled>{stats.map(StatsItem)}</StatListStyled>;
};
