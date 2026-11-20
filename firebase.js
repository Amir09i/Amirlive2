import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
  getDatabase
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCJx3Bir9s2Oz8QZJx3wSyetua75jRSzbs",
  authDomain: "amir-5065c.firebaseapp.com",
  databaseURL: "https://amir-5065c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "amir-5065c",
  storageBucket: "amir-5065c.firebasestorage.app",
  messagingSenderId: "928095975909",
  appId: "1:928095975909:web:19e3096b81d74a9023570c",
  measurementId: "G-YV0L1WJFE4"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);
