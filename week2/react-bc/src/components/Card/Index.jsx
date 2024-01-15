import classes from "./style.module.scss";

const Card = ({ text }) => {
  return (
  <div className={classes.container}>{text || "00"}</div>
  );
};

export default Card;
