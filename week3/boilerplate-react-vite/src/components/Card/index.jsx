import classes from "./style.module.scss";
import example from "../../assets/images/example.jpg";
import bookmark from "../../assets/icons/bookmark.svg";

const Card = () => {
    return (
        <div className={classes.container}>
            <img src={example} className={classes.image} />
            <div className={classes.containerCircle}>
                <div className={classes.circleBook}>
                    <img className={classes.bookmark} src={bookmark} />
                </div>
            </div>
            <div className={classes.content}>
                <p className={classes.title}>Bersemayam di tanah Dewata</p>
                <p className={classes.date}>29 July 2020, Cipto</p>
                <p className={classes.shortdesc}>Liburan di tahun baru 2020
                    keberangkatan saya menuju Pulau
                    Dewata Bali.  Sampai lah saya malam itu
                    di Bali Airport menujukan waktu jam 02.00,
                    dan melanjutkan pejalanan yang menyenangkan..</p>
            </div>
        </div>
    )
}

export default Card;