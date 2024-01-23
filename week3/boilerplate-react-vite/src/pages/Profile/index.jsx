import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { ping } from '@containers/App/actions';

import classes from './style.module.scss';
import Jumbotron from '@components/Jumbotron';
import SearchFilter from '@components/SearchFilter';
import Button from '@components/Button';
import Card from '@components/Card';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <Jumbotron />
      <div className={classes.title}>
        <FormattedMessage id="home_text_title" />
      </div>
      <div className={classes.filter}>
        <SearchFilter placeholder={<FormattedMessage id="home_text_button" />} />
        <Button text={<FormattedMessage id="home_text_button" />} />
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

export default Home;
