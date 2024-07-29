import React, {useEffect, useState} from 'react';
import styles from './ProfileForm.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserProfil} from "../../redux/slices/userSlice";
import {fetchProfil, updateUserProfile} from "../../redux/actions/userActions";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector(selectUserProfil);

  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState(userProfile?.firstName);
  const [lastName, setLastName] = useState(userProfile?.lastName);

  useEffect(() => {
    if (userProfile) {
      setFirstName(userProfile.firstName);
      setLastName(userProfile.lastName);
    }
  }, [userProfile]);

  const handleSave = () => {
    dispatch(updateUserProfile({ firstName, lastName }));
    setEditMode(false);

    setTimeout(() => {
      dispatch(fetchProfil());
    }, 200);
  };

  const handleCancel = () => {
    if (userProfile) {
      setFirstName(userProfile.firstName);
      setLastName(userProfile.lastName);
    }
    setEditMode(false);
  };

  return (
    <div className={styles.ProfileForm}>
      {editMode ? (
        <div className={styles.ProfileFormContent}>
          <div className={styles.ProfileFormInput}>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </div>
          <div className={styles.ProfileFormButton}>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      ) : (
        <div>
          {userProfile && (<button onClick={() => setEditMode(true)} className="edit-button">Edit Name</button>)}
        </div>
      )}
    </div>
  );
};

export default ProfileForm;
