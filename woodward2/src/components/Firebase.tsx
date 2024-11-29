import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC516jLZOmfK0qeahzTn0fh_t4-3Ukph4s",
  authDomain: "woodward2-7dfae.firebaseapp.com",
  projectId: "woodward2-7dfae",
  storageBucket: "woodward2-7dfae.firebasestorage.app",
  messagingSenderId: "719248142633",
  appId: "1:719248142633:web:d8b5af816dfb36d1c0c738",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, onAuthStateChanged };