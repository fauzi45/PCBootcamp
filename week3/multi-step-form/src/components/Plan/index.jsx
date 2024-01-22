import classes from "./style.module.scss";
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";

import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "hsl(213, 96%, 18%)" : "hsl(213, 96%, 18%)",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "hsl(213, 96%, 18%)"
        : "hsl(213, 96%, 18%)",
    boxSizing: "border-box",
  },
}));

const Plan = () => {
  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.title}>Select Your Plan</h2>
        <h5 className={classes.desc}>
          You have the option of monthly or yearly billing.
        </h5>
        <div className={classes.content}>
          <div className={classes.containercard}>
            <div className={classes.card}>
              <img src={arcade} />
              <div className={classes.cardContent}>
                <p className={classes.cardTitle}>Arcade</p>
                <p className={classes.cardCost}>$9/mo</p>
              </div>
            </div>
            <div className={classes.card}>
              <img src={advanced} />
              <div className={classes.cardContent}>
                <p className={classes.cardTitle}>Advanced</p>
                <p className={classes.cardCost}>$12/mo</p>
              </div>
            </div>
            <div className={classes.card}>
              <img src={pro} />
              <div className={classes.cardContent}>
                <p className={classes.cardTitle}>Pro</p>
                <p className={classes.cardCost}>$15/mo</p>
              </div>
            </div>
          </div>
          <div className={classes.switch}>
            <p>Monthly</p>
            <AntSwitch
              defaultChecked
              inputProps={{ "aria-label": "ant design" }}
            />
            <p>Yearly</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
