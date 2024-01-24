import classes from "./style.module.scss";
import { FormattedMessage } from 'react-intl';

const SearchFilter = ({ placeholder, onChange, value }) => {
  return (
    <>
      <input type="text" className={classes.filterInput} placeholder={placeholder} value={value} onChange={onChange} />
    </>
  );
};

export default SearchFilter;
