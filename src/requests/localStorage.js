exports.getLocalStorage = (name) => {
  const item = localStorage.getItem(name);
  if (!item) {
    return undefined;
  }
  return JSON.parse(item);
};

exports.populateLocalStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};
