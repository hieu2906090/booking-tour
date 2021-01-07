import { firestore as db } from "./firebase/firebase";

const tourCatsRef = db.collection("tour-cats");
const toursRef = db.collection("tours");
const tableConfigRef = db.collection("table-configs");

// ------------------------------- TOUR CAT ----------------------------
export const createTourCat = (tourCat) => {
  return new Promise((res, rej) => {
    tourCatsRef
      .add(tourCat)
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

export const editTourCat = (newTourCat) => {
  return new Promise((res, rej) => {
    tourCatsRef
      .doc(newTourCat.fid)
      .set(newTourCat)
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

export const getAllTourCats = () => {
  let tourCats = [];
  return new Promise((res, rej) => {
    tourCatsRef
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            tourCats.push({ fid: doc.id, ...doc.data() });
          });
        }
        res(tourCats);
      })
      .catch((err) => {
        rej(err);
      });
  });
};

export const deleteTourCat = (tourCatId) => {
  console.log("Delete TOur ID: " + tourCatId);
  let deleteTourCatPromise = new Promise((res, rej) => {
    tourCatsRef
      .doc(tourCatId)
      .delete()
      .then((data) => res(data))
      .catch((err) => rej(err));
  });
  return deleteTourCatPromise;
};

// ------------------------------- TOUR CAT CONFIG ----------------------------
export const createTourCatConfig = (tourCatConfig) => {
  return new Promise((res, rej) => {
    tableConfigRef
      .doc("tour-cat-config")
      .set(tourCatConfig)
      .then(function () {
        console.log("Document successfully written!");
        res("Ok");
      })
      .catch(function (error) {
        rej(error);
      });
  });
};

export const getTourCatConfig = () => {
  return new Promise((res, rej) => {
    tableConfigRef
      .doc("tour-cat-config")
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

// ------------------------------ DELETE TOUR CAT WITH BATCH --------------------------------
export const deleteTourCatBatch = (tourCat) => {
  let batch = db.batch();
  batch.delete(tourCatsRef.doc(tourCat.fid));
  for (const tour of tourCat.tours) {
    batch.delete(toursRef.doc(tour.id));
  }
  return new Promise((res, rej) => {
    batch
      .commit()
      .then((data) => res(data))
      .catch((err) => rej(err));
  });
};
