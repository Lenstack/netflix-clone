import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDw-20kblY1VeMEE4T-fdUKcfz2IDILk3U",
  authDomain: "netflix-clone-3466d.firebaseapp.com",
  databaseURL: "https://netflix-clone-3466d.firebaseio.com",
  projectId: "netflix-clone-3466d",
  storageBucket: "netflix-clone-3466d.appspot.com",
  messagingSenderId: "305810337024",
  appId: "1:305810337024:web:41c18ffbac2d478c96d7e5",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
