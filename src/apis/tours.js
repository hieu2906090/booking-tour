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
            tours.push({ fid: doc.id, ...doc.data() });
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
  return new Promise((res, rej) => {
    toursRef
      .add(tour)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        res(docRef.id);
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
