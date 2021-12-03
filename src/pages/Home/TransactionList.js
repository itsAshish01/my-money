import { useFirestore } from '../../hooks/useFirestore';
import styles from './Home.module.css';

const TransactionList = ({ transactions }) => {
  const { deleteDocument, response } = useFirestore('transactions');
  console.log(response);

  return (
    <>
      <h3>Recent Transactions</h3>
      <ul className={styles.transactions}>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p className={styles.name}>{transaction.name}</p>
            <p className={styles.amount}>${transaction.amount}</p>
            <button onClick={() => deleteDocument(transaction.id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
