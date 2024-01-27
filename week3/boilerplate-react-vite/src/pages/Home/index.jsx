import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage, useIntl } from 'react-intl';

import PropTypes from 'prop-types';

import classes from './style.module.scss';
import Jumbotron from '@components/Jumbotron';
import SearchFilter from '@components/SearchFilter';
import Card from '@components/Card';
import ButtonSearch from '@components/ButtonSearch';

import { selectJourney } from './selectors';
import { createStructuredSelector } from 'reselect';
import { getFetchJourney } from './actions';
import { selectBookmark } from '@pages/Bookmark/selectors';
import { getFetchBookmark } from '@pages/Bookmark/actions';
import { selectToken } from '@containers/Client/selectors';

const Home = ({ journey, token }) => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getFetchJourney());
    if (token) {
      dispatch(getFetchBookmark());
    }
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
  token: PropTypes.string
};

const mapStateToProps = createStructuredSelector({
  journey: selectJourney,
  token: selectToken,
});

export default connect(mapStateToProps)(Home);
