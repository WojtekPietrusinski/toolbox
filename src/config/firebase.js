import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD_pRPhnzmJW1Joea9cBpN1f3l39RR_5Iw",
  authDomain: "toolbox-d3c90.firebaseapp.com",
  projectId: "toolbox-d3c90",
  storageBucket: "toolbox-d3c90.appspot.com",
  messagingSenderId: "516215257445",
  appId: "1:516215257445:web:b6b7802a0decaf5ab4c98c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
 