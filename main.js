// Write your JavaScript code here!

var choosePlanet = document.getElementById("planets");
  
var planets = [
    ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
  ];

  for (var i=0; i<planets.length; i++ ){
       choosePlanet.options.add(new Option(planets[i][0]));
      }
  function handleClickEvent() {
    var planetName = choosePlanet.options[choosePlanet.selectedIndex].value;
    var weight = document.getElementById("user-weight").value;
    
        for (var i=0; i<planets.length; i++) {
            if (planetName === planets[i][0]) {
                result = weight * planets[i][1];
                console.log(result);
            document.getElementById("output").innerHTML = 'If you were on ' + planetName + ', you would weigh ' + result + 'lbs!'
            result;
            
            } 
        }    
      }

     
  