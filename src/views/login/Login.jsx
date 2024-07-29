import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserError, selectUserStatus} from "../../redux/slices/userSlice";
import {fetchProfil, loadTokenAndFetchProfil} from "../../redux/actions/userActions";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector(selectUserStatus);
  const error = useSelector(selectUserError);

  useEffect(() => {
    dispatch(loadTokenAndFetchProfil());
    dispatch(fetchProfil());
  }, [dispatch]);

  return (
    <>
      <LoginForm />
      {userStatus === 'failed' && <p>Error: {error}</p>}
    </>
  );
};

export default Login;
