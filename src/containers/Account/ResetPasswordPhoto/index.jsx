import React from 'react';
import { NavLink } from 'react-router-dom';
import ResetPasswordForm from '../../../shared/components/reset_password/ResetPasswordForm';

const ResetPasswordPhoto = (props) => {
  const onSubmit = (item) => {
    console.log(item);
  };

  return (
    <div className="account account--photo">
      <div className="account__wrapper">
        <div className="account__card">
          <div className="account__head">
            <h3 className="account__title">Please enter
              <span className="account__logo"> your
                <span className="account__logo-accent"> email address</span>
              </span>
            </h3>
            <h4 className="account__subhead subhead">And we'll reset your password</h4>
          </div>
          <ResetPasswordForm
            {...props}
            onSubmit={onSubmit}
            form="reset_password_form"
          />
          <div className="account__have-account">
            <p>Remembered your password?  <NavLink to="/log_in_photo">Login here</NavLink></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPhoto;
