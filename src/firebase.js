import { initializeApp } from "firebase";

const app = initializeApp({
  apiKey: "AIzaSyBiUsIkJ1UkwbkY4Dkb71ns0CrOEL1RaY8",
  authDomain: "recipe-f6f36.firebaseapp.com",
  databaseURL: "https://recipe-f6f36.firebaseio.com",
  projectId: "recipe-f6f36",
  storageBucket: "recipe-f6f36.appspot.com",
  messagingSenderId: "233453994983",
  appId: "1:233453994983:web:8c3490fb8ff19e15e53342"
});

export const db = app.firestore();
export const recipesCollection = db.collection("recipes");
