import PropTypes from 'prop-types';

import {
  StatItem,
  StatItemLabel,
  StatItemPercentage,
} from './Statistics.styled';

const StatsItem = ({ id, label, percentage }) => {
  return id ? (
    <StatItem key={id}>
      <StatItemLabel>{label}</StatItemLabel>
      <StatItemPercentage>{percentage}&#37;</StatItemPercentage>
    </StatItem>
  ) : (
    ''
  );
};

StatsItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatsItem;
