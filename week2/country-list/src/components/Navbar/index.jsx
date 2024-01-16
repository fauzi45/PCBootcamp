import classes from "./style.module.scss";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Navbar = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.headerLogo}>Where in the world?</h1>
      <button className={classes.buttonMode}>
        <DarkModeIcon />
        Dark Mode
      </button>
    </div>
  );
};

export default Navbar;