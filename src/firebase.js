import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPJiCx_MN8oHqQUPVLqia14yvfgZqgV2U",
  authDomain: "capstone-project-library.firebaseapp.com",
  projectId: "capstone-project-library",
  storageBucket: "capstone-project-library.appspot.com",
  messagingSenderId: "36559321892",
  appId: "1:36559321892:web:5228f418d0ad46764051b1",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider, storage };
