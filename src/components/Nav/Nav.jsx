import {Link, useLocation, useNavigate} from 'react-router-dom';
import styles from './Nav.module.css';
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUserProfil} from "../../redux/slices/userSlice";
import {useEffect} from "react";
import {fetchProfil} from "../../redux/actions/userActions";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const userProfile = useSelector(selectUserProfil);

  const isActive = (path) => location.pathname === path ? styles.active : '';

  const handleLogout = () => {
    dispatch(logout());
    setTimeout(() => {
      navigate('/');
    }, 200);
  };

  useEffect(() => {
    dispatch(fetchProfil());
  }, [dispatch]);

  return (
    <nav className={styles.main_nav}>
      <Link className={styles.main_nav_logo} to="/">
        <img
          className={styles.main_nav_logo_image}
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {userProfile ? (
          <>
            <Link className={`${styles.main_nav_item} ${isActive('/profile')}`} to="/profile">
              <i className="fa fa-user-circle"></i>
              {userProfile && userProfile.firstName}
            </Link>
            <Link className={`${styles.main_nav_item}`} onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link className={`${styles.main_nav_item} ${isActive('/login')}`} to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
