import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

const TransactionHistoryItem = ({ id, type, amount, currency }) => {
  return (
    id &&
    type &&
    amount &&
    currency &&
    typeof id === "string" &&
    typeof type === "string" &&
    typeof amount === "string" &&
    typeof currency === "string" &&
    id.trim().length > 0 &&
    type.trim().length > 0 &&
    amount.trim().length > 0 &&
    currency.trim().length > 0 && (
      <tr className={css.row} key={id}>
        <td className={css.type}>{type}</td>
        <td className={css.amount}>{amount}</td>
        <td className={css.currency}>{currency}</td>
      </tr>
    )
  );
};

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

      {items && Array.isArray(items) && items.length && (
        <tbody>{items.map(TransactionHistoryItem)}</tbody>
      )}
    </table>
  );
};

TransactionHistory.defaultProps = {
  items: {
    id: "no transaction id",
    type: "-",
    amount: "-",
    currency: "-",
  },
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
