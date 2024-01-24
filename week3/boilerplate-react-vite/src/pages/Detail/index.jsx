import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';

import { selectJourneyDetail } from './selectors';

import { useParams } from 'react-router-dom';

import classes from './style.module.scss';
import { getDetail } from './actions';

const Detail = ({ journeyDetail }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id, () => {
      navigate("/notfound");
    }));
  }, []);

  useEffect(() => {
    if (journeyDetail) {
      setData(journeyDetail);
    }
  }, [journeyDetail]);


  return (
    <div className={classes.container}>
      {console.log(journeyDetail)}
      <div className={classes.content}>
        <div className={classes.title}>
          <p className={classes.titlePost}>{data?.title}</p>
          <p className={classes.userPost}>{data.user?.fullname}</p>
        </div>
        <p className={classes.date}>{data?.timestamp}</p>
        <img src={data?.imageUrl} className={classes.image} />
        <p className={classes.desc}>
          <div
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </p>
      </div>
    </div>
  );
};

Detail.propTypes = {
  journeyDetail: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  journeyDetail: selectJourneyDetail
});

export default connect(mapStateToProps)(Detail);
