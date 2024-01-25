import { useEffect, useState } from 'react';

import classes from "./style.module.scss";
import bookmarke from "../../assets/icons/bookmark.svg";
import convertDate from "@utils/convertDate";
import { useNavigate } from "react-router-dom";
import { connect,useDispatch } from "react-redux";
import { addToBookmark } from "@pages/Bookmark/actions";
import { selectBookmark } from '@pages/Bookmark/selectors';

import { createStructuredSelector } from 'reselect';

const Card = ({ data, bookmark, isBookmarked }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const gotToDetail = () => {
        navigate(`/${data?.id}`);
    }

    const deleteBookmarkHandler = (id) => {
        dispatch(
          deleteBookmarkRequest(id, () => {
            dispatch(getBookmarkRequest());
          })
        );
      };

    const handleClick = () => {
        dispatch(addToBookmark(String(data?.id)));
    }

    return (
        <div className={classes.container}>
            <img src={data?.imageUrl} className={classes.image} />
            <div className={classes.containerCircle} onClick={isBookmarked ? deleteBookmarkHandler : handleClick}>
                <div className={isBookmarked ? classes.circleBookActive :classes.circleBook}>
                    <img className={classes.bookmark} src={bookmarke} />
                </div>
            </div>
            <div className={classes.content} onClick={gotToDetail}>
                <p className={classes.title}>{data?.title}</p>
                <p className={classes.date}>{`${convertDate(data?.timestamp)}, ${data?.user?.fullname}`}</p>
                <p className={classes.shortdesc}>{data?.shortDesc}</p>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    bookmark: selectBookmark,
  });

export default connect(mapStateToProps)(Card);