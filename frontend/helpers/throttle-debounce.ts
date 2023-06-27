export const debounce = (delay: number, callback: (...args: any[]) => any) => {
  let timeout: ReturnType<typeof setTimeout> = null;

  return function (...args: any[]) {
    clearTimeout(timeout);

    const callbackFunc = callback.bind(this, ...args);

    if (delay === 0) {
      return callbackFunc();
    }

    return new Promise((resolve) => {
      timeout = setTimeout(async () => {
        const response = await callbackFunc();
        timeout = null;
        resolve(response);
      }, delay);
    });
  };
};
