import firebase from "firebase";
import serverConfig from './serverConfig';

const db = firebase.initializeApp(serverConfig.firebaseConfig);
export default db;