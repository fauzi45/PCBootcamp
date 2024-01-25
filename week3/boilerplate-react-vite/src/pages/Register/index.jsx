import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { useNavigate } from 'react-router-dom';

import { setUser } from './actions';
import classes from './style.module.scss';
import encryptPayload from '@utils/encryptionHelper';

import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');

  const onSubmit = () => {
    if (!email || !password || !fullname) {
      toast.error('Email and Password cannot be empty');
    } else if (!isValidEmail(email)) {
      toast.error('Invalid email');
    } else if (fullname.length >= 6) {
      toast.error('Fullname cannot be less than 6 characters');
    }
    else {
      const dataUser = {
        fullname: encryptPayload(fullname),
        email: encryptPayload(email),
        password: encryptPayload(password)
      }
      dispatch(setUser(dataUser, () => {
        toast.success('Register success');
        setFullname('');
        setEmail('');
        setPassword('');
        navigate('/login');
      }));
    }

  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.containerbox}>
          <div className={classes.title}>
            <FormattedMessage id="navbar_text_register" />
          </div>
          <div className={classes.group}>
            <p className={classes.text}><FormattedMessage id="register_text_fullname" /></p>
            <input className={classes.input} onChange={(e) => setFullname(e.target.value)} type="text" />
          </div>
          <div className={classes.group}>
            <p className={classes.text}>Email</p>
            <input className={classes.input} onChange={(e) => setEmail(e.target.value)} type="text" />
          </div>
          <div className={classes.group}>
            <p className={classes.text}><FormattedMessage id="register_text_password" /></p>
            <input className={classes.input} onChange={(e) => setPassword(e.target.value)} type="password" />
          </div>
          <div onClick={onSubmit} className={classes.button}>
            <FormattedMessage id="navbar_text_register" />
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
