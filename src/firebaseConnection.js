import firebase from 'firebase/app';
import  'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA6ITBdhqIuTf1Feo3cpGVP910aFkgKhzs",
  authDomain: "projeto-nome-cpf.firebaseapp.com",
  projectId: "projeto-nome-cpf",
  storageBucket: "projeto-nome-cpf.appspot.com",
  messagingSenderId: "484456116494",
  appId: "1:484456116494:web:0ed115e2b7f0aca335275f",
  measurementId: "G-85HBCQQS53"
};

if(!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
