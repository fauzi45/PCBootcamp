import classes from "./style.module.scss";
import logo from "../../assets/icons/olive.svg";
const Ingredients = ({title, desc}) => {
  return (
    <div className={classes.container}>
      <div className={classes.kotak}>
        <div className={classes.kotakIn}>
          <img src={logo} />
        </div>
      </div>
      <div className={classes.konten}>
        <div className={classes.title}>{title}</div>
        <div className={classes.desc}>{desc}</div>
      </div>
    </div>
  );
};

export default Ingredients;
