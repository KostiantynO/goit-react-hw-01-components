import { PropTypes } from '../../modules/common/components';
import { SectionTitle, StatisticsStyled } from './Statistics.styled';
import { StatList } from './StatList';

export const Statistics = ({
  title,
  stats = [{ id: 'not-found', label: 'not-found', percentage: 0 }],
}) => {
  return (
    <StatisticsStyled>
      {title ? <SectionTitle>{title}</SectionTitle> : ''}
      {<StatList stats={stats} />}
    </StatisticsStyled>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
