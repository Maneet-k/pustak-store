import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAxDTq0OxLChbmPTq_yfeLldGB1ZmraGkI",
  authDomain: "nitun-project.firebaseapp.com",
  projectId: "nitun-project",
  storageBucket: "nitun-project.appspot.com",
  messagingSenderId: "918932317389",
  appId: "1:918932317389:web:549e2b3e3585af9cb1b584"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
export {auth,db,storage,provider}
export default app;