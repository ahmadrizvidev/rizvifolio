// lib/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX3Lx5V46IppiutdSbHhaC55FZk-pf0ns",
  authDomain: "rizvifolio.firebaseapp.com",
  projectId: "rizvifolio",
  storageBucket: "rizvifolio.appspot.com",
  messagingSenderId: "535937777192",
  appId: "1:535937777192:web:4cb7b45087e8c0d197bf1d",
  measurementId: "G-VGZRC6JNR7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth,storage };
