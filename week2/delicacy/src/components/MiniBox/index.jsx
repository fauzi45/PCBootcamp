import classes from "./style.module.scss";
import piring from "../../assets/images/piring1.png";

const MiniBox = () => {
  return (
    <div className={classes.container}>
      <img src={piring} className={classes.img} />
      <div className={classes.content}>
        <p>Beef Steak</p>
      </div>
    </div>
  );
};

export default MiniBox;
