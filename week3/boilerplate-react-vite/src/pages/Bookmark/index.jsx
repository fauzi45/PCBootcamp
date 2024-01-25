import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { ping } from '@containers/App/actions';

import classes from './style.module.scss';
import Card from '@components/Card';

import { createStructuredSelector } from 'reselect';
import { getFetchBookmark } from './actions';
import { selectBookmark } from './selectors';

const Bookmark = ({ bookmark }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getFetchBookmark());
  }, [dispatch]);

  useEffect(() => {
    setData(bookmark);
  },[bookmark])

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <FormattedMessage id="bookmark_text_title" />
      </div>
      {!bookmark?.length > 0 ? (
        <div className={classes.noContent}>
          <FormattedMessage id="text_no_data" />
        </div>
      ) : (
        <div className={classes.content}>
          {data.map((item) => (
            <Card key={item.id} data={item.postBookmarks} />
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  bookmark: selectBookmark,
});

export default connect(mapStateToProps)(Bookmark);
