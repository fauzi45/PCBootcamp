import classes from "./style.module.scss";

const ButtonSearch = ({text, onClick}) => {
    return (
        <>
            <div onClick={onClick} className={classes.button}>{text}</div>
        </>
    )
}

export default ButtonSearch;