import Content from "../../components/Content";
import MiniBox from "../../components/MiniBox";
import classes from "./style.module.scss";

const Detail = () => {
  return (
    <div className={classes.container}>
      <div className={classes.containerContent}>
        <Content />
      </div>
      <p className={classes.textMore}>More recipies</p>
      <div className={classes.more}>
        <MiniBox />
        <MiniBox />
        <MiniBox />
        <MiniBox />
        <MiniBox />
        <MiniBox />
      </div>
    </div>
  );
};

export default Detail;
