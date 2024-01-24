import classes from "./style.module.scss";
import bookmark from "../../assets/icons/bookmark.svg";
import convertDate from "@utils/convertDate";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
    const navigate = useNavigate();

    const gotToDetail = () => {
        navigate(`/${data?.id}`);
    }

    const handleClick = () => {
        console.log("test")
    }

    return (
        <div className={classes.container}>
            <img src={data?.imageUrl} className={classes.image} />
            <div className={classes.containerCircle} onClick={handleClick}>
                <div className={classes.circleBook}>
                    <img className={classes.bookmark} src={bookmark} />
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

export default Card;