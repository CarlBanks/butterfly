// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDe-ErM277CEzMJXQmdM-C--fnuUSFk2j0",
    authDomain: "butterfly-1e62b.firebaseapp.com",
    databaseURL: "https://butterfly-1e62b.firebaseio.com",
    storageBucket: "butterfly-1e62b.appspot.com",
    messagingSenderId: "37049394868"
  };
  firebase.initializeApp(config);

var teams = [
    {name: 'manu', level: 'rubbish', goal:23},
    {name: 'manu', level: 'rubbish', goal:23},
    {name: 'Arsenal', level: 'rubbish', goal:23} 
];

firebase.auth().signInWithEmailAndPassword('admin@admin.com', 'admin1').catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
 
console.log(errorCode + '   ' + errorMessage);
  // ...
});

//var results = firebase.database().ref('teams/').set(teams);

var results = firebase.database().ref('teams/').push(teams[2]);

