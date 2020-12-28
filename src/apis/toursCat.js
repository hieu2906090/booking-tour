import axios from "axios";

const baseUrl = "http://localhost:3001";

export const createTourCatFromRaw = async (tourCat) => {
  return axios
    .post(baseUrl + "/tour-cats", tourCat)
    .then(() => {
      tourCat.isError = false;
      return { isError: false };
    })
    .catch((err) => {
      tourCat.isError = true;
      tourCat.errorStr = err;
      return { isError: true, errorStr: err, itemError: tourCat.url };
    });
};

export const getAllTourCat = () => {
  return new Promise((res, rej) => {
    axios
      .get(baseUrl + "/tour-cats")
      .then((data) => {
        res(data.data);
      })
      .catch((err) => {
        rej(err);
      });
  });
};

export const deleteTourCat = (tourCat) => {
  return axios
    .delete(baseUrl + "/tour-cats/" + tourCat.id)
    .then(() => {
      return { isError: false };
    })
    .catch((err) => {
      tourCat.isError = true;
      tourCat.errorStr = err;
      return { isError: true, errorStr: err, itemError: tourCat.url };
    });
};
