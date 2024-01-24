import { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import encryptPayload from '@utils/encryptionHelper';
import { ping } from '@containers/App/actions';
import { setLogin } from '@containers/Client/actions';
import classes from './style.module.scss';

const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = () => {
    const dataUser = {
      email: encryptPayload('fauzi@gmail.com'),
      password: encryptPayload('fauzi12345'),
    };
    console.log(dataUser)
    dispatch(setLogin(dataUser));
  };

  return (

    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.containerbox}>
          <div className={classes.title}>
            <FormattedMessage id="navbar_text_login" />
          </div>
          <div className={classes.group}>
            <p className={classes.text}>Email</p>
            <input className={classes.input} type="text" />
          </div>
          <div className={classes.group}>
            <p className={classes.text}>
              <FormattedMessage id="register_text_password" />
            </p>
            <input className={classes.input} type="password" />
          </div>
          <div onClick={onSubmit} className={classes.button}>
            <FormattedMessage id="navbar_text_login" />
          </div>
          <p className={classes.noacc}>Don't have an account? ? Klik Here</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
