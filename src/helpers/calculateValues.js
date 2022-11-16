const calcMean = (array, param, decimals = 1) => {
  return (
    array.reduce((prev, curr) => {
      return prev + curr[param];
    }, 0) / array.length
  ).toFixed(decimals);
};

const calcMax = (array, param, decimals = 1) => {
  const values = array.map((item) => {
    return item[param];
  });
  return Math.max(...values).toFixed(decimals);
};

const calcMin = (array, param, decimals = 1) => {
  const values = array.map((item) => {
    return item[param];
  });
  return Math.min(...values).toFixed(decimals);
};

export { calcMean, calcMax, calcMin };
