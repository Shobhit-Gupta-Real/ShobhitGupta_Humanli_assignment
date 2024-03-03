import {initializeApp} from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCE4xXCoCVt69TUUhTZNf2MXb7H9X6lDqM",
    authDomain: "varta-99b88.firebaseapp.com",
    projectId: "varta-99b88",
    storageBucket: "varta-99b88.appspot.com",
    messagingSenderId: "426505803715",
    appId: "1:426505803715:web:5bd8a183d6b849fc580f76",
    databaseURL: "https://varta-99b88-default-rtdb.firebaseio.com/"
  };

export const app = initializeApp(firebaseConfig)