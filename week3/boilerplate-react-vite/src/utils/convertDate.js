const convertDate = (date) => {
  try {
    return new Date(date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch (error) {
    return '';
  }
};

export default convertDate;