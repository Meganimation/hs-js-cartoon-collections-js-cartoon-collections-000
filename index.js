 

dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];
planeteerCalls = ["earth", "wind", "fire", "water", "heart"];
shortWords = ["wind", "fire"];
assortedWords = ["earth", "wind", "heart", "fire"]; 


function dwarfRollCall(dwarves) {
  var dwarveCount = '';
  
  
  for(let i = 0; i < dwarves.length; i++) {
    dwarveCount += `${i + 1}. ${dwarves[i]} `
  }
  return dwarveCount;
}

function summonCaptainPlanet(array){
  return array.map(function(item){
		return item.toUpperCase() + "!";
	});
}	
summonCaptainPlanet(planeteerCalls);


function longPlaneteerCalls(words) {
  words.some(longPlaneteerCalls);
function longPlaneteerCalls(items){
 return items.length > 4;
}	
}


