import { useDispatch, useSelector } from "react-redux";
import { setProfileDispatch } from "../../pages/Home/action";
import { useState, useEffect } from "react";

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
        backgroundColor:
          theme.palette.mode === "dark"
            ? "hsl(213, 96%, 18%)"
            : "hsl(213, 96%, 18%)",
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
  const personalInfoRedux = useSelector((state) => state.homeReducer.profile);

  const [personalInfo, setPersonalInfo] = useState({
    name: personalInfoRedux.name,
    email: personalInfoRedux.email,
    phoneNumber: personalInfoRedux.phoneNumber,
    plan: personalInfoRedux.plan,
    planValue: personalInfoRedux.planValue,
    categoryRedux: personalInfoRedux.categoryRedux,
    addOns: personalInfoRedux.addOns,
  });
  const [category, setCategory] = useState("monthly");

  const dispatch = useDispatch();

  function changeSelection(id) {
    if (id === 0) {
      setPersonalInfo({
        ...personalInfoRedux,
        plan: "Arcade",
        planValue: category === "monthly" ? 9 : 90,
        categoryRedux: category === "monthly" ? "monthly" : "yearly",
      });
    } else if (id === 1) {
      setPersonalInfo({
        ...personalInfoRedux,
        plan: "Advanced",
        planValue: category === "monthly" ? 12 : 120,
        categoryRedux: category === "monthly" ? "monthly" : "yearly",
      });
    } else if (id === 2) {
      setPersonalInfo({
        ...personalInfoRedux,
        plan: "Pro",
        planValue: category === "monthly" ? 15 : 150,
        categoryRedux: category === "monthly" ? "monthly" : "yearly",
      });
    }
  }

  function switchCategory(isYearly) {
    if (category === "monthly") {
      setPersonalInfo({
        ...personalInfoRedux,
        plan: "",
        planValue: "",
        addOns: [],
      });
      setCategory("yearly");
    } else {
      setPersonalInfo({
        ...personalInfoRedux,
        plan: "",
        planValue: "",
        addOns: [],
      });
      setCategory("monthly");
    }
  }

  useEffect(() => {
    if (personalInfoRedux.categoryRedux) {
      setCategory(personalInfoRedux.categoryRedux);
    }else{
      setCategory("monthly");
    }
  }, []);

  useEffect(() => {
    dispatch(setProfileDispatch(personalInfo));
  }, [personalInfo]);

  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.title}>Select Your Plan</h2>
        <h5 className={classes.desc}>
          You have the option of monthly or yearly billing.
        </h5>
        <div className={classes.content}>
          <div className={classes.containercard}>
            <div
              className={
                classes.card +
                " " +
                (personalInfo.plan === "Arcade" ? classes.selected : "")
              }
              onClick={() => changeSelection(0)}
            >
              <img src={arcade} />
              <div className={classes.cardContent}>
                <p className={classes.cardTitle}>Arcade</p>
                {category === "monthly" ? (
                  <p className={classes.cardCost}>$9/mo</p>
                ) : (
                  <div>
                    <p className={classes.cardCost}>$90/yr</p>
                    <p className={classes.cardFree}>2 months free</p>
                  </div>
                )}
              </div>
            </div>
            <div
              className={
                classes.card +
                " " +
                (personalInfo.plan === "Advanced" ? classes.selected : "")
              }
              onClick={() => changeSelection(1)}
            >
              <img src={advanced} />
              <div className={classes.cardContent}>
                <p className={classes.cardTitle}>Advanced</p>
                {category === "monthly" ? (
                  <p className={classes.cardCost}>$12/mo</p>
                ) : (
                  <div>
                    <p className={classes.cardCost}>$120/yr</p>
                    <p className={classes.cardFree}>2 months free</p>
                  </div>
                )}
              </div>
            </div>
            <div
              className={
                classes.card +
                " " +
                (personalInfo.plan === "Pro" ? classes.selected : "")
              }
              onClick={() => changeSelection(2)}
            >
              <img src={pro} />
              <div className={classes.cardContent}>
                <p className={classes.cardTitle}>Pro</p>
                {category === "monthly" ? (
                  <p className={classes.cardCost}>$15/mo</p>
                ) : (
                  <div>
                    <p className={classes.cardCost}>$150/yr</p>
                    <p className={classes.cardFree}>2 months free</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={classes.switch}>
            <p className={category === "monthly" ? classes.switchActive : null}>
              Monthly
            </p>
            <AntSwitch
              checked={category === "yearly"}
              inputProps={{ "aria-label": "ant design" }}
              onChange={(e) => switchCategory(e.target.checked)}
            />
            <p className={category === "yearly" ? classes.switchActive : null}>
              Yearly
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
