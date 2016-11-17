var UIManager = function () {
   
};




//search hide and show on click
$(document).ready(function() {
    //hide the search button dropdown on loading the page
    $("#search").hide();
    $("#search-submit").hide();

    
    $(".search").toggle(
        function(){
            //show the search dropdown on toggle click
            $("#search").show();
            $("#search-submit").show();
            $("table").fadeTo(1000, 0.1)
            //hide the table on toggle click
            
        },
        function(){
            //hide the search dropdown on toggle click
            $("#search").hide();
            $("#search-submit").hide();
            //show the table
            //$("table").show();
            $("table").fadeTo(1000, 1)
        }
    );
    
    $(".nation").toggle(
        function(){
            //show the search dropdown on toggle click
            $("#nation").show();
            $("#nation-submit").show();
            $("table").fadeTo(1000, 0.1)
            //hide the table on toggle click
            
        },
        function(){
            //hide the search dropdown on toggle click
            $("#nation").hide();
            $("#nation-submit").hide();
            //show the table
            //$("table").show();
            $("table").fadeTo(1000, 1)
        }
    );
    
    $(".position").toggle(
        function(){
            //show the search dropdown on toggle click
            $("#position").show();
            $("#position-submit").show();
            $("table").fadeTo(1000, 0.1)
            //hide the table on toggle click
            
        },
        function(){
            //hide the search dropdown on toggle click
            $("#position").hide();
            $("#position-submit").hide();
            //show the table
            //$("table").show();
            $("table").fadeTo(1000, 1)
        }
    );
    
    $(".height").toggle(
        function(){
            //show the search dropdown on toggle click
            $("#height").show();
            $("#height-submit").show();
            $("table").fadeTo(1000, 0.1)
            //hide the table on toggle click
            
        },
        function(){
            //hide the search dropdown on toggle click
            $("#height").hide();
            $("#height-submit").hide();
            //show the table
            //$("table").show();
            $("table").fadeTo(1000, 1)
        }
    );
    
    $(".weight").toggle(
        function(){
            //show the search dropdown on toggle click
            $("#weight").show();
            $("#weight-submit").show();
            $("table").fadeTo(1000, 0.1)
            //hide the table on toggle click
            
        },
        function(){
            //hide the search dropdown on toggle click
            $("#weight").hide();
            $("#weight-submit").hide();
            //show the table
            //$("table").show();
            $("table").fadeTo(1000, 1)
        }
    );
    
    
    $("#search-submit").on('click', function(){
        
        var val = $('#search').val();
        
        playerID = getPlayerID(val);
        
        removePlayer(playerID);
        
        
        deleteTable();
        clearTeams();
        calcScores();
        calcPoints();
        calcTeamPoints();
        createLeagueTable();
        console.log(JSON.stringify(goals));
        console.log(JSON.stringify(games));
        $("table").show();
        $("#search").hide();
        $("#search-submit").hide();
        
    });
    
});

function deleteTable(){
    //remove the table when the deleteTable function is called
    $('.table').remove();
}


//Search Box function

$( function() {
    $.widget( "custom.catcomplete", $.ui.autocomplete, {
      _create: function() {
        this._super();
        this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
      },
      _renderMenu: function( ul, items ) {
        var that = this,
          currentCategory = "";
        $.each( items, function( index, item ) {
          var li;
          if ( item.category != currentCategory ) {
            ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
            currentCategory = item.category;
          }
          li = that._renderItemData( ul, item );
          if ( item.category ) {
            li.attr( "aria-label", item.category + " : " + item.label );
          }
        });
      }
    });
    var data = [
    ];
 
    $( "#search" ).catcomplete({
      delay: 0,
      source: dropDownData() 
    });
  } );

//Drop down search bar

function dropDownData(){
    
    var data = [];
    /*
    
    var players = players.getPlayers();
    //loop through the players data
    for (var i = 0; i < players.length; i++){
        
        var listItem = {};
        
        //List Player Name in drop down search
        listItem.label = players[i].Player;
        //List Player Team in dropd down search
        listItem.category = players[i].Team;
        //Give the item a value of the player's name
        listItem.value = players[i].Player;       
        
        
        data.push(listItem);
        
    }
    */
    return data;
};

//Remove Player


//Create League Table and paste it within HTML
function createLeagueTable(){
    
    //Create a table element
    var table = document.createElement('table');
    table.className = 'table';
    
    //create a table row element
    var headerRow = document.createElement('tr');
    headerRow.className = 'table-head';
    
    //places the headers for the table
    var htmlString = '<th>Position</th><th>Team</th><th>Played</th><th>Wins</th><th>Draws</th><th>Losses</th><th>GF</th><th>GA</th><th>GD</th>  <th>Points</th>'
  
  headerRow.innerHTML = htmlString;
    //create the table
  table.appendChild(headerRow);
    
  // loop through teams
  for (var i = 0; i < teams.length; i++){
      
      //poplulate table rows with teams
      var tableRow = createTableRow(teams[i]);
      
      //send teams to table
      table.appendChild(tableRow);
  }
    
  document.body.appendChild(table);
}
    
//Create League table
function createTableRow(record){
    
    //populate table row in html
    var tableRow = document.createElement('tr');
    
    //create position collumn of table
    var positionCell = document.createElement('td');
    positionCell.innerHTML = record.Position;
    
    //create Team collumn of table
    var teamCell = document.createElement('td');
    teamCell.innerHTML = record.Team;
    
    //create points collumn of table
    var pointsCell = document.createElement('td');
    pointsCell.innerHTML = record.Points;
    
    //create played collumn of table
    var playedCell = document.createElement('td');
    playedCell.innerHTML = record.P;
    
    //create wins collumn of table
    var winsCell = document.createElement('td');
    winsCell.innerHTML = record.W;
    
    //create draws collumn of table
    var drawsCell = document.createElement('td');
    drawsCell.innerHTML = record.D;
    
    //create losses collumn of table
    var losssesCell = document.createElement('td');
    losssesCell.innerHTML = record.L;
    
    //create goals for collumn of table
    var goalsForCell = document.createElement('td');
    goalsForCell.innerHTML = record.F;
    
    //create goals against collumn of table
    var goalsAgainstCell = document.createElement('td');
    goalsAgainstCell.innerHTML = record.A;
    
    //create goal difference collumn of table
    var gdCell = document.createElement('td');
    gdCell.innerHTML = record.GD;
    
    //Sends data to table
    tableRow.appendChild(positionCell);
    tableRow.appendChild(teamCell);
    tableRow.appendChild(playedCell);
    tableRow.appendChild(winsCell);
    tableRow.appendChild(drawsCell);
    tableRow.appendChild(losssesCell);
    tableRow.appendChild(goalsForCell);
    tableRow.appendChild(goalsAgainstCell);
    tableRow.appendChild(gdCell);
    tableRow.appendChild(pointsCell);
    
    return tableRow;

}




