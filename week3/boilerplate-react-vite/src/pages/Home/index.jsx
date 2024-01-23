import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { ping } from '@containers/App/actions';

import logo from '../../assets/images/phuket.png';

import classes from './style.module.scss';
import Jumbotron from '@components/Jumbotron';
import SearchFilter from '@components/SearchFilter';

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
        <SearchFilter />
      </div>
    </div>
  );
};

export default Home;
