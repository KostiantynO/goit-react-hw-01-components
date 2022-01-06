import { PropTypes } from '../../modules/common/components';
import TransactionItem from './TransactionItem';

export const TransactionsTableBody = ({ items }) => {
  return <tbody>{items.map(TransactionItem)}</tbody>;
};

TransactionsTableBody.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  ).isRequired,
};
