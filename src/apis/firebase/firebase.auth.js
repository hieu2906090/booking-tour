import firebase, { auth } from "./firebase";

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const signInWithEmail = async (email, password) =>
  await auth.signInWithEmailAndPassword(email, password);

export const resetPassword = (email) => auth.sendPasswordResetEmail(email);

export const signOut = () => auth.signOut();

export default auth;
