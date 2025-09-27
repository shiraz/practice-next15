import { useRef } from 'react';

import classes from './profile-form.module.css';

function ProfileForm({ onChangePwd }) {
  const oldPwdRef = useRef();
  const newPwdRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredOldPwd = oldPwdRef.current.value;
    const enteredNewPwd = newPwdRef.current.value;

    onChangePwd({
      oldPassword: enteredOldPwd,
      newPassword: enteredNewPwd,
    });
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPwdRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" ref={oldPwdRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
