import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>
        <li>
          <Link to='/login'>Sign in</Link>
        </li>
        <li>
          <Link to='/signup'>Create account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
