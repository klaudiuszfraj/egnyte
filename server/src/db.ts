import firebase from "firebase";
import serverConfig from './serverConfig';

const db = firebase.initializeApp(serverConfig.firebaseConfig);
const firestore = db.firestore();

export default firestore;