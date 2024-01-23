import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setProfileDispatch } from "../../pages/Home/action";

import classes from "./style.module.scss";

const InfoPersonal = () => {
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

  const dispatch = useDispatch();

  const handleProfileChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(setProfileDispatch(personalInfo));
  }, [personalInfo]);

  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.title}>Personal Info</h2>
        <h5 className={classes.desc}>
          Please Provide your name, email adress, and phone number.
        </h5>
        <div className={classes.content}>
          <div>
            <p className={classes.subtitle}>Name</p>
            <input
              required
              type="text"
              name="name"
              placeholder="e.g Stephen King"
              onChange={handleProfileChange}
              value={personalInfo.name}
            ></input>
          </div>
          <div>
            <p className={classes.subtitle}>Email Address</p>
            <input
              required
              className="input"
              type="email"
              name="email"
              placeholder="e.g stephenking@lorem.com"
              onChange={handleProfileChange}
              value={personalInfo.email}
            ></input>
          </div>
          <div>
            <p className={classes.subtitle}>Phone Number</p>
            <input
              required
              type="number"
              name="phoneNumber"
              placeholder="e.g. +1 234 567 890"
              onChange={handleProfileChange}
              value={personalInfo.phoneNumber}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoPersonal;
