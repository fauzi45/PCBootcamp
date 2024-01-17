import classes from "./style.module.scss";

const Button = ({text, onClick}) => {
    return(
        <div className={classes.button} onClick={onClick}>
            <p>{text}</p>
        </div>
    )
}

export default Button;