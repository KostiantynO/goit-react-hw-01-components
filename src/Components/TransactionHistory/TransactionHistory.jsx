import PropTypes from 'prop-types';
import { TableHeading, Transactions } from './TransactionHistory.styled';
import TransactionItem from './TransactionItem';

export const TransactionHistory = ({
  items = [
    {
      id: 'no transaction id',
      type: '-',
      amount: '-',
      currency: '-',
    },
  ],
}) => {
  return (
    <Transactions>
      <thead>
        <tr>
          <TableHeading>Type</TableHeading>
          <TableHeading>Amount</TableHeading>
          <TableHeading>Currency</TableHeading>
        </tr>
      </thead>

      {items ? <tbody>{items.map(TransactionItem)}</tbody> : ''}
    </Transactions>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};
