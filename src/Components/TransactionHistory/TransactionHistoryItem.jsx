import css from './TransactionHistory.module.css';

const TransactionHistoryItem = ({ id, type, amount, currency }) => {
  return (
    id && (
      <tr className={css.row} key={id}>
        <td className={css.type}>{type}</td>
        <td className={css.amount}>{amount}</td>
        <td className={css.currency}>{currency}</td>
      </tr>
    )
  );
};

export default TransactionHistoryItem;
