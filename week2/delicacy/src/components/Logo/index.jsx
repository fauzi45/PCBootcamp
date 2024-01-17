import classes from "./style.module.scss";

const Logo = ({onClick}) => {
    return(
        <div onClick={onClick} className={classes.container}>
            Delicacy
        </div>
    )
}

export default Logo;