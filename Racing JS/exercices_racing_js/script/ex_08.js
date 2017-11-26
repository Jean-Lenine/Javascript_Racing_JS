window.onload = function(){
	var bod = document.body;
	var div = bod.childNodes[1].childNodes[1].childNodes[5];
	var contdiv = div.childNodes[1];

	var arraydiv = [contdiv];
	var black = 0; 		// rgb(0, 0, 0)
	var orange = 0; 	// rgb(255, 165, 0)
	var purple = 0; 	// rgb(128, 0, 128)
	var olive = 0; 		// rgb(128, 128, 0)

	var i = 1;

	arraydiv.forEach(function(val){
		while(contdiv.childNodes[i]){
			var color = window.getComputedStyle(val.childNodes[i], null).getPropertyValue('background-color');
			i += 2;
			if (color == 'rgb(0, 0, 0)'){
				black++;
			}
			else if(color == 'rgb(255, 165, 0)'){
				orange++;
			}
			else if(color == 'rgb(128, 0, 128)'){
				purple++;
			}
			else if(color == 'rgb(128, 128, 0)'){
				olive++;
			}
		}
	});
		var y = 1;
		while(contdiv.childNodes[y]){
			if(orange > 0){
				contdiv.childNodes[y].style.backgroundColor = 'rgb(255, 165, 0)';
				y += 2;
				orange--;
			}
			
			if(purple > 0){
				contdiv.childNodes[y].style.backgroundColor = 'rgb(128, 0, 128)';
				y += 2;
				purple--;
			}
			
			if(black > 0){
				contdiv.childNodes[y].style.backgroundColor = 'rgb(0, 0, 0)';
				y += 2;
				black--;
			}
			
			if(olive > 0){
				contdiv.childNodes[y].style.backgroundColor = 'rgb(128, 128, 0)';
				y += 2;
				olive--;
			}
		}
};

// Checked: Samedi 25 Novembre  -- En commentaire pour la version avec le "classement" des couleurs par couleur.