import { useEffect, useState } from 'react';

import classes from './style.module.scss';
import bookmarke from '../../assets/icons/bookmark.svg';
import convertDate from '@utils/convertDate';
import { useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { addToBookmark, getFetchBookmark, removeToBookmark } from '@pages/Bookmark/actions';
import { selectBookmark } from '@pages/Bookmark/selectors';

import { createStructuredSelector } from 'reselect';

const Card = ({ data, bookmark }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const gotToDetail = () => {
    navigate(`/${data?.id}`);
  };

  const deleteBookmarkHandler = (id) => {
    dispatch(removeToBookmark(String(id), () => dispatch(getFetchBookmark())));
  };

  useEffect(() => {
    fetchFavorites();
  }, [dispatch, bookmark]);


  const fetchFavorites = async () => {
    try {
      const modifiedData = bookmark?.map((item) => {
        return {
          id: item?.idPost,
        };
      });
      const isInFavoritesNow = modifiedData.some((fav) => fav.id === data?.id);
      setIsBookmarked(isInFavoritesNow);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  const handleClick = (id) => {
    dispatch(addToBookmark(String(id), () => dispatch(getFetchBookmark())));
  };

  return (
    <div className={classes.container}>
      <img src={data?.imageUrl} className={classes.image} />
      <div className={classes.containerCircle} onClick={isBookmarked ? () => deleteBookmarkHandler(data?.id) : () => handleClick(data?.id)}>
        <div className={isBookmarked ? classes.circleBookActive : classes.circleBook}>
          <img className={classes.bookmark} src={bookmarke} />
        </div>
      </div>
      <div className={classes.content} onClick={gotToDetail}>
        <p className={classes.title}>{data?.title}</p>
        <p className={classes.date}>{`${convertDate(data?.timestamp)}, ${data?.user?.fullname}`}</p>
        <p className={classes.shortdesc}>{data?.shortDesc}</p>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  bookmark: selectBookmark,
});

export default connect(mapStateToProps)(Card);
