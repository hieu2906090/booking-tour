import { firestore as db } from "./firebase/firebase";

const tourBooksRef = db.collection("tour-books");

// ------------------------------- TOUR BOOK ----------------------------
export const createTourBook = (tourBook) => {
  return new Promise((res, rej) => {
    tourBooksRef
      .add(tourBook)
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
