import styles from './Home.module.css';

const TransactionList = ({ transactions }) => {
  return (
    <>
      <h3>Recent Transactions</h3>
      <ul className={styles.transactions}>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p className={styles.name}>{transaction.name}</p>
            <p className={styles.amount}>${transaction.amount}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
