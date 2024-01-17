import classes from "./style.module.scss";

const MiniBox = ({ logo, title, onClick }) => {
  return (
    <div>
      <div className={classes.container} onClick={onClick}>
        <img src={logo} className={classes.img} />
        <div className={classes.content}>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default MiniBox;
