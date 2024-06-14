import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
  
  };

//Verificando se não tem conexões abertas, se não tiver eu inicio uma.
firebase.initializeApp(firebaseConfig)

export default firebase;
