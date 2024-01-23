import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setProfileDispatch } from "../../pages/Home/action";
import { useState, useEffect } from "react";
import { setStep } from "../../pages/Home/action";

import classes from "./style.module.scss";

const Summary = () => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const personalInfoRedux = useSelector((state) => state.homeReducer.profile);

  const [personalInfo, setPersonalInfo] = useState({
    name: personalInfoRedux.name,
    email: personalInfoRedux.email,
    phoneNumber: personalInfoRedux.phoneNumber,
    plan: personalInfoRedux.plan,
    planValue: personalInfoRedux.planValue,
    categoryRedux: personalInfoRedux.categoryRedux,
    addOns: personalInfoRedux.addOns || [],
  });

  useEffect(() => {
    setTotal(personalInfo.planValue);
  }, []);

  useEffect(() => {
    const newTotalCost = personalInfo.addOns.reduce((total, addOn) => {
      return total + parseFloat(addOn.cost.replace(/[^\d.-]/g, ""));
    }, 0);

    setTotal(newTotalCost + personalInfo.planValue);
    dispatch(setProfileDispatch(personalInfo));
  }, [personalInfo, dispatch]);

  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.title}>Finishing up</h2>
        <h5 className={classes.desc}>
          Double-check everything looks OK before confirming.
        </h5>
        <div className={classes.content}>
          <div className={classes.wrapper}>
            <div className={classes.contentRow}>
              <div className={classes.topContentLeft}>
                <p className={classes.contentTitle}>
                  {personalInfo.plan} ({personalInfo.categoryRedux})
                </p>
                <Link
                  onClick={() => dispatch(setStep(2))}
                  className={classes.contentChange}
                >
                  Change
                </Link>
              </div>
              <p className={classes.cost}>
                ${personalInfo.planValue}/
                {personalInfo.categoryRedux === "monthly" ? "mo" : "yr"}
              </p>
            </div>
            <div className={classes.garis} />
            
            { personalInfo.addOns.length > 0 ?
            personalInfo.addOns.map((addon, index) => {
              return (
                <div key={index} className={classes.contentRow}>
                  <div className={classes.topContentLeft}>
                    <p className={classes.contentChange}>{addon.name}</p>
                  </div>
                  <p className={classes.costBot}>+${addon.cost}/{personalInfo.categoryRedux === "monthly" ? "mo" : "yr"}</p>
                </div>
              );
            })
            :
            <p className={classes.nodata}>No add-ons</p>
          }
          </div>
          <div className={classes.TotalCost}>
            <p className={classes.totalText}>
              Total (per {personalInfo.categoryRedux})
            </p>
            <p className={classes.totalCostNumber}>
              +${total}/{personalInfo.categoryRedux === "monthly" ? "mo" : "yr"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
