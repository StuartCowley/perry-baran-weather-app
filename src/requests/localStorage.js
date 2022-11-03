exports.getLocalStorage = (name) => {
  const item = localStorage.getItem(name);
  return item ? JSON.parse(item) : undefined;
};

exports.populateLocalStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};
