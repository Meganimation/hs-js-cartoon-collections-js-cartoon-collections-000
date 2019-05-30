 

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
  var longWord = false;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      longWord = true;
    }
  }
  return longWord;
}	

function findTheCheese (foods) {
	var cheeses = ["cheddar", "gouda", "camembert"];
	for (var i = 0; i < foods.length; i++) {
		for (var a = 0; a < cheeses.length; a++) {
			if ( cheeses[a]=== foods[i] ) {
				return foods[i]; 
			}
		}
	}
	return "no cheese!";
}




