export const reCreateOrderSttWhenSortEnd = (arr) => {
  let countIncre = 1;
  arr.forEach((element) => {
    element.stt = countIncre;
    countIncre += 1;
  });
  return arr;
};
