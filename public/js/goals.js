var Goals = function(dbData){
    
    this.dbGoals = dbData;    // never edit this directly, used to restore original data to rtGoals
    this.rtGoals = dbData;
}

Goals.prototype.getGoal = function(id){
    return this.rtGoals[id];
}


/*
 *  removePlayers 
 *  Takes a player ID and removes any instance of that player from the goals list
 */
Goals.prototype.removePlayer = function(playerID){
    
    //loop through the goals data
    for (var i = 0; i < this.rtGoals.length; i++){
        
        // if the player id matches the goals data player id then remove the goals
        if(playerID === this.rtGoals[i]['Player ID']){
            if (i > -1) {
                this.rtGoals.splice(i, 1);
            }
        }
        
    }
}

/*
 *  getGoals 
 *  recieves game id and returns all goal ids relevant to game. 
 */
Goals.prototype.getGoals = function(id){
    
    var goals = [];
    
    for (var i = 0; i < this.rtGoals.length; i++){
            
        if(this.rtGoals[i]['Game ID'] === id) goals.push(i);
    }

    return goals;
}

Goals.prototype.reset = function(){
    
    this.rtGoals = this.dbGoals;
    
}
