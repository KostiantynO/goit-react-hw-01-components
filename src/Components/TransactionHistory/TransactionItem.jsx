import { TransactionData, TransactionRow } from './TransactionHistory.styled';

const TransactionItem = ({
  id = 'no transaction id',
  type = '-',
  amount = '-',
  currency = '-',
}) => {
  return id ? (
    <TransactionRow key={id}>
      <TransactionData>{type}</TransactionData>
      <TransactionData>{amount}</TransactionData>
      <TransactionData>{currency}</TransactionData>
    </TransactionRow>
  ) : (
    ''
  );
};

export default TransactionItem;
