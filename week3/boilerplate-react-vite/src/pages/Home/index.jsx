import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import PropTypes from 'prop-types';
import { ping } from '@containers/App/actions';

import classes from './style.module.scss';
import Jumbotron from '@components/Jumbotron';
import SearchFilter from '@components/SearchFilter';
import Card from '@components/Card';
import ButtonSearch from '@components/ButtonSearch';
import { setLogin, setToken } from '@containers/Client/actions';
import { selectJourney } from './selectors';
import { createStructuredSelector } from 'reselect';
import { fetchJourney } from '@domain/api';
import { getFetchJourney } from './actions';

const Home = ({ journey }) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setLogin(null));
    dispatch(setToken(null));
  };

  useEffect(() => {
    dispatch(getFetchJourney());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <Jumbotron />
      <ButtonSearch onClick={logout}></ButtonSearch>
      <div className={classes.title}>
        <FormattedMessage id="home_text_title" />
      </div>
      <div className={classes.filter}>
        <SearchFilter placeholder={<FormattedMessage id="home_text_button" />} />
        <ButtonSearch text={<FormattedMessage id="home_text_button" />} />
      </div>
      <div className={classes.content}>
        {console.log(journey)}
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

Home.propTypes = {
  journey: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  journey: selectJourney
});

export default connect(mapStateToProps)(Home);
