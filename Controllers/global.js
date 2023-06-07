import { initializeApp } 
from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
import { 
          getAuth,
          signInWithEmailAndPassword, 
          createUserWithEmailAndPassword,
          GoogleAuthProvider,
          signInWithPopup 
        } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';

import { 
          getFirestore,
          collection, 
          addDoc,
          getDocs,
          doc, 
          setDoc,
          getDoc 
        } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js';

/////////////////////////////////////
const firebaseConfig = {
  apiKey: "AIzaSyDFBSYHdfFUVxJijjQvd7Mi8sDghQTlEl8",
  authDomain: "lissethhernandez.firebaseapp.com",
  projectId: "lissethhernandez",
  storageBucket: "lissethhernandez.appspot.com",
  messagingSenderId: "958115722661",
  appId: "1:958115722661:web:0ae82b7f23a6cd9c68244c",
  measurementId: "G-F4QMBB1CGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore();
//////////////////////////////////////////////
export const loginvalidation=(email,password)=>
  signInWithEmailAndPassword(auth, email, password)

export const useregister =(email,password)=>
  createUserWithEmailAndPassword(auth, email, password)

export const servicegoogle =()=>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

        
export const addcollection=(codigo,nombre,posicion,cel, stock)=>
  addDoc(collection(db, "users"),{
      codigo,
      nombre,
      posicion,
      cel,
      stock
    });

export const readcollection=()=>
  getDocs(collection(db, "users"));

export const adduser=(codigo,nombre,direction,cel, stock, imagen)=>
  setDoc(doc(db, "usuario", codigo), {
    codigo,
    nombre,
    direction,
    cel,
    stock,
    imagen
  });

export const readuser=(codigo)=>
  getDoc(doc(db, "usuario", codigo));