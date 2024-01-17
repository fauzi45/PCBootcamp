import classes from "./style.module.scss";
import logo from "../../assets/icons/olive.svg";
const Ingredients = () => {
  return (
    <div className={classes.container}>
      <div className={classes.kotak}>
        <div className={classes.kotakIn}>
          <img src={logo} />
        </div>
      </div>
      <div className={classes.konten}>
        <div className={classes.title}>Fennel</div>
        <div className={classes.desc}>2 medium</div>
      </div>
    </div>
  );
};

export default Ingredients;
