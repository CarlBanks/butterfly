var Games = function(dbData){
    
    this.dbGames = dbData;
    this.rtGames = dbData;
    
}

Games.prototype.calculate = function(){
    this.calcScores();
    this.calcPoints();
    this.getTeamPoints();
}

Games.prototype.getTeamPoints = function(team){
    
    
    // loop through all games for each team
    for (var i = 0; i < this.rtGames.length; i++) {
            
        // check if home team
        if(team.Team === this.rtGames[i].Home){
            // if home team add hPoints to teams points
            team.Points += this.rtGames[i].homePoints;
                
            //Check Home Goals For
            teams.F += this.rtGames[i].HScore; 
            
            //Check Home Goals against
            teams.A += this.rtGames[i].Ascore; 
        }
            
            
        // check if away team 
        if(team === games[i].Away){
            // if away team add hPoints to teams points
            teams[i].Points += this.rtGames[i].awayPoints;
                
            //Check Away Goals For
            teams[i].F += this.rtGames[i].Ascore;
            
            //Check Away Goals against
            teams[i].A += this.rtGames[i].HScore; 
                
        }
    }
    return team;
}


//Calculate the score of each game
Games.prototype.calcPoints = function(){
 
    // loop through all the games
   for (var i = 0; i < games.length; i++) { 
       
       var game = this.rtGames[i];
       var hscore = game.HScore;
       var ascore = game.Ascore;
       //Home Win
       if (hscore > ascore) {
            this.rtGames[i].homePoints = 3;
            this.rtGames[i].awayPoints = 0;
        } 
       
       //Away Win
        else if (hscore < ascore) {
            this.rtGames[i].homePoints = 0;
            this.rtGames[i].awayPoints = 3;       
        }
       //Draw
        else {
            this.rtGames[i].homePoints = 1;
            this.rtGames[i].awayPoints = 1;
        }
    }
};


/*
 *  calcScores
 *  Loop through all of the games abnd calculate home and away scores using goals and players
 */
Games.prototype.calcScores = function(){
    
    // loop through all games
    for (var g = 0; g < this.rtGames.length; g++){
        
        var game = this.rtGames[g];
        var homeGoals = 0;
        var awayGoals = 0;
        var homeTally = 0;
        var awayTally = 0; 

        // populate an array with the relevant goals
        var relGoals = goals.getGoals(g);        
      

        // calculate the home and away scores 
        for (var i = 0; i < relGoals.length; i++){

            var goal = goals.getGoal(relGoals[i]);
            var player = players.getPlayer(goal['Player ID']);

            var home = true;
            
            if (game.Home !== player.Team) home = false;

            if (home === true){
                homeTally += goal['Goals Scored'];
            }else{
                awayTally += goal['Goals Scored'];
            }

            game.HScore = homeTally;
            game.Ascore = awayTally;
        }
        
        // update the old game with the new game that includes HScore and Ascore
        games[g] = game;

    }
}


/*
 *  reset
 *  restore the real time array from the original database array
 */
Games.prototype.reset = function(){
    
    this.rtGames = this.dbGames;
    
}
