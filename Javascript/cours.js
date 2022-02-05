
var form = document.getElementById("test");



// Calcul de la distance entre deux coordonnées GPS
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

// Simple fonction de conversion de degrés en radians
function deg2rad(deg) {
  return deg * (Math.PI/180)
}


console.log("HEY");

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "airports.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

// Récupère les données du fichier ligne par ligne et les place dans l'array' lines[], qui contient toutes les lignes.
function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(data[j]);
            }
            lines.push(tarr);
        }
    }



// Mécanisme de complétion automatique pour la page HTML en javascript

// Premièrement on crée le tableau contenant l'ensemble des noms d'aéroports
var airportArray = [];
for (var j=0; j < lines.length; j++)
        {
            var test = lines[j];
            var sliced = test.slice(1, 2);
            var res = sliced[0].replace(/\"/g, "");
            airportArray.push(res);
        }


function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      
      test2 = document.getElementById("testing");
      test2.setAttribute("style", "margin-top: -63px;");

      a = document.createElement("DIV");
      a.setAttribute("data-simplebar", "");
      a.setAttribute("data-simplebar-auto-hide", "false");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      a.setAttribute("style", "margin-top: -150px;");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong style=\"color: green;\">" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    test = document.getElementById("testing");
      test.setAttribute("style", "margin-top: 0px;");
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
} 

autocomplete(document.getElementById("airport1"), airportArray);
autocomplete(document.getElementById("airport2"), airportArray);









    // Fonction déclenchée lors du clic sur le bouton submit.
	form.addEventListener("submit", function (e) {
    	var airport1 = "\"" + form.elements.airport1.value + "\""; //On entoure ce qu'on récupère du formulaire par des guillemets pour le comparer avec le contenu du fichier, qui place ses noms d'aéroport entre guillemets
    	var airport2 = "\"" + form.elements.airport2.value + "\"";
    	
        // Variables outil. ATTENTION elles sont définies en local, et non en global !
        var airport1Found = false;
    	var airport2Found = false;
        var LatAirport1 = 0;
        var LongAirport1 = 0;
        var LatAirport2 = 0;
        var LongAirport2 = 0;

        // On parcourt le tableau et on récupère à chaque fois le second élément, c'est-à-dire le nom de l'aéroport, et on le compare avec ce qu'on a récupéré du formulaire. Si on trouve une correspondance, on récupère sur la même ligne les coordonnées GPS de l'aéroport.
        // Lorsqu'on a trouvé les deux aéroports dans le fichier, on calcule la distance à partir des coordonnées GPS (on l'arrondis à 1 chiffre après la virgule), on calcule le CO2 correspondant, et le nombre d'arbres à planter.
    	for (var j=0; j < lines.length; j++)
    	{
    		var test = lines[j];
    		var sliced = test.slice(1, 2);
            

    		if (airport1 == sliced)
    	{
    		airport1Found = true;
            LatAirport1 = test.slice(6, 7);
            LongAirport1 = test.slice(7,8);

    	}
    		if (airport2 == sliced)
    	{
    		airport2Found = true;
            LatAirport2 = test.slice(6, 7);
            LongAirport2 = test.slice(7,8);
    	}
    	if (airport1Found && airport2Found && airport1 != airport2)
    	{
            var kilometers = getDistanceFromLatLonInKm(LatAirport1,LongAirport1,LatAirport2,LongAirport2).toFixed(1);
            var CO2emitted = kilometers * 0.000285;
            var trees = CO2emitted / 0.0072;
            var treesDecollage = (CO2emitted + 1.35) / 0.000285;
            kilometers = parseFloat(kilometers).toFixed(2);
            CO2emitted = parseFloat(CO2emitted).toFixed(2);
            trees = parseFloat(trees).toFixed(2);
            treesDecollage = parseFloat(treesDecollage).toFixed(2);
            money = parseFloat(trees * 3).toFixed(2);
            var textMessage = "La distance entre ces deux aéroports est de " + kilometers + "km. Cela équivaut à " + CO2emitted + " tonnes de CO2 (285 g/passager/km). Vous devez donc planter " + trees + " arbres pour compenser votre voyage (le décollage est compté dans le chiffre). Si vous ne le faîtes pas, Amélie vous enverra des milliers de photos de fleur par jour jusqu'à ce que vous obéissiez."
    		document.getElementById("distance").innerHTML = kilometers + "km";
            document.getElementById("emittedCO2").innerHTML = CO2emitted;
            document.getElementById("treesToPlant").innerHTML = trees;
            document.getElementById("moneyToCompensate").innerHTML = money + "€";
    		break;
    	}


    	}

   		
    
    	e.preventDefault(); // Annulation de l'envoi des données
	});


}



























// 0.017 tonnes de CO2 produit pour 100 km en avion ; soit 0.00017 pour 1km environ (agence européenne de l'environnement : 0.000285)
// 7.2 kg de CO2 séquestré par arbre et par an, soit 0.0072 tonnes.
// Au décollage, 1.35 tonnes de CO2 émis pour un avion ; 
// 285 g de CO2/passager/km pour un avion selon les rapports de l’Agence Européenne de l’Environnement.
// 88 passagers en moyenne pour un avion, toujours selon l'Agence Européenne.
// En considérant que 1.35 tonnes de CO2 sont émises au décollage, ça fait 0.01534 tonnes de CO2 par passager ; ce qui rajoute 21 arbres pour chaque voyage.

// Autocomplete : trier par ordre alphabétique.