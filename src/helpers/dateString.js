const dateString = (dateTime) => {
  return new Date(dateTime * 1000).toDateString();
};

export default dateString;
