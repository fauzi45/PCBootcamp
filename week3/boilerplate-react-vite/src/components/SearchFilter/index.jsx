import classes from "./style.module.scss";
import { FormattedMessage } from 'react-intl';

const SearchFilter = () => {
  return (
    <>
      <input type="text" className={classes.filterInput} placeholder="Find Journey..." />
    </>
  );
};

export default SearchFilter;
