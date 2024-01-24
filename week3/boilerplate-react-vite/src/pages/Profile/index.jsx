import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { ping } from '@containers/App/actions';

import classes from './style.module.scss';
import Card from '@components/Card';

import profile from '../../assets/images/profile.jpg';
import Button from '@components/Button';

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <FormattedMessage id="profile_text_title" />
      </div>
      <div className={classes.profile}>
        <div className={classes.card}>
          <img className={classes.cardProfile} src={profile} alt="" />
          <div className={classes.cardName}>Fauzi</div>
          <div className={classes.cardEmail}>fauzi45fajar@gmail.com</div>
        </div>
      </div>
      <div className={classes.addNew}>
        <Button text={<FormattedMessage id="button_text_add" />} />
      </div>
      <div className={classes.content}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Profile;
