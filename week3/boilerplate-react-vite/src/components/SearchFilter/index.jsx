import classes from "./style.module.scss";

const SearchFilter = () => {
  return (
    <div>
      <input type="text" className={classes.filterInput} placeholder="Find Journey..." />
    </div>
  );
};

export default SearchFilter;
