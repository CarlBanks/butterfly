
// CONSTRUCTOR - Called when you first instantiate the class
var Players = function(dbData){
    
    this.dbPlayers = dbData;
    this.rtPlayers = dbData;

}

Players.prototype.getPlayer = function(id){
    return this.rtPlayers[id];
}

/*
 *  getPlayerID
 *  Takes the player name as a parameter and returns their ID if they exist
 */
Players.prototype.getPlayerID = function(playerName){
    
    //loop through the players data
     for (var i = 0; i < this.rtPlayers.length; i++){
        
         //if Players data is equal to the PlayerName data
        if (this.rtPlayers[i].Player === playerName){
            //convert the players name to the players ID
            return this.rtPlayers[i]['Player Id'];
        }
    }
    //else return
    return "Player not found";
    
}

Players.prototype.getPlayers = function(){
    return this.rtPlayers;
}

/*
 *  reset
 *  restore the real time array from the original database array
 */
Players.prototype.reset = function(){
    
    this.rtPlayers = this.dbPlayers;
    
}
