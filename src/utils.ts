export const capitalizeFirstLetter = (string: string): string => string.charAt(0).toUpperCase()
  + string.toLowerCase().slice(1);

type F = () => {};

// may come in handy in the future
export const throttle = (callback: void, limit: number): F => {
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
