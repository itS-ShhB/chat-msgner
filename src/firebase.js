import firebase from 'firebase/app';
import "firebase/auth"

 export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyCJnhm2eIehuFRtSSkcC2wwtOPGGYeJB_s",
    authDomain: "chat-msg-1b495.firebaseapp.com",
    projectId: "chat-msg-1b495",
    storageBucket: "chat-msg-1b495.appspot.com",
    messagingSenderId: "375700082252",
    appId: "1:375700082252:web:759f2e72e9b69962b72ee9"
  }).auth();