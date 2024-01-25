import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage, useIntl } from 'react-intl';

import PropTypes from 'prop-types';

import classes from './style.module.scss';
import Jumbotron from '@components/Jumbotron';
import SearchFilter from '@components/SearchFilter';
import Card from '@components/Card';
import ButtonSearch from '@components/ButtonSearch';

import { setLogin, setToken } from '@containers/Client/actions';
import { selectJourney } from './selectors';
import { createStructuredSelector } from 'reselect';
import { getFetchJourney } from './actions';
import { selectBookmark } from '@pages/Bookmark/selectors';

const Home = ({ journey, bookmark }) => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const logout = () => {
    dispatch(setLogin(false));
    dispatch(setToken(null));
  };

  useEffect(() => {
    dispatch(getFetchJourney());
  }, [dispatch]);

  useEffect(() => {
    setData(journey);
  }, [journey]);

  const applyFilter = () => {
    if (search != '') {
      setData(journey.filter((e) => e.title.toLowerCase().indexOf(search.toLowerCase()) !== -1));
    } else {
      setData(journey);
    }
  };

  const handleSearch = () => {
    applyFilter();
  };

  return (
    <div className={classes.container}>
      <Jumbotron />
      <ButtonSearch onClick={logout} text={'Logout'} />
      <div className={classes.title}>
        <FormattedMessage id="home_text_title" />
      </div>
      <div className={classes.filter}>
        <SearchFilter
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder={intl.formatMessage({ id: 'home_text_filter_placeholder' })}
        />
        <ButtonSearch onClick={handleSearch} text={<FormattedMessage id="home_text_button" />} />
      </div>
      {!data?.length > 0 ? (
        <div className={classes.noContent}>
          <FormattedMessage id="text_no_data" />
          {console.log(bookmark)}
        </div>
      ) : (
        <div className={classes.content}>
          {data.map((item) => {
            return <Card data={item} key={item.id} />;
          })}
        </div>
      )}
    </div>
  );
};

Home.propTypes = {
  journey: PropTypes.array,
  token: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  journey: selectJourney,
  bookmark: selectBookmark,
  token: (state) => state.client.token,
});

export default connect(mapStateToProps)(Home);
