import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAUS2_xTOcGYqkii7mXT-fsMqsJDc6CLIY',
  authDomain: 'healthshift-e5ea8.firebaseapp.com',
  projectId: 'healthshift-e5ea8',
  storageBucket: 'healthshift-e5ea8.appspot.com',
  messagingSenderId: '616715837643',
  appId: '1:616715837643:web:74b4b4f0c5aa4537b37b4e',
};

//Verificando se não tem conexões abertas, se não tiver eu inicio uma.
if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase;