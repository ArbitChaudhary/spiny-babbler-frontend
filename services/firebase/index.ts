import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { firebaseConfig } from '../../firebase.config';

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

export const signInFirebase = async (email: string, password: string) => {
  const response = await signInWithEmailAndPassword(
    firebaseAuth,
    email,
    password
  );

  return response;
};

export const signOutFirebase = async () => {
  await signOut(firebaseAuth);
};

export const getFirebaseUserToken = async (): Promise<string> => {
  return new Promise((resolve, reject) => {
    const unSub = firebaseAuth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await firebaseAuth.currentUser.getIdToken();
        resolve(token);
      } else {
        console.log('user is not logged in');
        resolve('');
      }
      unSub();
    });
  });
};
