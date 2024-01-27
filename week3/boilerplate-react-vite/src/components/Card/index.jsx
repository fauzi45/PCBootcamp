import { useEffect, useState } from 'react';

import classes from './style.module.scss';
import bookmarke from '../../assets/icons/bookmark.svg';
import convertDate from '@utils/convertDate';
import { useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { addToBookmark, getFetchBookmark, removeToBookmark } from '@pages/Bookmark/actions';
import { selectBookmark } from '@pages/Bookmark/selectors';

import { createStructuredSelector } from 'reselect';
import { selectLogin, selectToken } from '@containers/Client/selectors';
import { SelectProfile } from '@pages/Profile/selectors';

const Card = ({ data, bookmark, token, profile, isLogin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const gotToDetail = () => {
    navigate(`/${data?.id}`);
  };

  const deleteBookmarkHandler = () => {
    dispatch(removeToBookmark(String(data?.id), () => dispatch(getFetchBookmark())));
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

  const handleClick = () => {
    dispatch(addToBookmark(String(data?.id), () => dispatch(getFetchBookmark())));
  };

  return (
    <div className={classes.container}>
      <img src={data?.imageUrl} className={classes.image} />
      {isLogin ? isBookmarked ?
        <div className={classes.containerCircle} onClick={deleteBookmarkHandler}>
          <div className={classes.circleBookActive}>
            <img className={classes.bookmark} src={bookmarke} />
          </div>
        </div> : <div className={classes.containerCircle} onClick={handleClick}>
          <div className={classes.circleBook}>
            <img className={classes.bookmark} src={bookmarke} />
          </div>
        </div> : ""}

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
  token: selectToken,
  profile: SelectProfile,
  isLogin: selectLogin
});

export default connect(mapStateToProps)(Card);
