import { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import encryptPayload from '@utils/encryptionHelper';
import classes from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import { doLoginAction } from './actions';

import toast, { Toaster } from 'react-hot-toast';
import { selectToken } from '@containers/Client/selectors';

const Login = ({ token }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = () => {
    if (!email || !password) {
      toast.error('Email and Password cannot be empty');
    } else if (!isValidEmail(email)) {
      toast.error('Invalid email');
    } else {
      const dataUser = {
        email: encryptPayload(email),
        password: encryptPayload(password),
      };
      dispatch(doLoginAction(dataUser));
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  const isValidEmail = (email) => {
    // Basic email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
            <input className={classes.input} type="text" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={classes.group}>
            <p className={classes.text}>
              <FormattedMessage id="register_text_password" />
            </p>
            <input className={classes.input} type="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div onClick={onSubmit} className={classes.button}>
            <FormattedMessage id="navbar_text_login" />
          </div>
          <p onClick={() => navigate('/register')} className={classes.noacc}>Don't have an account? ? Klik Here</p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

Login.prototypes = {
  token: PropTypes.string,
}

const mapStateToProps = createStructuredSelector({
  token: (state) => state.client.token,
});

export default connect(mapStateToProps)(Login);
