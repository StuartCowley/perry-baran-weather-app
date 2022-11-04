exports.calcMean = (array, param, decimals = 1) => {
  return (
    array.reduce((prev, curr) => {
      return prev + curr[param];
    }, 0) / array.length
  ).toFixed(decimals);
};

exports.calcMax = (array, param, decimals = 1) => {
  const values = array.map((item) => {
    return item[param];
  });
  return Math.max(...values).toFixed(decimals);
};

exports.calcMin = (array, param, decimals = 1) => {
  const values = array.map((item) => {
    return item[param];
  });
  return Math.min(...values).toFixed(decimals);
};
