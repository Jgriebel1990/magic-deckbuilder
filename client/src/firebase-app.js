import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBi63LtkF7G_ohX3jpNefGG1Y3ZPeXcIQ8",
    authDomain: "testgarbage-fa953.firebaseapp.com",
    databaseURL: "https://testgarbage-fa953.firebaseio.com",
    projectId: "testgarbage-fa953",
    storageBucket: "testgarbage-fa953.appspot.com",
    messagingSenderId: "684297329433"
  };

export default firebase.initializeApp(config);