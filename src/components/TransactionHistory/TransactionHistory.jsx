
import style from './TransactionHistory.module.css';


export const TransactionHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th className={style.transactionRowTh}>Type</th>
          <th className={style.transactionRowTh}>Amount</th>
          <th className={style.transactionRowTh}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transactions => (
          <tr className={style.bodyColor}>
            <>
              <td className={style.transactionRowTr}>
                {transactions.type}
              </td>
              <td className={style.transactionRowTr}>
                {transactions.amount}
              </td>
              <td className={style.transactionRowTr}>
                {transactions.currency}
              </td>
            </>
          </tr>
        ))}
      </tbody>
    </table>
  );
};