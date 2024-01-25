import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import classes from './style.module.scss';
import Card from '@components/Card';

import { SelectProfile, SelectProfilePost } from './selectors';

import Button from '@components/Button';

import profileImage from '../../assets/images/profile.jpg';

import { getFetchProfile, getFetchMyPost } from './actions';
import { createStructuredSelector } from 'reselect';

const Profile = ({ profile, post }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [viewPost, setViewPost] = useState([]);

  useEffect(() => {
    dispatch(getFetchProfile());
    dispatch(getFetchMyPost());
  }, [dispatch]);

  useEffect(() => {
    setData(profile);
    setViewPost(post);
  }, [post]);

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <FormattedMessage id="profile_text_title" />
      </div>
      <div className={classes.profile}>
        <div className={classes.card}>
          <img className={classes.cardProfile} src={profileImage} alt="" />
          <div className={classes.cardName}>{data.profile?.fullname}</div>
          <div className={classes.cardEmail}>{data.profile?.email}</div>
        </div>
      </div>
      <div onClick={() => navigate("/create")} className={classes.addNew}>
        <Button text={<FormattedMessage id="button_text_add" />} />
      </div>
      {!viewPost?.length > 0 ? (
        <div className={classes.noContent}>
          <FormattedMessage id="text_no_data" />
        </div>
      ) : (
        <div className={classes.content}>
          {viewPost.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  profile: SelectProfile,
  post: SelectProfilePost,
});

export default connect(mapStateToProps)(Profile);
