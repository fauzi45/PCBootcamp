import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
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
  },[])

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
                <p className={classes.contentTitle}>{personalInfo.plan} ({personalInfo.categoryRedux})</p>
                <Link onClick={() => dispatch(setStep(2))} className={classes.contentChange}>Change</Link>
              </div>
              <p className={classes.cost}>${personalInfo.planValue}/mo</p>
            </div>
            <div className={classes.garis} />
            <div className={classes.contentRow}>
              <div className={classes.topContentLeft}>
                <p className={classes.contentChange}>Online Services</p>
              </div>
              <p className={classes.costBot}>+$1/mo</p>
            </div>
            <div className={classes.contentRow}>
              <div className={classes.topContentLeft}>
                <p className={classes.contentChange}>Larger Storage</p>
              </div>
              <p className={classes.costBot}>+$2/mo</p>
            </div>
          </div>
          <div className={classes.TotalCost}>
            <p className={classes.totalText}>Total (per {personalInfo.categoryRedux})</p>
            <p className={classes.totalCostNumber}>+${total}/mo</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
