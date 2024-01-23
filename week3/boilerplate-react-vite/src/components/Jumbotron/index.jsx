import { FormattedMessage } from 'react-intl';

import classes from './style.module.scss';

const Jumbotron = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.content}>
          <p className={classes.title}>
            <FormattedMessage id="jumbotron_text_title" />
          </p>
          <p className={classes.desc}>
            <FormattedMessage id="jumbotron_text_desc" />
          </p>
        </div>
      </div>
    </div>
  );
};
export default Jumbotron;
