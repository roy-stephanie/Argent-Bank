import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserError, selectUserLoading, selectUserProfil} from "../../redux/slices/userSlice";
import {loadTokenAndFetchProfil} from "../../redux/actions/userActions";
import {useNavigate} from "react-router-dom";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import styles from './Profile.module.css';
import Account from "../../components/account/Account";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectUserLoading);
  const userProfile = useSelector(selectUserProfil);
  const error = useSelector(selectUserError);

  useEffect(() => {
    dispatch(loadTokenAndFetchProfil());
  }, [dispatch]);

  useEffect(() => {
    if (error && !loading) {
      navigate('/login');
    }
  }, [error, loading, navigate]);

  if (loading === undefined && !loading) {
    return <div>Loading</div>
  }

  return (
    <div className={styles.ProfileContainer}>
      <h1>Welcome back</h1>
      <div className={styles.Profile}>
        {loading !== undefined && loading ?
          (<div>Loading...</div>) : (
            <>
              <p>{userProfile && userProfile.firstName !== undefined && userProfile.firstName}</p>
              <p>{userProfile && userProfile.lastName !== undefined && `${userProfile.lastName}!`}</p>
            </>
          )}
      </div>
      <ProfileForm />
      <Account />
    </div>
  );
};

export default Profile;
