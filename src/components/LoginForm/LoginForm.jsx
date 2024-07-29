import styles from './LoginForm.module.css';
import {fetchProfil, login} from "../../redux/actions/userActions";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {selectUserError, selectUserLoading} from "../../redux/slices/userSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(login({email, password}));

    if (login.fulfilled.match(resultAction)) {
      sessionStorage.setItem('token', await resultAction.payload);
      dispatch(fetchProfil());
      navigate('/profile');
    }
  };

  return (
    <section className={styles.sign_in_content}>
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.input_wrapper}>
          <label htmlFor="email">Username</label>
          <input type="text" id="email" required onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className={styles.input_wrapper}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className={styles.input_remember}>
          <input type="checkbox" id="remember-me"/>
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className={styles.sign_in_button}>{loading ? 'Signing In...' : 'Sign In'}</button>
        {error && (<div>{error.message}</div>)}
      </form>
    </section>
  );
};

export default LoginForm;
