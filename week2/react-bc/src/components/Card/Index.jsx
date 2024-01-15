import classes from "./style.module.scss";

const Card = ({ text }) => {
  return (
    <>
      <div className={classes.container}>
        <h3>{text || "00"}</h3>
        <div className={classes.halfCircleLeft}></div>
        <div className={classes.halfCircleRight}></div>
      </div>
    </>
  );
};

export default Card;
