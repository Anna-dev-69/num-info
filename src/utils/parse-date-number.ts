const parseDateNumber = (num: number) => {
  const str = num.toString().padStart(4, "0");

  const month = parseInt(str.slice(0, 2), 10);
  const day = parseInt(str.slice(2), 10);

  return { month, day };
};

export default parseDateNumber;
