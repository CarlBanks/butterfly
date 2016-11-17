// Initialize Firebase
var config = {
     apiKey: "AIzaSyDe-ErM277CEzMJXQmdM-C--fnuUSFk2j0",
     authDomain: "butterfly-1e62b.firebaseapp.com",
     databaseURL: "https://butterfly-1e62b.firebaseio.com",
     storageBucket: "butterfly-1e62b.appspot.com",
     messagingSenderId: "37049394868"
};

firebase.initializeApp(config);

firebase.auth().signInWithEmailAndPassword('admin@admin.com', 'admin1').catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
});



var players;
var goals;
var games;
var teams;

// instantiate global variables allowing for latency from database
firebase.database().ref('games/').once('value').then(function(snapshot) {
    
    games = new Games(snapshot.val());
    
    firebase.database().ref('goals/').once('value').then(function(snapshot) {
        
        goals = new Goals(snapshot.val());

        firebase.database().ref('players/').once('value').then(function(snapshot) {
    
            players = new Players(snapshot.val());
            
                firebase.database().ref('teams/').once('value').then(function(snapshot) {
    
                    teams = snapshot.val();
                    
                    initApp();
                    
            });
        });
    });
});


function initApp(){
    
    games.calculate();
    
    createLeagueTable();
    
}


function updateApp(){
    
    
    
}


function resetApp(){
    
    
    
}