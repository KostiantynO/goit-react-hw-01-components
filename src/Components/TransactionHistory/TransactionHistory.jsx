import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import TransactionHistoryItem from './TransactionHistoryItem';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.thead}>Type</th>
          <th className={css.thead}>Amount</th>
          <th className={css.thead}>Currency</th>
        </tr>
      </thead>

      {items && <tbody>{items.map(TransactionHistoryItem)}</tbody>}
    </table>
  );
};

TransactionHistory.defaultProps = {
  items: [
    {
      id: 'no transaction id',
      type: '-',
      amount: '-',
      currency: '-',
    },
  ],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};

export default TransactionHistory;
