import { firestore as db } from "./firebase/firebase";

const toursRef = db.collection("tours");
const tableConfigRef = db.collection("table-configs");

// ------------------------------- TOUR CAT ----------------------------
export const getAllTours = () => {
  let tours = [];
  return new Promise((res, rej) => {
    toursRef
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            tours.push({ ...doc.data() });
          });
        }
        res(tours);
      })
      .catch((err) => {
        rej(err);
      });
  });
};

export const countTours = () => {
  let count = 0;
  return new Promise((res, rej) => {
    toursRef
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          querySnapshot.forEach(() => {
            count += 1;
          });
        }
        res(count);
      })
      .catch((err) => {
        rej(err);
      });
  });
};

export const createTour = (tour) => {
  console.log(tour);
  return new Promise((res, rej) => {
    toursRef
      .doc(tour.tourId)
      .set(tour)
      .then(function (docRef) {
        console.log("Document written with ID: ", tour.tourId);
        res(tour.tourId);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
        rej(error);
      });
  });
};

export const editTour = (newTour) => {
  return new Promise((res, rej) => {
    toursRef
      .doc(newTour.tourId)
      .set(newTour)
      .then(function () {
        console.log("Document successfully written!");
        res("Ok");
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
        rej(error);
      });
  });
};

export const deleteTour = (tourId) => {
  return new Promise((res, rej) => {
    toursRef
      .doc(tourId)
      .delete()
      .then((data) => res(data))
      .catch((err) => rej(err));
  });
};

// ------------------------------- TOUR CAT CONFIG ----------------------------
export const createTourConfig = (tourConfig) => {
  return new Promise((res, rej) => {
    tableConfigRef
      .doc("tour-config")
      .set(tourConfig)
      .then(function () {
        console.log("Document successfully written!");
        res("Ok");
      })
      .catch(function (error) {
        rej(error);
      });
  });
};

export const getTourConfig = () => {
  return new Promise((res, rej) => {
    tableConfigRef
      .doc("tour-config")
      .get()
      .then((doc) => {
        if (doc.exists) {
          res(doc.data());
        }
      })
      .catch((err) => {
        rej(err);
      });
  });
};
