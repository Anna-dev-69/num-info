const getApiUrl = (
  num: string | number,
  group: number,
  month?: number,
  day?: number
) => {
  switch (group) {
    case 1:
      return `/${num}/math`;
    case 2:
      return `/${num}`;
    case 3:
      return `/${month}/${day}/date`;
  }
};

export default getApiUrl;
