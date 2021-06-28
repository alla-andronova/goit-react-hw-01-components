import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
  return (
    <table className={s.table}>
      <thead className={s.tableHeader}>
        <tr className={s.tableRow}>
          <th className={s.tableName}>Type</th>
          <th className={s.tableName}>Amount</th>
          <th className={s.tableName}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }, index) => (
          <tr
            key={id}
            style={{
              backgroundColor: index % 2 == 0 ? 'lightpink' : 'lightgrey',
            }}
          >
            <td className={s.tableName}>{type}</td>
            <td className={s.tableName}>{amount}</td>
            <td className={s.tableName}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
