import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
import config from "./firebase.config";

export const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const database = firebase.database();
export const storage = firebase.storage();
// export const rsf = new ReduxSagaFirebase(firebaseApp);
export default firebase;
