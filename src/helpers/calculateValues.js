exports.calcMean = (array, field, param, decimals) => {
  return (
    array.reduce((prev, curr) => {
      const obj = curr[field];
      return prev + obj[param];
    }, 0) / array.length
  ).toFixed(decimals);
};

exports.calcMax = (array, field, param, decimals) => {
  const values = array.map((item) => {
    const obj = item[field];
    return obj[param];
  });
  return Math.max(...values).toFixed(decimals);
};

exports.calcMin = (array, field, param, decimals) => {
  const values = array.map((item) => {
    const obj = item[field];
    return obj[param];
  });
  return Math.min(...values).toFixed(decimals);
};
