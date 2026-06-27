
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBVhl079jUx4__fq8B_ff_YFu_MNpoH0SI",
  authDomain: "assignment-84515.firebaseapp.com",
  projectId: "assignment-84515",
  storageBucket: "assignment-84515.firebasestorage.app",
  messagingSenderId: "1043911319431",
  appId: "1:1043911319431:web:ae7fc6af7b391e14bb3d22",
  measurementId: "G-Y2RFN174SB"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
