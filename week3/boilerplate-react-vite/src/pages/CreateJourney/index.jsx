import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { ping } from '@containers/App/actions';

import classes from './style.module.scss';
import Button from '@components/Button';

const CreateJourney = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <FormattedMessage id="journey_text_title" />
      </div>
      <div className={classes.containercontent}>
        <div className={classes.inputUpload}>
          <Button text={'Upload'} />
        </div>
        <div className={classes.subTitle}>
          <FormattedMessage id="journey_text_title_post" />
        </div>
        <input placeholder="Type Title..." type="text" className={classes.inputTitle} />
        <div className={classes.subTitle}>
          <FormattedMessage id="journey_text_short_desc" />
        </div>
        <textarea className={classes.inputDesc}></textarea>
        <div className={classes.subTitle}>
          <FormattedMessage id="journey_text_desc" />
        </div>
        <ReactQuill
          placeholder="Type Something ..."
          theme="snow"
          className={classes.description}
          value={value}
          onChange={setValue}
        />
        <div className={classes.post}>
          <Button text={<FormattedMessage id="journey_text_post" />} />
        </div>
      </div>
    </div>
  );
};

export default CreateJourney;
