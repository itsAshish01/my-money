import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>
        {!user && (
          <>
            <li>
              <Link to='/login'>Sign in</Link>
            </li>
            <li>
              <Link to='/signup'>Create account</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>hello, {user.displayName}</li>
            <li>
              <button className='btn' onClick={logout}>
                Sign out
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
