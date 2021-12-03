import styles from './Home.module.css';
import TransactionForm from './TransactionForm';
import { useAuthContext } from '../../hooks/useAuthContext';

const Home = () => {
  const { user } = useAuthContext();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>Transaction List</h3>
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
};

export default Home;
