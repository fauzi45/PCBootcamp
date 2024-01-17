import { useLocation } from "react-router-dom";

import Button from "../Button";
import Ingredients from "../Ingredients";
import classes from "./style.module.scss";
const Content = ({ onClick, addFav, title, gambar, desc, ing1, desc1, ing2, desc2, ing3, desc3, ing4, desc4 }) => {
  const location = useLocation();

  return (
    <div className={classes.BoxContainer}>
      <div className={classes.container}>
        <div className={classes.containerContent}>
          <p className={classes.title}>{title}</p>
          <img className={classes.gambarContent} src={gambar} />
          <div className={classes.desc}>
            {desc}
          </div>
          <p className={classes.ing}>Ingredients</p>
          <div className={classes.containerIng}>
            <Ingredients title={ing1} desc={desc1} />
            <Ingredients title={ing2} desc={desc2} />
            <Ingredients title={ing3} desc={desc3} />
            <Ingredients title={ing4} desc={desc4} />
          </div>
          <div className={classes.boxButton}>
            {location.pathname === "/detail/" ? "" : (<Button onClick={onClick} text={"Detail"} />)}
            <Button onClick={addFav} text={"Add to favorites"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
