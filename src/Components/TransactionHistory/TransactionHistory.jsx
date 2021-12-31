import PropTypes from 'prop-types';
import { TableHeading, Transactions } from './TransactionHistory.styled';
import TransactionItem from './TransactionItem';

export const TransactionHistory = ({ items }) => {
  return (
    <Transactions>
      <thead>
        <tr>
          <TableHeading>Type</TableHeading>
          <TableHeading>Amount</TableHeading>
          <TableHeading>Currency</TableHeading>
        </tr>
      </thead>

      {items && <tbody>{items.map(TransactionItem)}</tbody>}
    </Transactions>
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
