import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


import classes from './style.module.scss';
import Button from '@components/Button';
import { setNewJourney } from './actions';
import { useNavigate } from 'react-router-dom';

const CreateJourney = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    imageUrl: null,
    shortDesc: '',
    description: '',
  });
  const dispatch = useDispatch();

  const submitData = () => {
    const formDataSend = new FormData();
    formDataSend.append('imageUrl', formData.imageUrl);
    formDataSend.append('title', formData.title);
    formDataSend.append('shortDesc', formData.shortDesc);
    formDataSend.append('description', formData.description);

    dispatch(
      setNewJourney(formDataSend, () => {
        navigate("/profile");
      })
    );
  };
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <FormattedMessage id="journey_text_title" />
      </div>
      <div className={classes.containercontent}>
        <div className={classes.inputUpload}>
          <input type="file" onChange={(e) => setFormData((data) => ({ ...data, imageUrl: e.target.files[0] }))} />
          <Button text={'Upload'} />
        </div>
        <div className={classes.subTitle}>
          <FormattedMessage id="journey_text_title_post" />
        </div>
        <input
          placeholder="Type Title..."
          type="text"
          className={classes.inputTitle}
          value={formData.title}
          onChange={(e) => setFormData((data) => ({ ...data, title: e.target.value }))}
        />
        <div className={classes.subTitle}>
          <FormattedMessage id="journey_text_short_desc" />
        </div>
        <textarea
          className={classes.inputDesc}
          value={formData.shortDesc}
          onChange={(e) => setFormData((data) => ({ ...data, shortDesc: e.target.value }))}
        ></textarea>
        <div className={classes.subTitle}>
          <FormattedMessage id="journey_text_desc" />
        </div>
        <ReactQuill
          placeholder="Type Something ..."
          theme="snow"
          value={formData.description}
          className={classes.description}
          onChange={(e) => setFormData((data) => ({ ...data, description: e }))}
        />
        <div className={classes.post}>
          <Button onClick={submitData} text={<FormattedMessage id="journey_text_post" />} />
        </div>
      </div>
    </div>
  );
};


export default CreateJourney;
