import  firebase from 'firebase'




  var firebaseConfig = {
    apiKey: "AIzaSyCu1bNaEFMLXHbmfWuc10AOp22xacBd8Cw",
    authDomain: "simple-management.firebaseapp.com",
    projectId: "simple-management",
    storageBucket: "simple-management.appspot.com",
    messagingSenderId: "740270624312",
    appId: "1:740270624312:web:6495c4a4339f42a69d20cd"
  };
   
  var fileDd = firebase.initializeApp(firebaseConfig);

  export default fileDd.database().ref();