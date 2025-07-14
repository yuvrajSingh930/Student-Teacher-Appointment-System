import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJGlXqIV6sEoN_ECKyu9DBGV6I99cLfBo",
  authDomain: "student-teacher-appointm-efea2.firebaseapp.com",
  projectId: "student-teacher-appointm-efea2",
  storageBucket: "student-teacher-appointm-efea2.firebasestorage.app",
  messagingSenderId: "884849877309",
  appId: "1:884849877309:web:ef3456d22294a52a222554",
  measurementId: "G-QM5QNV2B9L"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
