import Button from "../Button";
import classes from "./style.module.scss";
import { useLocation } from "react-router-dom";

const MiniBox = ({ logo, title, onClick, onClickDelete }) => {
  const location = useLocation();
  return (
    <div>
      <div className={classes.container} >
        <img src={logo} onClick={onClick} className={classes.img} />
        <div className={classes.content}>
          <p>{title}</p>
          {location.pathname === "/favorites" ? (<Button onClick={onClickDelete} text={"Remove"}/>) : "" }
        </div>
      </div>
    </div>
  );
};

export default MiniBox;
