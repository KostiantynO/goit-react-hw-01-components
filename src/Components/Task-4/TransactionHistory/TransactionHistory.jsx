import css from "./TransactionHistory.module.css";

const TransactionHistoryItem = ({ id, type, amount, currency }) => (
  <tr className={css.row} key={id}>
    <td className={css.type}>{type}</td>
    <td className={css.amount}>{amount}</td>
    <td className={css.currency}>{currency}</td>
  </tr>
);

const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead>
      <tr>
        <th className={css.thead}>Type</th>
        <th className={css.thead}>Amount</th>
        <th className={css.thead}>Currency</th>
      </tr>
    </thead>

    <tbody>{items.map(TransactionHistoryItem)}</tbody>
  </table>
);
export default TransactionHistory;
