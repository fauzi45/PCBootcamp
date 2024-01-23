import classes from "./style.module.scss";

const Button = ({text, onClick}) => {
    return (
        <>
            <div onClick={onClick} className={classes.button}>{text}</div>
        </>
    )
}

export default Button;