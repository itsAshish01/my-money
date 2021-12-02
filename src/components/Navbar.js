import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useLogout } from '../hooks/useLogout';

const Navbar = () => {
  const { logout } = useLogout();
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
        <li>
          <button className='btn' onClick={logout}>
            Sign out
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
