import classes from "./style.module.scss";
import LogoLove from "../../assets/images/icon-thank-you.svg";

const Thanks = () => {
  return (
    <>
      <div className={classes.container}>
        <img src={LogoLove} alt="" />
        <p className={classes.title}>Thank you!</p>
        <p className={classes.desc}>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </>
  );
};

export default Thanks;
