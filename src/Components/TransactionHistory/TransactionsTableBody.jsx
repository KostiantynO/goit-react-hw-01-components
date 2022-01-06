import TransactionItem from './TransactionItem';
import PropTypes from 'prop-types';

export const TransactionsTableBody = ({ items }) => {
  return <tbody>{items.map(TransactionItem)}</tbody>;
};

TransactionsTableBody.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  ).isRequired,
};
