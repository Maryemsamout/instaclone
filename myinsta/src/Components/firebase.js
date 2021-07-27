import firebase from '@firebase/app';
require('firebase/auth');
require('firebase/storage');
  firebase.initializeApp({
    apiKey: "AIzaSyCwshMuwv1CiBquMO1t_wANxXVhW98Sg3s",
    authDomain: "instaclone-f6757.firebaseapp.com",
    projectId: "instaclone-f6757",
    storageBucket: "instaclone-f6757.appspot.com",
    messagingSenderId: "924489689930",
    appId: "1:924489689930:web:25fb3f6b491897b6b82fb3",
    measurementId: "G-3XWX6MG252"
  });

  const auth=firebase.auth();
  const storage=firebase.storage();
  export {storage,auth};