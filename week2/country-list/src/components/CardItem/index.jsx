import classes from "./style.module.scss";

const CardItem = ({name, flags, population, region, capital , onClick}) => {
  return (
    <div className={classes.box} onClick={onClick}>
      <img className={classes.image} src={flags} />
      <div className={classes.boxContent}>
        <h2 className={classes.title}>{name}</h2>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CardItem;
