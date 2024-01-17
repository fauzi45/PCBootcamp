import Button from "../Button";
import Ingredients from "../Ingredients";
import classes from "./style.module.scss";
import gambar1 from "../../assets/images/image1.jpg";
const Content = ({onClick}) => {  
  return (
    <div className={classes.BoxContainer}>
      <div className={classes.container}>
        <div className={classes.containerContent}>
          <p className={classes.title}>Baked salmon with fennel & tomatoes</p>
          <img className={classes.gambarContent} src={gambar1} />
          <div className={classes.desc}>
            "Heat oven to 180C/fan 160C/gas 4. Trim the fronds from the fennel
            and set aside. Cut the fennel bulbs in half, then cut each half into
            3 wedges. Cook in boiling salted water for 10 mins, then drain well.
            Chop the fennel fronds roughly, then mix with the parsley and lemon
            zest.\r\n\r\nSpread the drained fennel over a shallow ovenproof
            dish, then add the tomatoes. Drizzle with olive oil, then bake for
            10 mins. Nestle the salmon among the veg, sprinkle with lemon juice,
            then bake 15 mins more until the fish is just cooked. Scatter over
            the parsley and serve."
          </div>
          <p className={classes.ing}>Ingredients</p>
          <div className={classes.containerIng}>
            <Ingredients />
            <Ingredients />
            <Ingredients />
            <Ingredients />
          </div>
          <div className={classes.boxButton}>
            <Button onClick={onClick} text={"Detail"} />
            <Button text={"Add to favorites"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
