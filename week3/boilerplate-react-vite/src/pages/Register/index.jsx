import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { ping } from '@containers/App/actions';
import { setUser } from './actions';
import classes from './style.module.scss';
import encryptPayload from '@utils/encryptionHelper';

const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = () => {
    const dataUser = {
      fullname: encryptPayload('ujan'),
      email: encryptPayload('ujan@gmail.com'),
      password: encryptPayload('fauzi12345')
    }
    dispatch(setUser(dataUser))
  }

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.containerbox}>
          <div className={classes.title}>
            <FormattedMessage id="navbar_text_register" />
          </div>
          <div className={classes.group}>
            <p className={classes.text}><FormattedMessage id="register_text_fullname" /></p>
            <input className={classes.input} type="text" />
          </div>
          <div className={classes.group}>
            <p className={classes.text}>Email</p>
            <input className={classes.input} type="text" />
          </div>
          <div className={classes.group}>
            <p className={classes.text}><FormattedMessage id="register_text_password" /></p>
            <input className={classes.input} type="password" />
          </div>
          <div onClick={onSubmit} className={classes.button}>
            <FormattedMessage id="navbar_text_register" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
