import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setStep, setProfileDispatch } from "./action";

import toast, { Toaster } from "react-hot-toast";

import AddOn from "../../components/AddOn";
import Button from "../../components/Button";
import InfoPersonal from "../../components/InfoPersonal";
import Plan from "../../components/Plan";
import Summary from "../../components/Summary";
import Thanks from "../../components/Thanks";

import classes from "./style.module.scss";

const Home = () => {
  const dispatch = useDispatch();

  const currentStep = useSelector((state) => state.homeReducer.step);
  const personalInfoRedux = useSelector((state) => state.homeReducer.profile);

  const stepHanlder = () => {
    if (currentStep === 5) {
      dispatch(setStep(1));
    } else {
      dispatch(setStep(currentStep + 1));
    }
  };

  const stepHandlerBack = () => {
    dispatch(setStep(currentStep - 1));
  };

  const stepHandlerStart = () => {
    dispatch(
      setProfileDispatch({
        name: "",
        email: "",
        phoneNumber: "",
        plan: "",
        categoryRedux: "",
        planValue: "",
        addOns: [],
      })
    );
    dispatch(setStep(1));
  };

  const renderComponent = () => {
    switch (currentStep) {
      case 1:
        return <InfoPersonal />;
      case 2:
        return <Plan />;
      case 3:
        return <AddOn />;
      case 4:
        return <Summary />;
      case 5:
        return <Thanks />;
      default:
        return <InfoPersonal />;
        break;
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const ValidateForm = () => {
    if (!personalInfoRedux.name) {
      toast.error("Data nama masih kosong.");
    } else if (!personalInfoRedux.email) {
      toast.error("Data email masih kosong");
    } else if (!isValidEmail(personalInfoRedux.email)) {
      toast.error("Data email invalid");
    } else if (!personalInfoRedux.phoneNumber) {
      toast.error("Data Nomor Telepon masih kosong.");
    } else if (currentStep === 2) {
      if (!personalInfoRedux.plan) {
        toast.error("Data Plan masih kosong, silahkan isi");
      }
      else{
        stepHanlder();
      }
    } else {
      stepHanlder();
    }
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.atas}>
          <div className={classes.containerStepAtas}>
            <div className={classes.step}>
              <div
                className={
                  currentStep === 1 ? classes.circleActive : classes.circleTop
                }
              >
                1
              </div>
            </div>
            <div className={classes.step}>
              <div
                className={
                  currentStep === 2 ? classes.circleActive : classes.circleTop
                }
              >
                2
              </div>
            </div>
            <div className={classes.step}>
              <div
                className={
                  currentStep === 3 ? classes.circleActive : classes.circleTop
                }
              >
                3
              </div>
            </div>
            <div className={classes.step}>
              <div
                className={
                  currentStep === 4 ? classes.circleActive : classes.circleTop
                }
              >
                4
              </div>
            </div>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.kiri}>
            <div className={classes.containerStep}>
              <div className={classes.step}>
                <div
                  className={
                    currentStep === 1 ? classes.circleActive : classes.circle
                  }
                >
                  1
                </div>
                <div className={classes.content}>
                  <p className={classes.title}>STEP 1</p>
                  <p className={classes.desc}>YOUR INFO</p>
                </div>
              </div>
              <div className={classes.step}>
                <div
                  className={
                    currentStep === 2 ? classes.circleActive : classes.circle
                  }
                >
                  2
                </div>
                <div className={classes.content}>
                  <p className={classes.title}>STEP 2</p>
                  <p className={classes.desc}>SELECT PLAN</p>
                </div>
              </div>
              <div className={classes.step}>
                <div
                  className={
                    currentStep === 3 ? classes.circleActive : classes.circle
                  }
                >
                  3
                </div>
                <div className={classes.content}>
                  <p className={classes.title}>STEP 3</p>
                  <p className={classes.desc}>ADD-ONS</p>
                </div>
              </div>
              <div className={classes.step}>
                <div
                  className={
                    currentStep === 4 ? classes.circleActive : classes.circle
                  }
                >
                  4
                </div>
                <div className={classes.content}>
                  <p className={classes.title}>STEP 4</p>
                  <p className={classes.desc}>SUMMARY</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.kanan}>
            <div className={classes.containerContent}>{renderComponent()}</div>
            {currentStep === 5 ? (
              
              <div className={classes.backButton} onClick={stepHandlerStart}>
                Go Back
              </div>
            ) : (
              <div className={classes.action}>
                {currentStep === 1 ? (
                  <div
                    style={{ visibility: "hidden" }}
                    className={classes.backButton}
                    onClick={stepHandlerBack}
                  >
                    Go Back
                  </div>
                ) : (
                  <div className={classes.backButton} onClick={stepHandlerBack}>
                    Go Back
                  </div>
                )}

                {currentStep === 4 ? (
                  <Button onClick={stepHanlder} text={"Confirm"} />
                ) : (
                  <Button onClick={ValidateForm} text={"Next Step"} />
                )}
              </div>
            )}
          </div>
        </div>
        {currentStep === 5 ? (
          ""
        ) : (
          <div className={classes.footer}>
            {currentStep === 1 ? (
              <div
                style={{ visibility: "hidden" }}
                className={classes.backButton}
                onClick={stepHandlerBack}
              >
                Go Back
              </div>
            ) : (
              <div className={classes.backButton} onClick={stepHandlerBack}>
                Go Back
              </div>
            )}
            {currentStep === 4 ? (
              <Button onClick={stepHanlder} text={"Confirm"} />
            ) : (
              <Button
                onClick={() => {
                  ValidateForm();
                }}
                text={"Next Step"}
              />
            )}
          </div>
        )}
        <Toaster />
      </div>
    </>
  );
};

export default Home;
