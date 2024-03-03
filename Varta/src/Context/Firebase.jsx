import {createContext, useContext} from 'react'
import {initializeApp} from "firebase/app"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {child, get, getDatabase, ref, set} from "firebase/database"
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCE4xXCoCVt69TUUhTZNf2MXb7H9X6lDqM",
    authDomain: "varta-99b88.firebaseapp.com",
    projectId: "varta-99b88",
    storageBucket: "varta-99b88.appspot.com",
    messagingSenderId: "426505803715",
    appId: "1:426505803715:web:5bd8a183d6b849fc580f76",
    databaseURL: "https://varta-99b88-default-rtdb.firebaseio.com/"
  };

export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FireStore = getFirestore(FirebaseApp)
const database = getDatabase(FirebaseApp)
const FirebaseContext = createContext(null)
const dbref = ref(database)
export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = (props) =>{
    const signupUser = (email, password) =>{
        return createUserWithEmailAndPassword(FirebaseAuth, email, password)
    }
    const signinUser = (email, password)=>{
        return signInWithEmailAndPassword(FirebaseAuth, email, password)
    }
    const putData = (key, data) => set(ref(database, key), data)
    const getData = (key) => get(child(dbref, key))
    return(
        <FirebaseContext.Provider value={{signupUser, signinUser, putData, getData}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}