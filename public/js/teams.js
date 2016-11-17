var Teams = function(dbData){
    
    this.dbTeams = dbData;
    this.rtTeams = dbData;
    
}

/*
 * TODO: this could be a junk function. 
 * function to clear table values before drawing the table with the updated values
 */
Teams.prototype.clearTeams = function(){
    
    for (var i = 0; i < teams.length; i++){
        teams[i].Points = 0;
        teams[i].F = 0;
        teams[i].A = 0;
    }
}




function calcTeamPoints(){
    
    // clear the values first
    rtTeams.F = 0;
    rtTeams.A = 0;
    rtTeams.Points = 0;
    rtTeams.GD = 0;
    
    // loop through each team
     
     for (var i = 0; i < rtTeams.length; i++) {
         
         var team = rtTeams[i];     // name of the team

         // replace the old team with the new team from games.getTeamPoints
         var team = games.getTeamPoints(team);
         
    }    
    
    
    
};




/*
 *  reset
 *  restore the real time array from the original database array
 */
Teams.prototype.reset = function(){
    
    this.rtTeams = this.dbTeams;
    
}
