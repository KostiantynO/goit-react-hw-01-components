import { PropTypes } from '../../modules/common/components';
import { TableHeading, Transactions } from './TransactionHistory.styled';
import { TransactionsTableBody } from './TransactionsTableBody';

export const TransactionHistory = ({ items = [{}] }) => {
  return (
    <Transactions>
      <thead>
        <tr>
          <TableHeading>Type</TableHeading>
          <TableHeading>Amount</TableHeading>
          <TableHeading>Currency</TableHeading>
        </tr>
      </thead>

      {items ? <TransactionsTableBody items={items} /> : ''}
    </Transactions>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
