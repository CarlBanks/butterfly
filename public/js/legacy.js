/* Initialize Firebase
  var config = {
    apiKey: "AIzaSyDe-ErM277CEzMJXQmdM-C--fnuUSFk2j0",
    authDomain: "butterfly-1e62b.firebaseapp.com",
    databaseURL: "https://butterfly-1e62b.firebaseio.com",
    storageBucket: "butterfly-1e62b.appspot.com",
    messagingSenderId: "37049394868"
  };
  firebase.initializeApp(config);*/

//Team data
var teams = [
{"Position":1,"Team":"Man City","P":0,"W":0,"D":0,"L":0,"F":0,"A":0,"GD":0,"Points":0},
{"Position":2,"Team":"Tottenham","P":0,"W":0,"D":0,"L":0,"F":0,"A":0,"GD":0,"Points":0},
{"Position":3,"Team":"Arsenal","P":0,"W":0,"D":0,"L":0,"F":0,"A":0,"GD":0,"Points":0},
{"Position":4,"Team":"Liverpool","P":0,"W":0,"D":0,"L":0,"F":0,"A":0,"GD":0,"Points":0},
{"Position":5,"Team":"Everton","P":0,"W":0,"D":0,"L":0,"F":0,"A":0,"GD":0,"Points":0},
{"Position":6,"Team":"Man Utd","P":0,"W":0,"D":0,"L":0,"F":0,"A":0,"GD":0,"Points":0},
{"Position":7,"Team":"Chelsea","P":0,"W":0,"D":0,"L":0,"F":0,"A":0,"GD":0,"Points":0},
{"Position":8,"Team":"Crystal Palace","P":0,"W":0,"D":0,"L":0,"F":0,"A":0,"GD":0,"Points":0},
{"Position":9,"Team":"Southampton","P":0,"W":0,"D":0,"L":0,"F":0,"A":0,"GD":0,"Points":0},
{"Position":10,"Team":"West Brom","P":0,"W":0,"D":0,"L":0,"F":0,"A":0,"GD":0,"Points":0},
{"Position":11,"Team":"Watford","P":0,"W":0,"D":0,"L":0,"F":0,"A":0,"GD":0,"Points":0},
{"Position":12,"Team":"Leicester","P":0,"W":0,"D":0,"L":0,"F":0,"A":0,"GD":0,"Points":0},
{"Position":13,"Team":"Bournemouth","P":0,"W":0,"D":0,"L":0,"F":0,"A":0,"GD":0,"Points":0},
{"Position":14,"Team":"Burnley","P":0,"W":0,"D":0,"L":0,"F":0,"A":0,"GD":0,"Points":0},
{"Position":15,"Team":"Hull","P":0,"W":0,"D":0,"L":0,"F":0,"A":0,"GD":0,"Points":0},
{"Position":16,"Team":"Middlesbrough","P":0,"W":0,"D":0,"L":0,"F":0,"A":0,"GD":0,"Points":0},
{"Position":17,"Team":"Swansea","P":0,"W":0,"D":0,"L":0,"F":0,"A":0,"GD":0,"Points":0},
{"Position":18,"Team":"West Ham","P":0,"W":0,"D":0,"L":0,"F":0,"A":0,"GD":0,"Points":0},
{"Position":19,"Team":"Stoke","P":0,"W":0,"D":0,"L":0,"F":0,"A":0,"GD":0,"Points":0},
{"Position":20,"Team":"Sunderland","P":0,"W":0,"D":0,"L":0,"F":0,"A":0,"GD":0,"Points":0}
];

//Player data
var players = [
    
{"Player Id":0,"Player":"Diego Costa","Goals":6,"Team":"Chelsea","Nationality":"Spain","DOB":null,"Height":186,"Continent":"Europe","Weight":87,"Foot":"Right","Capped":"Yes","Position":"ST C"},
{"Player Id":1,"Player":"Romelu Lukaku","Goals":5,"Team":"Everton","Nationality":"Belgium","DOB":null,"Height":192,"Continent":"Europe","Weight":97,"Foot":"Left","Capped":"Yes","Position":"ST C"},
{"Player Id":2,"Player":"Sergio Aguero","Goals":5,"Team":"Man City","Nationality":"Argentina","DOB":null,"Height":172,"Continent":"South America","Weight":74,"Foot":"Either","Capped":"Yes","Position":"ST C"},
{"Player Id":3,"Player":"Michail Antonio","Goals":5,"Team":"West Ham","Nationality":"England","DOB":null,"Height":181,"Continent":"Europe","Weight":82,"Foot":"Right","Capped":"No","Position":"AM R"},
{"Player Id":4,"Player":"Alexis Sanchez","Goals":4,"Team":"Arsenal","Nationality":"Chile","DOB":null,"Height":169,"Continent":"South America","Weight":70,"Foot":"Right","Capped":"Yes","Position":"AM R"},
{"Player Id":5,"Player":"James Milner","Goals":4,"Team":"Liverpool","Nationality":"England","DOB":null,"Height":176,"Continent":"Europe","Weight":70,"Foot":"Right","Capped":"Yes","Position":"D L"},
{"Player Id":6,"Player":"Raheem Sterling","Goals":4,"Team":"Man City","Nationality":"England","DOB":null,"Height":171,"Continent":"Europe","Weight":69,"Foot":"Right","Capped":"Yes","Position":"AM L"},
{"Player Id":7,"Player":"Zlatan Ibrahimovic","Goals":4,"Team":"Man Utd","Nationality":"Sweden","DOB":null,"Height":195,"Continent":"Europe","Weight":95,"Foot":"Either","Capped":"Yes","Position":"ST C"},
{"Player Id":8,"Player":"Jermain Defoe","Goals":4,"Team":"Sunderland","Nationality":"England","DOB":null,"Height":167,"Continent":"Europe","Weight":71,"Foot":"Right","Capped":"Yes","Position":"ST C"},
{"Player Id":9,"Player":"Leroy Fer","Goals":4,"Team":"Swansea","Nationality":"Holland","DOB":null,"Height":188,"Continent":"Europe","Weight":71,"Foot":"Right","Capped":"Yes","Position":"M C"},
{"Player Id":10,"Player":"Heung Min Son","Goals":4,"Team":"Tottenham","Nationality":"South Korea","DOB":null,"Height":183,"Continent":"Asia","Weight":76,"Foot":"Either","Capped":"Yes","Position":"AM L"},
{"Player Id":11,"Player":"Etienne Capoue","Goals":4,"Team":"Watford","Nationality":"France","DOB":null,"Height":189,"Continent":"Europe","Weight":80,"Foot":"Right","Capped":"Yes","Position":"DM"},
{"Player Id":12,"Player":"Theo Walcott","Goals":3,"Team":"Arsenal","Nationality":"England","DOB":null,"Height":176,"Continent":"Europe","Weight":71,"Foot":"Right","Capped":"Yes","Position":"AM R"},
{"Player Id":13,"Player":"Christian Benteke","Goals":3,"Team":"Crystal Palace","Nationality":"Belgium","DOB":null,"Height":191,"Continent":"Europe","Weight":86,"Foot":"Right","Capped":"Yes","Position":"ST C"},
{"Player Id":14,"Player":"Robert Snodgrass","Goals":3,"Team":"Hull","Nationality":"Scotland","DOB":null,"Height":183,"Continent":"Europe","Weight":78,"Foot":"Left","Capped":"Yes","Position":"AM R"},
{"Player Id":15,"Player":"Philippe Coutinho","Goals":3,"Team":"Liverpool","Nationality":"Brazil","DOB":null,"Height":172,"Continent":"South America","Weight":71,"Foot":"Right","Capped":"Yes","Position":"AM L"},
{"Player Id":16,"Player":"Roberto Firmino","Goals":3,"Team":"Liverpool","Nationality":"Brazil","DOB":null,"Height":181,"Continent":"South America","Weight":76,"Foot":"Right","Capped":"Yes","Position":"AM C"},
{"Player Id":17,"Player":"Adam Lallana","Goals":3,"Team":"Liverpool","Nationality":"England","DOB":null,"Height":173,"Continent":"Europe","Weight":73,"Foot":"Either","Capped":"Yes","Position":"AM R"},
{"Player Id":18,"Player":"Sadio Mane","Goals":3,"Team":"Liverpool","Nationality":"Senegal","DOB":null,"Height":175,"Continent":"Africa","Weight":69,"Foot":"Either","Capped":"Yes","Position":"AM R"},
{"Player Id":19,"Player":"Marcus Rashford","Goals":3,"Team":"Man Utd","Nationality":"England","DOB":null,"Height":178,"Continent":"Europe","Weight":65,"Foot":"Right","Capped":"Yes","Position":"ST C"},
{"Player Id":20,"Player":"Christian Stuani","Goals":3,"Team":"Middlesborough","Nationality":"Uruguay","DOB":null,"Height":183,"Continent":"South America","Weight":74,"Foot":"Right","Capped":"Yes","Position":"AM R"},
{"Player Id":21,"Player":"Troy Deeney","Goals":3,"Team":"Watford","Nationality":"England","DOB":null,"Height":181,"Continent":"Europe","Weight":77,"Foot":"Right","Capped":"No","Position":"ST C"},
{"Player Id":22,"Player":"Nacer Chadli","Goals":3,"Team":"West Brom","Nationality":"Belgium","DOB":null,"Height":187,"Continent":"Europe","Weight":80,"Foot":"Either","Capped":"Yes","Position":"AM L"},
{"Player Id":23,"Player":"Salomon Rondon","Goals":3,"Team":"West Brom","Nationality":"Venezuela","DOB":null,"Height":189,"Continent":"South America","Weight":85,"Foot":"Right","Capped":"Yes","Position":"ST C"},
{"Player Id":24,"Player":"Santi Cazorla","Goals":2,"Team":"Arsenal","Nationality":"Spain","DOB":null,"Height":168,"Continent":"Europe","Weight":66,"Foot":"Either","Capped":"Yes","Position":"M C"},
{"Player Id":25,"Player":"Mesut Ozil","Goals":2,"Team":"Arsenal","Nationality":"German","DOB":null,"Height":183,"Continent":"Europe","Weight":72,"Foot":"Left","Capped":"Yes","Position":"AM C"},
{"Player Id":26,"Player":"Josh King","Goals":2,"Team":"Bournemouth","Nationality":"Norway","DOB":null,"Height":180,"Continent":"Europe","Weight":74,"Foot":"Right","Capped":"Yes","Position":"AM R"},
{"Player Id":27,"Player":"Callum Wilson","Goals":2,"Team":"Bournemouth","Nationality":"England","DOB":null,"Height":181,"Continent":"Europe","Weight":67,"Foot":"Right","Capped":"Yes","Position":"ST C"},
{"Player Id":28,"Player":"Eden Hazard","Goals":2,"Team":"Chelsea","Nationality":"Belgium","DOB":null,"Height":173,"Continent":"Europe","Weight":76,"Foot":"Either","Capped":"Yes","Position":"AM L"},
{"Player Id":29,"Player":"Willian","Goals":2,"Team":"Chelsea","Nationality":"Brazil","DOB":null,"Height":175,"Continent":"South America","Weight":77,"Foot":"Right","Capped":"Yes","Position":"AM R"},
{"Player Id":30,"Player":"Scott Dann","Goals":2,"Team":"Crystal Palace","Nationality":"England","DOB":null,"Height":195,"Continent":"Europe","Weight":79,"Foot":"Right","Capped":"No","Position":"D C"},
{"Player Id":31,"Player":"James McArthur","Goals":2,"Team":"Crystal Palace","Nationality":"Scotland","DOB":null,"Height":178,"Continent":"Europe","Weight":64,"Foot":"Right","Capped":"Yes","Position":"DM"},
{"Player Id":32,"Player":"Gareth Barry","Goals":2,"Team":"Everton","Nationality":"England","DOB":null,"Height":183,"Continent":"Europe","Weight":78,"Foot":"Left","Capped":"Yes","Position":"M C"},
{"Player Id":33,"Player":"Islam Slimani","Goals":2,"Team":"Leicester","Nationality":"Algeria","DOB":null,"Height":188,"Continent":"Africa","Weight":84,"Foot":"Right","Capped":"Yes","Position":"ST C"},
{"Player Id":34,"Player":"Jamie Vardy","Goals":2,"Team":"Leicester","Nationality":"England","DOB":null,"Height":178,"Continent":"Europe","Weight":77,"Foot":"Right","Capped":"Yes","Position":"ST C"},
{"Player Id":35,"Player":"Kevin De Bruyne","Goals":2,"Team":"Man City","Nationality":"Belgium","DOB":null,"Height":181,"Continent":"Europe","Weight":76,"Foot":"Either","Capped":"Yes","Position":"AM C"},
{"Player Id":36,"Player":"Kelechi Iheanacho","Goals":2,"Team":"Man City","Nationality":"Nigeria","DOB":null,"Height":185,"Continent":"Africa","Weight":76,"Foot":"Left","Capped":"Yes","Position":"ST C"},
{"Player Id":37,"Player":"Nolito","Goals":2,"Team":"Man City","Nationality":"Spain","DOB":null,"Height":175,"Continent":"Europe","Weight":73,"Foot":"Either","Capped":"Yes","Position":"AM L"},
{"Player Id":38,"Player":"Juan Mata","Goals":2,"Team":"Man Utd","Nationality":"Spain","DOB":null,"Height":171,"Continent":"Europe","Weight":65,"Foot":"Left","Capped":"Yes","Position":"AM C"},
{"Player Id":39,"Player":"Charlie Austin","Goals":2,"Team":"Southampton","Nationality":"England","DOB":null,"Height":188,"Continent":"Europe","Weight":84,"Foot":"Right","Capped":"No","Position":"ST C"},
{"Player Id":40,"Player":"Joe Allen","Goals":2,"Team":"Stoke","Nationality":"Wales","DOB":null,"Height":168,"Continent":"Europe","Weight":62,"Foot":"Right","Capped":"Yes","Position":"M C"},
{"Player Id":41,"Player":"Patrick Van Aanholt","Goals":2,"Team":"Sunderland","Nationality":"Holland","DOB":null,"Height":175,"Continent":"Europe","Weight":67,"Foot":"Left","Capped":"Yes","Position":"D L"},
{"Player Id":42,"Player":"Dele Alli","Goals":2,"Team":"Tottenham","Nationality":"England","DOB":null,"Height":185,"Continent":"Europe","Weight":77,"Foot":"Right","Capped":"Yes","Position":"AM C"},
{"Player Id":43,"Player":"Harry Kane","Goals":2,"Team":"Tottenham","Nationality":"England","DOB":null,"Height":190,"Continent":"Europe","Weight":83,"Foot":"Either","Capped":"Yes","Position":"ST C"},
{"Player Id":44,"Player":"Laurent Koscielny","Goals":1,"Team":"Arsenal","Nationality":"France","DOB":null,"Height":186,"Continent":"Europe","Weight":75,"Foot":"Right","Capped":"Yes","Position":"D C"},
{"Player Id":45,"Player":"Alex Oxlade-Chamberlain","Goals":1,"Team":"Arsenal","Nationality":"England","DOB":null,"Height":181,"Continent":"Europe","Weight":70,"Foot":"Right","Capped":"Yes","Position":"AM L"},
{"Player Id":46,"Player":"Granit Xhaka","Goals":1,"Team":"Arsenal","Nationality":"Switzerland","DOB":null,"Height":185,"Continent":"Europe","Weight":82,"Foot":"Left","Capped":"Yes","Position":"DM"},
{"Player Id":47,"Player":"Adam Smith","Goals":1,"Team":"Bournemouth","Nationality":"England","DOB":null,"Height":180,"Continent":"Europe","Weight":79,"Foot":"Right","Capped":"No","Position":"D R"},
{"Player Id":48,"Player":"Junior Stanislas","Goals":1,"Team":"Bournemouth","Nationality":"England","DOB":null,"Height":183,"Continent":"Europe","Weight":77,"Foot":"Right","Capped":"No","Position":"AM R"},
{"Player Id":49,"Player":"Steven Defour","Goals":1,"Team":"Burnley","Nationality":"Belgium","DOB":null,"Height":174,"Continent":"Europe","Weight":69,"Foot":"Right","Capped":"Yes","Position":"M C"},
{"Player Id":50,"Player":"Andre Gray","Goals":1,"Team":"Burnley","Nationality":"England","DOB":null,"Height":181,"Continent":"Europe","Weight":73,"Foot":"Right","Capped":"No","Position":"ST C"},
{"Player Id":51,"Player":"Jeff Hendrick","Goals":1,"Team":"Burnley","Nationality":"Northern Ireland","DOB":null,"Height":185,"Continent":"Europe","Weight":79,"Foot":"Right","Capped":"Yes","Position":"M C"},
{"Player Id":52,"Player":"Michael Keane","Goals":1,"Team":"Burnley","Nationality":"England","DOB":null,"Height":186,"Continent":"Europe","Weight":83,"Foot":"Right","Capped":"No","Position":"D C"},
{"Player Id":53,"Player":"Sam Vokes","Goals":1,"Team":"Burnley","Nationality":"Wales","DOB":null,"Height":188,"Continent":"Europe","Weight":76,"Foot":"Right","Capped":"Yes","Position":"ST C"},
{"Player Id":54,"Player":"Michy Batshuayi","Goals":1,"Team":"Chelsea","Nationality":"Belgium","DOB":null,"Height":185,"Continent":"Europe","Weight":85,"Foot":"Right","Capped":"Yes","Position":"ST C"},
{"Player Id":55,"Player":"Victor Moses","Goals":1,"Team":"Chelsea","Nationality":"Nigeria","DOB":null,"Height":177,"Continent":"Africa","Weight":75,"Foot":"Right","Capped":"Yes","Position":"AM L"},
{"Player Id":56,"Player":"Joe Ledley","Goals":1,"Team":"Crystal Palace","Nationality":"Wales","DOB":null,"Height":183,"Continent":"Europe","Weight":73,"Foot":"Left","Capped":"Yes","Position":"M C"},
{"Player Id":57,"Player":"James Tomkins","Goals":1,"Team":"Crystal Palace","Nationality":"England","DOB":null,"Height":191,"Continent":"Europe","Weight":79,"Foot":"Right","Capped":"No","Position":"D C"},
{"Player Id":58,"Player":"Andros Townsend","Goals":1,"Team":"Crystal Palace","Nationality":"England","DOB":null,"Height":178,"Continent":"Europe","Weight":75,"Foot":"Either","Capped":"Yes","Position":"AM R"},
{"Player Id":59,"Player":"Wilfried Zaha","Goals":1,"Team":"Crystal Palace","Nationality":"England","DOB":null,"Height":181,"Continent":"Europe","Weight":67,"Foot":"Right","Capped":"Yes","Position":"AM R"},
{"Player Id":60,"Player":"Ross Barkley","Goals":1,"Team":"Everton","Nationality":"England","DOB":null,"Height":189,"Continent":"Europe","Weight":76,"Foot":"Either","Capped":"Yes","Position":"AM C"},
{"Player Id":61,"Player":"Seamus Coleman","Goals":1,"Team":"Everton","Nationality":"Republic of Ireland","DOB":null,"Height":178,"Continent":"Europe","Weight":67,"Foot":"Right","Capped":"Yes","Position":"D R"},
{"Player Id":62,"Player":"Kevin Mirallas","Goals":1,"Team":"Everton","Nationality":"Belgium","DOB":null,"Height":182,"Continent":"Europe","Weight":75,"Foot":"Right","Capped":"Yes","Position":"AM R"},
{"Player Id":63,"Player":"Adama Diomande","Goals":1,"Team":"Hull","Nationality":"Norway","DOB":null,"Height":180,"Continent":"Europe","Weight":73,"Foot":"Right","Capped":"No","Position":"ST C"},
{"Player Id":64,"Player":"Abel Hernandez","Goals":1,"Team":"Hull","Nationality":"Uruguay","DOB":null,"Height":186,"Continent":"South America","Weight":77,"Foot":"Left","Capped":"Yes","Position":"ST C"},
{"Player Id":65,"Player":"Shaun Maloney","Goals":1,"Team":"Hull","Nationality":"Scotland","DOB":null,"Height":170,"Continent":"Europe","Weight":70,"Foot":"Either","Capped":"Yes","Position":"AM L"},
{"Player Id":66,"Player":"David Meyler","Goals":1,"Team":"Hull","Nationality":"Republic of Ireland","DOB":null,"Height":188,"Continent":"Europe","Weight":79,"Foot":"Right","Capped":"Yes","Position":"DM"},
{"Player Id":67,"Player":"Demarai Gray","Goals":1,"Team":"Leicester","Nationality":"England","DOB":null,"Height":178,"Continent":"Europe","Weight":78,"Foot":"Right","Capped":"No","Position":"AM L"},
{"Player Id":68,"Player":"Riyad Mahrez","Goals":1,"Team":"Leicester","Nationality":"Algeria","DOB":null,"Height":179,"Continent":"Africa","Weight":62,"Foot":"Left","Capped":"Yes","Position":"AM R"},
{"Player Id":69,"Player":"Wes Morgan","Goals":1,"Team":"Leicester","Nationality":"Jamaica","DOB":null,"Height":185,"Continent":"North America","Weight":93,"Foot":"Right","Capped":"Yes","Position":"D C"},
{"Player Id":70,"Player":"Jordan Henderson","Goals":1,"Team":"Liverpool","Nationality":"England","DOB":null,"Height":183,"Continent":"Europe","Weight":67,"Foot":"Right","Capped":"Yes","Position":"M C"},
{"Player Id":71,"Player":"Dejan Lovren","Goals":1,"Team":"Liverpool","Nationality":"Croatia","DOB":null,"Height":190,"Continent":"Europe","Weight":84,"Foot":"Right","Capped":"Yes","Position":"D C"},
{"Player Id":72,"Player":"Fernandinho","Goals":1,"Team":"Man City","Nationality":"Brazil","DOB":null,"Height":176,"Continent":"South America","Weight":66,"Foot":"Right","Capped":"Yes","Position":"M C"},
{"Player Id":73,"Player":"Ilkay Gundogan","Goals":1,"Team":"Man City","Nationality":"German","DOB":null,"Height":170,"Continent":"Europe","Weight":78,"Foot":"Right","Capped":"Yes","Position":"M C"},
{"Player Id":74,"Player":"Anthony Martial","Goals":1,"Team":"Man Utd","Nationality":"France","DOB":null,"Height":181,"Continent":"Europe","Weight":76,"Foot":"Right","Capped":"Yes","Position":"AM L"},
{"Player Id":75,"Player":"Paul Pogba","Goals":1,"Team":"Man Utd","Nationality":"France","DOB":null,"Height":191,"Continent":"Europe","Weight":80,"Foot":"Either","Capped":"Yes","Position":"M C"},
{"Player Id":76,"Player":"Wayne Rooney","Goals":1,"Team":"Man Utd","Nationality":"England","DOB":null,"Height":178,"Continent":"Europe","Weight":78,"Foot":"Right","Capped":"Yes","Position":"AM C"},
{"Player Id":77,"Player":"Chris Smalling","Goals":1,"Team":"Man Utd","Nationality":"England","DOB":null,"Height":194,"Continent":"Europe","Weight":90,"Foot":"Right","Capped":"Yes","Position":"D C"},
{"Player Id":78,"Player":"Daniel Ayala","Goals":1,"Team":"Arsenal","Nationality":"Spain","DOB":null,"Height":191,"Continent":"Europe","Weight":84,"Foot":"Right","Capped":"No","Position":"D C"},
{"Player Id":79,"Player":"Calum Chambers","Goals":1,"Team":"Middlesborough","Nationality":"England","DOB":null,"Height":183,"Continent":"Europe","Weight":73,"Foot":"Right","Capped":"Yes","Position":"D R"},
{"Player Id":80,"Player":"Ben Gibson","Goals":1,"Team":"Middlesborough","Nationality":"England","DOB":null,"Height":186,"Continent":"Europe","Weight":78,"Foot":"Left","Capped":"No","Position":"D C"},
{"Player Id":81,"Player":"Alvaro Negredo","Goals":1,"Team":"Middlesborough","Nationality":"Spain","DOB":null,"Height":186,"Continent":"Europe","Weight":86,"Foot":"Left","Capped":"Yes","Position":"ST C"},
{"Player Id":82,"Player":"Nathan Redmond","Goals":1,"Team":"Southampton","Nationality":"England","DOB":null,"Height":173,"Continent":"Europe","Weight":75,"Foot":"Right","Capped":"No","Position":"AM R"},
{"Player Id":83,"Player":"Jay Rodriguez","Goals":1,"Team":"Southampton","Nationality":"England","DOB":null,"Height":186,"Continent":"Europe","Weight":70,"Foot":"Right","Capped":"Yes","Position":"AM L"},
{"Player Id":84,"Player":"Dusan Tadic","Goals":1,"Team":"Southampton","Nationality":"Serbia","DOB":null,"Height":181,"Continent":"Europe","Weight":76,"Foot":"Either","Capped":"Yes","Position":"AM L"},
{"Player Id":85,"Player":"James Ward-Prowse","Goals":1,"Team":"Southampton","Nationality":"England","DOB":null,"Height":173,"Continent":"Europe","Weight":66,"Foot":"Right","Capped":"No","Position":"AM R"},
{"Player Id":86,"Player":"Marko Arnautovic","Goals":1,"Team":"Stoke","Nationality":"Austrian","DOB":null,"Height":192,"Continent":"Europe","Weight":86,"Foot":"Either","Capped":"Yes","Position":"AM L"},
{"Player Id":87,"Player":"Bojan","Goals":1,"Team":"Stoke","Nationality":"Spain","DOB":null,"Height":175,"Continent":"Europe","Weight":74,"Foot":"Right","Capped":"Yes","Position":"AM C"},
{"Player Id":88,"Player":"Xherdan Shaqiri","Goals":1,"Team":"Stoke","Nationality":"Switzerland","DOB":null,"Height":169,"Continent":"Europe","Weight":72,"Foot":"Left","Capped":"Yes","Position":"AM R"},
{"Player Id":89,"Player":"Fernando Llorente","Goals":1,"Team":"Swansea","Nationality":"Spain","DOB":null,"Height":195,"Continent":"Europe","Weight":90,"Foot":"Either","Capped":"Yes","Position":"ST C"},
{"Player Id":90,"Player":"Gylfi Sigurdsson","Goals":1,"Team":"Swansea","Nationality":"Iceland","DOB":null,"Height":186,"Continent":"Europe","Weight":79,"Foot":"Either","Capped":"Yes","Position":"AM C"},
{"Player Id":91,"Player":"Erik Lamela","Goals":1,"Team":"Tottenham","Nationality":"Argentina","DOB":null,"Height":183,"Continent":"South America","Weight":79,"Foot":"Left","Capped":"Yes","Position":"AM R"},
{"Player Id":92,"Player":"Danny Rose","Goals":1,"Team":"Tottenham","Nationality":"England","DOB":null,"Height":172,"Continent":"Europe","Weight":73,"Foot":"Left","Capped":"Yes","Position":"D L"},
{"Player Id":93,"Player":"Victor Wanyama","Goals":1,"Team":"Tottenham","Nationality":"Kenya","DOB":null,"Height":188,"Continent":"Africa","Weight":77,"Foot":"Right","Capped":"Yes","Position":"DM"},
{"Player Id":94,"Player":"Jose Holebas","Goals":1,"Team":"Watford","Nationality":"Greece","DOB":null,"Height":184,"Continent":"Europe","Weight":79,"Foot":"Left","Capped":"Yes","Position":"D L"},
{"Player Id":95,"Player":"Odion Ighalo","Goals":1,"Team":"Watford","Nationality":"Nigeria","DOB":null,"Height":188,"Continent":"Africa","Weight":70,"Foot":"Right","Capped":"Yes","Position":"ST C"},
{"Player Id":96,"Player":"Roberto Pereyra","Goals":1,"Team":"Watford","Nationality":"Argentina","DOB":null,"Height":184,"Continent":"South America","Weight":74,"Foot":"Right","Capped":"Yes","Position":"M C"},
{"Player Id":97,"Player":"Isaac Success","Goals":1,"Team":"Watford","Nationality":"Nigeria","DOB":null,"Height":186,"Continent":"Africa","Weight":86,"Foot":"Right","Capped":"No","Position":"AM L"},
{"Player Id":98,"Player":"Juan Camilo Zuniga","Goals":1,"Team":"Watford","Nationality":"Columbia","DOB":null,"Height":172,"Continent":"South America","Weight":72,"Foot":"Right","Capped":"Yes","Position":"AM R"},
{"Player Id":99,"Player":"Gareth McAuley","Goals":1,"Team":"West Brom","Nationality":"Northern Ireland","DOB":null,"Height":195,"Continent":"Europe","Weight":90,"Foot":"Right","Capped":"Yes","Position":"D C"},
{"Player Id":100,"Player":"James McClean","Goals":1,"Team":"West Brom","Nationality":"Republic of Ireland","DOB":null,"Height":175,"Continent":"Europe","Weight":70,"Foot":"Left","Capped":"Yes","Position":"AM L"},
{"Player Id":101,"Player":"James Collins","Goals":1,"Team":"West Ham","Nationality":"Wales","DOB":null,"Height":193,"Continent":"Europe","Weight":90,"Foot":"Right","Capped":"Yes","Position":"D C"},
{"Player Id":102,"Player":"Manuel Lanzini","Goals":1,"Team":"West Ham","Nationality":"Argentina","DOB":null,"Height":167,"Continent":"South America","Weight":63,"Foot":"Right","Capped":"No","Position":"AM C"},
{"Player Id":103,"Player":"Dimitri Payet","Goals":1,"Team":"West Ham","Nationality":"France","DOB":null,"Height":175,"Continent":"Europe","Weight":77,"Foot":"Either","Capped":"Yes","Position":"AM L"},
{"Player Id":104,"Player":"Own Goal","Goals":1,"Team":"Man City","Nationality":"N/A","DOB":null,"Height":0,"Continent":"N/A","Weight":0,"Foot":"N/A","Capped":"N/A","Position":"N/A"},
{"Player Id":105,"Player":"Own Goal","Goals":1,"Team":"Everton","Nationality":"N/A","DOB":null,"Height":0,"Continent":"N/A","Weight":0,"Foot":"N/A","Capped":"N/A","Position":"N/A"},
{"Player Id":106,"Player":"Own Goal","Goals":1,"Team":"Southampton","Nationality":"N/A","DOB":null,"Height":0,"Continent":"N/A","Weight":0,"Foot":"N/A","Capped":"N/A","Position":"N/A"},
{"Player Id":107,"Player":"Own Goal","Goals":1,"Team":"Middlesbrough","Nationality":"N/A","DOB":null,"Height":0,"Continent":"N/A","Weight":0,"Foot":"N/A","Capped":"N/A","Position":"N/A"},
{"Player Id":108,"Player":"Own Goal","Goals":1,"Team":"Leicester","Nationality":"N/A","DOB":null,"Height":0,"Continent":"N/A","Weight":0,"Foot":"N/A","Capped":"N/A","Position":"N/A"},
{"Player Id":109,"Player":"Own Goal","Goals":1,"Team":"Tottenham","Nationality":"N/A","DOB":null,"Height":0,"Continent":"N/A","Weight":0,"Foot":"N/A","Capped":"N/A","Position":"N/A"}
];

var games = [
    
{"Date":"13-Aug","Home":"Arsenal","HScore":3,"Away":"Liverpool","Ascore":4},
{"Date":"13-Aug","Home":"Bournemouth","HScore":1,"Away":"Man Utd","Ascore":3},
{"Date":"13-Aug","Home":"Burnley","HScore":0,"Away":"Swansea","Ascore":1},
{"Date":"13-Aug","Home":"Chelsea","HScore":2,"Away":"West Ham","Ascore":1},
{"Date":"13-Aug","Home":"Crystal Palace","HScore":0,"Away":"West Brom","Ascore":1},
{"Date":"13-Aug","Home":"Everton","HScore":1,"Away":"Tottenham","Ascore":1},
{"Date":"13-Aug","Home":"Hull","HScore":2,"Away":"Leicester","Ascore":1},
{"Date":"13-Aug","Home":"Man City","HScore":2,"Away":"Sunderland","Ascore":1},
{"Date":"13-Aug","Home":"Middlesbrough","HScore":1,"Away":"Stoke","Ascore":1},
{"Date":"13-Aug","Home":"Southampton","HScore":1,"Away":"Watford","Ascore":1},
{"Date":"20-Aug","Home":"Leicester","HScore":0,"Away":"Arsenal","Ascore":0},
{"Date":"20-Aug","Home":"Burnley","HScore":2,"Away":"Liverpool","Ascore":0},
{"Date":"20-Aug","Home":"Man Utd","HScore":2,"Away":"Southampton","Ascore":0},
{"Date":"20-Aug","Home":"Stoke","HScore":1,"Away":"Man City","Ascore":4},
{"Date":"20-Aug","Home":"Sunderland","HScore":1,"Away":"Middlesbrough","Ascore":2},
{"Date":"20-Aug","Home":"Swansea","HScore":0,"Away":"Hull","Ascore":2},
{"Date":"20-Aug","Home":"Tottenham","HScore":1,"Away":"Crystal Palace","Ascore":0},
{"Date":"20-Aug","Home":"Watford","HScore":1,"Away":"Chelsea","Ascore":2},
{"Date":"20-Aug","Home":"West Brom","HScore":1,"Away":"Everton","Ascore":2},
{"Date":"20-Aug","Home":"West Ham","HScore":1,"Away":"Bournemouth","Ascore":0},
{"Date":"27-Aug","Home":"Chelsea","HScore":3,"Away":"Burnley","Ascore":0},
{"Date":"27-Aug","Home":"Crystal Palace","HScore":1,"Away":"Bournemouth","Ascore":1},
{"Date":"27-Aug","Home":"Everton","HScore":1,"Away":"Stoke","Ascore":0},
{"Date":"27-Aug","Home":"Hull","HScore":0,"Away":"Man Utd","Ascore":1},
{"Date":"27-Aug","Home":"Leicester","HScore":2,"Away":"Swansea","Ascore":1},
{"Date":"27-Aug","Home":"Man City","HScore":3,"Away":"West Ham","Ascore":1},
{"Date":"27-Aug","Home":"Southampton","HScore":1,"Away":"Sunderland","Ascore":1},
{"Date":"27-Aug","Home":"Tottenham","HScore":1,"Away":"Liverpool","Ascore":1},
{"Date":"27-Aug","Home":"Watford","HScore":1,"Away":"Arsenal","Ascore":3},
{"Date":"27-Aug","Home":"West Brom","HScore":0,"Away":"Middlesbrough","Ascore":0},
{"Date":"10-Sep","Home":"Arsenal","HScore":2,"Away":"Southampton","Ascore":1},
{"Date":"10-Sep","Home":"Bournemouth","HScore":1,"Away":"West Brom","Ascore":0},
{"Date":"10-Sep","Home":"Burnley","HScore":1,"Away":"Hull","Ascore":1},
{"Date":"10-Sep","Home":"Liverpool","HScore":4,"Away":"Leicester","Ascore":1},
{"Date":"10-Sep","Home":"Man Utd","HScore":1,"Away":"Man City","Ascore":2},
{"Date":"10-Sep","Home":"Middlesbrough","HScore":1,"Away":"Crystal Palace","Ascore":2},
{"Date":"10-Sep","Home":"Stoke","HScore":0,"Away":"Tottenham","Ascore":4},
{"Date":"10-Sep","Home":"Sunderland","HScore":0,"Away":"Everton","Ascore":3},
{"Date":"10-Sep","Home":"Swansea","HScore":2,"Away":"Chelsea","Ascore":2},
{"Date":"10-Sep","Home":"West Ham","HScore":2,"Away":"Watford","Ascore":4},
{"Date":"17-Sep","Home":"Chelsea","HScore":1,"Away":"Liverpool","Ascore":2},
{"Date":"17-Sep","Home":"Crystal Palace","HScore":4,"Away":"Stoke","Ascore":1},
{"Date":"17-Sep","Home":"Everton","HScore":3,"Away":"Middlesbrough","Ascore":1},
{"Date":"17-Sep","Home":"Hull","HScore":1,"Away":"Arsenal","Ascore":4},
{"Date":"17-Sep","Home":"Leicester","HScore":3,"Away":"Burnley","Ascore":0},
{"Date":"17-Sep","Home":"Man City","HScore":4,"Away":"Bournemouth","Ascore":0},
{"Date":"17-Sep","Home":"Southampton","HScore":1,"Away":"Swansea","Ascore":0},
{"Date":"17-Sep","Home":"Tottenham","HScore":1,"Away":"Sunderland","Ascore":0},
{"Date":"17-Sep","Home":"Watford","HScore":3,"Away":"Man Utd","Ascore":1},
{"Date":"17-Sep","Home":"West Brom","HScore":4,"Away":"West Ham","Ascore":2},
{"Date":"24-Sep","Home":"Arsenal","HScore":3,"Away":"Chelsea","Ascore":0},
{"Date":"24-Sep","Home":"Bournemouth","HScore":1,"Away":"Everton","Ascore":0},
{"Date":"24-Sep","Home":"Burnley","HScore":2,"Away":"Watford","Ascore":0},
{"Date":"24-Sep","Home":"Liverpool","HScore":5,"Away":"Hull","Ascore":1},
{"Date":"24-Sep","Home":"Man Utd","HScore":4,"Away":"Leicester","Ascore":1},
{"Date":"24-Sep","Home":"Middlesbrough","HScore":1,"Away":"Tottenham","Ascore":2},
{"Date":"24-Sep","Home":"Stoke","HScore":1,"Away":"West Brom","Ascore":1},
{"Date":"24-Sep","Home":"Sunderland","HScore":2,"Away":"Crystal Palace","Ascore":3},
{"Date":"24-Sep","Home":"Swansea","HScore":1,"Away":"Man City","Ascore":3},
{"Date":"24-Sep","Home":"West Ham","HScore":0,"Away":"Southampton","Ascore":3},
{"Date":"01-Oct","Home":"Burnley","HScore":0,"Away":"Arsenal","Ascore":1},
{"Date":"01-Oct","Home":"Everton","HScore":1,"Away":"Crystal Palace","Ascore":1},
{"Date":"01-Oct","Home":"Hull","HScore":0,"Away":"Chelsea","Ascore":2},
{"Date":"01-Oct","Home":"Leicester","HScore":0,"Away":"Southampton","Ascore":0},
{"Date":"01-Oct","Home":"Man Utd","HScore":1,"Away":"Stoke","Ascore":1},
{"Date":"01-Oct","Home":"Sunderland","HScore":1,"Away":"West Brom","Ascore":1},
{"Date":"01-Oct","Home":"Swansea","HScore":1,"Away":"Liverpool","Ascore":2},
{"Date":"01-Oct","Home":"Tottenham","HScore":2,"Away":"Man City","Ascore":0},
{"Date":"01-Oct","Home":"Watford","HScore":2,"Away":"Bournemouth","Ascore":2},
{"Date":"01-Oct","Home":"West Ham","HScore":1,"Away":"Middlesbrough","Ascore":1}
];

var goals = [ 
    
{"Game ID":0,"Player ID":12,"Goals Scored":1},
{"Game ID":0,"Player ID":45,"Goals Scored":1},
{"Game ID":0,"Player ID":79,"Goals Scored":1},
{"Game ID":0,"Player ID":15,"Goals Scored":2},
{"Game ID":0,"Player ID":17,"Goals Scored":1},
{"Game ID":0,"Player ID":18,"Goals Scored":1},
{"Game ID":1,"Player ID":47,"Goals Scored":1},
{"Game ID":1,"Player ID":38,"Goals Scored":1},
{"Game ID":1,"Player ID":76,"Goals Scored":1},
{"Game ID":1,"Player ID":7,"Goals Scored":1},
{"Game ID":2,"Player ID":9,"Goals Scored":1},
{"Game ID":3,"Player ID":28,"Goals Scored":1},
{"Game ID":3,"Player ID":0,"Goals Scored":1},
{"Game ID":3,"Player ID":101,"Goals Scored":1},
{"Game ID":4,"Player ID":23,"Goals Scored":1},
{"Game ID":5,"Player ID":60,"Goals Scored":1},
{"Game ID":5,"Player ID":91,"Goals Scored":1},
{"Game ID":6,"Player ID":63,"Goals Scored":1},
{"Game ID":6,"Player ID":14,"Goals Scored":1},
{"Game ID":6,"Player ID":68,"Goals Scored":1},
{"Game ID":7,"Player ID":2,"Goals Scored":1},
{"Game ID":7,"Player ID":104,"Goals Scored":1},
{"Game ID":7,"Player ID":8,"Goals Scored":1},
{"Game ID":8,"Player ID":81,"Goals Scored":1},
{"Game ID":8,"Player ID":88,"Goals Scored":1},
{"Game ID":9,"Player ID":82,"Goals Scored":1},
{"Game ID":9,"Player ID":11,"Goals Scored":1},
{"Game ID":11,"Player ID":53,"Goals Scored":1},
{"Game ID":11,"Player ID":50,"Goals Scored":1},
{"Game ID":12,"Player ID":7,"Goals Scored":2},
{"Game ID":13,"Player ID":87,"Goals Scored":1},
{"Game ID":13,"Player ID":2,"Goals Scored":2},
{"Game ID":13,"Player ID":37,"Goals Scored":2},
{"Game ID":14,"Player ID":41,"Goals Scored":1},
{"Game ID":14,"Player ID":20,"Goals Scored":2},
{"Game ID":15,"Player ID":65,"Goals Scored":1},
{"Game ID":15,"Player ID":64,"Goals Scored":1},
{"Game ID":16,"Player ID":93,"Goals Scored":1},
{"Game ID":17,"Player ID":11,"Goals Scored":1},
{"Game ID":17,"Player ID":54,"Goals Scored":1},
{"Game ID":17,"Player ID":0,"Goals Scored":1},
{"Game ID":18,"Player ID":99,"Goals Scored":1},
{"Game ID":18,"Player ID":62,"Goals Scored":1},
{"Game ID":18,"Player ID":32,"Goals Scored":1},
{"Game ID":19,"Player ID":3,"Goals Scored":1},
{"Game ID":20,"Player ID":28,"Goals Scored":1},
{"Game ID":20,"Player ID":29,"Goals Scored":1},
{"Game ID":20,"Player ID":55,"Goals Scored":1},
{"Game ID":21,"Player ID":30,"Goals Scored":1},
{"Game ID":21,"Player ID":26,"Goals Scored":1},
{"Game ID":22,"Player ID":105,"Goals Scored":1},
{"Game ID":23,"Player ID":19,"Goals Scored":1},
{"Game ID":24,"Player ID":34,"Goals Scored":1},
{"Game ID":24,"Player ID":69,"Goals Scored":1},
{"Game ID":24,"Player ID":9,"Goals Scored":1},
{"Game ID":25,"Player ID":6,"Goals Scored":2},
{"Game ID":25,"Player ID":72,"Goals Scored":1},
{"Game ID":25,"Player ID":3,"Goals Scored":1},
{"Game ID":26,"Player ID":83,"Goals Scored":1},
{"Game ID":26,"Player ID":8,"Goals Scored":1},
{"Game ID":27,"Player ID":5,"Goals Scored":1},
{"Game ID":27,"Player ID":92,"Goals Scored":1},
{"Game ID":28,"Player ID":96,"Goals Scored":1},
{"Game ID":28,"Player ID":24,"Goals Scored":1},
{"Game ID":28,"Player ID":4,"Goals Scored":1},
{"Game ID":28,"Player ID":25,"Goals Scored":1},
{"Game ID":30,"Player ID":44,"Goals Scored":1},
{"Game ID":30,"Player ID":24,"Goals Scored":1},
{"Game ID":30,"Player ID":106,"Goals Scored":1},
{"Game ID":31,"Player ID":27,"Goals Scored":1},
{"Game ID":32,"Player ID":49,"Goals Scored":1},
{"Game ID":32,"Player ID":14,"Goals Scored":1},
{"Game ID":33,"Player ID":16,"Goals Scored":2},
{"Game ID":33,"Player ID":18,"Goals Scored":1},
{"Game ID":33,"Player ID":17,"Goals Scored":1},
{"Game ID":33,"Player ID":34,"Goals Scored":1},
{"Game ID":34,"Player ID":7,"Goals Scored":1},
{"Game ID":34,"Player ID":35,"Goals Scored":1},
{"Game ID":34,"Player ID":36,"Goals Scored":1},
{"Game ID":35,"Player ID":78,"Goals Scored":1},
{"Game ID":35,"Player ID":13,"Goals Scored":1},
{"Game ID":35,"Player ID":59,"Goals Scored":1},
{"Game ID":36,"Player ID":10,"Goals Scored":2},
{"Game ID":36,"Player ID":42,"Goals Scored":1},
{"Game ID":36,"Player ID":43,"Goals Scored":1},
{"Game ID":37,"Player ID":1,"Goals Scored":3},
{"Game ID":38,"Player ID":90,"Goals Scored":1},
{"Game ID":38,"Player ID":9,"Goals Scored":1},
{"Game ID":38,"Player ID":0,"Goals Scored":2},
{"Game ID":39,"Player ID":3,"Goals Scored":2},
{"Game ID":39,"Player ID":95,"Goals Scored":1},
{"Game ID":39,"Player ID":21,"Goals Scored":1},
{"Game ID":39,"Player ID":94,"Goals Scored":1},
{"Game ID":39,"Player ID":11,"Goals Scored":1},
{"Game ID":40,"Player ID":0,"Goals Scored":1},
{"Game ID":40,"Player ID":71,"Goals Scored":1},
{"Game ID":40,"Player ID":70,"Goals Scored":1},
{"Game ID":41,"Player ID":57,"Goals Scored":1},
{"Game ID":41,"Player ID":30,"Goals Scored":1},
{"Game ID":41,"Player ID":58,"Goals Scored":1},
{"Game ID":41,"Player ID":86,"Goals Scored":1},
{"Game ID":42,"Player ID":32,"Goals Scored":1},
{"Game ID":42,"Player ID":61,"Goals Scored":1},
{"Game ID":42,"Player ID":1,"Goals Scored":1},
{"Game ID":42,"Player ID":107,"Goals Scored":1},
{"Game ID":43,"Player ID":14,"Goals Scored":1},
{"Game ID":43,"Player ID":4,"Goals Scored":2},
{"Game ID":43,"Player ID":46,"Goals Scored":1},
{"Game ID":43,"Player ID":12,"Goals Scored":1},
{"Game ID":44,"Player ID":33,"Goals Scored":2},
{"Game ID":44,"Player ID":108,"Goals Scored":1},
{"Game ID":45,"Player ID":35,"Goals Scored":1},
{"Game ID":45,"Player ID":36,"Goals Scored":1},
{"Game ID":45,"Player ID":6,"Goals Scored":1},
{"Game ID":45,"Player ID":73,"Goals Scored":1},
{"Game ID":46,"Player ID":39,"Goals Scored":1},
{"Game ID":47,"Player ID":43,"Goals Scored":1},
{"Game ID":48,"Player ID":11,"Goals Scored":1},
{"Game ID":48,"Player ID":98,"Goals Scored":1},
{"Game ID":48,"Player ID":21,"Goals Scored":1},
{"Game ID":48,"Player ID":19,"Goals Scored":1},
{"Game ID":49,"Player ID":22,"Goals Scored":2},
{"Game ID":49,"Player ID":23,"Goals Scored":1},
{"Game ID":49,"Player ID":100,"Goals Scored":1},
{"Game ID":49,"Player ID":3,"Goals Scored":1},
{"Game ID":49,"Player ID":102,"Goals Scored":1},
{"Game ID":50,"Player ID":4,"Goals Scored":1},
{"Game ID":50,"Player ID":12,"Goals Scored":1},
{"Game ID":50,"Player ID":25,"Goals Scored":1},
{"Game ID":51,"Player ID":48,"Goals Scored":1},
{"Game ID":52,"Player ID":51,"Goals Scored":1},
{"Game ID":52,"Player ID":52,"Goals Scored":1},
{"Game ID":53,"Player ID":66,"Goals Scored":1},
{"Game ID":53,"Player ID":5,"Goals Scored":2},
{"Game ID":53,"Player ID":15,"Goals Scored":1},
{"Game ID":53,"Player ID":17,"Goals Scored":1},
{"Game ID":54,"Player ID":77,"Goals Scored":1},
{"Game ID":54,"Player ID":38,"Goals Scored":1},
{"Game ID":54,"Player ID":19,"Goals Scored":1},
{"Game ID":54,"Player ID":75,"Goals Scored":1},
{"Game ID":54,"Player ID":67,"Goals Scored":1},
{"Game ID":55,"Player ID":80,"Goals Scored":1},
{"Game ID":55,"Player ID":10,"Goals Scored":2},
{"Game ID":56,"Player ID":40,"Goals Scored":1},
{"Game ID":56,"Player ID":23,"Goals Scored":1},
{"Game ID":57,"Player ID":8,"Goals Scored":2},
{"Game ID":57,"Player ID":56,"Goals Scored":1},
{"Game ID":57,"Player ID":31,"Goals Scored":1},
{"Game ID":57,"Player ID":13,"Goals Scored":1},
{"Game ID":58,"Player ID":89,"Goals Scored":1},
{"Game ID":58,"Player ID":2,"Goals Scored":2},
{"Game ID":58,"Player ID":6,"Goals Scored":1},
{"Game ID":59,"Player ID":39,"Goals Scored":1},
{"Game ID":59,"Player ID":84,"Goals Scored":1},
{"Game ID":59,"Player ID":85,"Goals Scored":1},
{"Game ID":60,"Player ID":44,"Goals Scored":1},
{"Game ID":61,"Player ID":1,"Goals Scored":1},
{"Game ID":61,"Player ID":13,"Goals Scored":1},
{"Game ID":62,"Player ID":0,"Goals Scored":1},
{"Game ID":62,"Player ID":29,"Goals Scored":1},
{"Game ID":64,"Player ID":40,"Goals Scored":1},
{"Game ID":64,"Player ID":74,"Goals Scored":1},
{"Game ID":65,"Player ID":41,"Goals Scored":1},
{"Game ID":65,"Player ID":22,"Goals Scored":1},
{"Game ID":66,"Player ID":9,"Goals Scored":1},
{"Game ID":66,"Player ID":16,"Goals Scored":1},
{"Game ID":66,"Player ID":5,"Goals Scored":1},
{"Game ID":67,"Player ID":10,"Goals Scored":1},
{"Game ID":67,"Player ID":109,"Goals Scored":1},
{"Game ID":68,"Player ID":21,"Goals Scored":1},
{"Game ID":68,"Player ID":97,"Goals Scored":1},
{"Game ID":68,"Player ID":27,"Goals Scored":1},
{"Game ID":68,"Player ID":26,"Goals Scored":1},
{"Game ID":69,"Player ID":103,"Goals Scored":1},
{"Game ID":69,"Player ID":20,"Goals Scored":1}
    
];

firebase.auth().signInWithEmailAndPassword('admin@admin.com', 'admin1').catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
 
console.log(errorCode + '   ' + errorMessage);
  // ...
});

var results = firebase.database().ref('teams/').set(teams);

var results = firebase.database().ref('players/').set(players);

var results = firebase.database().ref('games/').set(games);

var results = firebase.database().ref('goals/').set(goals);



// ---------- PLAYER SECTION -------------

//Create Goalscorer table
function createPlayerTableRow(record){
    
    var tableRow = document.createElement('tr');
    
    var playerCell = document.createElement('td');
    playerCell.innerHTML = record.Player;
    
    var goalsCell = document.createElement('td');
    goalsCell.innerHTML = record.Goals;
    
    var teamCell = document.createElement('td');
    teamCell.innerHTML = record.Team;
    
    var nationalityCell = document.createElement('td');
    nationalityCell.innerHTML = record.Nationality;
    
    var DOBCell = document.createElement('td');
    DOBCell.innerHTML = record.DOB;
    
    var heightCell = document.createElement('td');
    heightCell.innerHTML = record.Height;
    
    var continentCell = document.createElement('td');
    continentCell.innerHTML = record.Continent;
    
    var weightCell = document.createElement('td');
    weightCell.innerHTML = record.Weight;
    
    var footCell = document.createElement('td');
    footCell.innerHTML = record.Foot;
    
    var capCell = document.createElement('td');
    capCell.innerHTML = record.Capped;
    
    var posCell = document.createElement('td');
    posCell.innerHTML = record.Position;

    
    //Sends data to table
    tableRow.appendChild(playerCell);
    tableRow.appendChild(goalsCell);
    tableRow.appendChild(teamCell);
    tableRow.appendChild(nationalityCell);
    tableRow.appendChild(DOBCell);
    tableRow.appendChild(heightCell);
    tableRow.appendChild(continentCell);
    tableRow.appendChild(weightCell);
    tableRow.appendChild(footCell);
    tableRow.appendChild(capCell);
    tableRow.appendChild(posCell);
    
    return tableRow;

}

/*Retrieve data to table
firebase.database().ref('players/').orderByChild('Goals').once('value').then(function(snapshot) {
  var finish = snapshot.val()
  
  var table = document.createElement('table');
    //table.className = 'responstable';
    
  var headerRow = document.createElement('tr');

  var htmlString = '<th>Player</th><th>Goals</th><th>Team</th><th>Nationality</th><th>Date Of Birth</th><th>Height (CM)</th><th>Continent</th><th>Weight (KG)</th><th>Preferred Foot</th><th>Internationally Capped</th><th>Position</th>'
  
  headerRow.innerHTML = htmlString;
  table.appendChild(headerRow);
    
  
  for (var i = 0; i < finish.length; i++){
      
      var tableRow = createPlayerTableRow(finish[i]);
      
      table.appendChild(tableRow);
  }
    
  document.body.appendChild(table);
});*/

//Upload images

