import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./style.module.scss";

const Logo = () => {
  return (
    <Typography variant="h3" gutterBottom>
      <Link className={classes.Link} to={"/"}>Password Manager</Link>
    </Typography>
  );
};

export default Logo;
