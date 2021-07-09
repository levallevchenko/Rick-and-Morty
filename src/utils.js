export const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);

// may come in handy in the future
export const throttle = (callback, limit) => {
  let wait = false;
  return function () {
    if (!wait) {
      callback();
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
    }
  };
};
