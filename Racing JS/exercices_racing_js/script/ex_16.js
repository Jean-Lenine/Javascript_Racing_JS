var i = 0;
var verif = [0,0,0,0,0,0,0,0,0,0,0];

document.onkeydown = function(event){
	var bod = document.body;
	var div1 = bod.childNodes[1].childNodes[1].childNodes[5];
	var contdiv = div1.childNodes[1];
	var konami = ['ArrowLeft', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp','ArrowDown','ArrowLeft', 'ArrowRight', 'ArrowRight', 'A', 'B'];

	if(verif != [0,0,0,0,0,0,0,0,0,0,0]){
		if(konami[i] == event.key){
			verif[i] = 1;
			i++;
		}
		else if(event.key == 'ArrowUp' || event.key == 'ArrowDown' || event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'A' || event.key == 'B'){
			verif = [0,0,0,0,0,0,0,0,0,0,0];
			i = 0;
		}
		if(verif[10] == '1'){
		contdiv.innerHTML = "Hey! That's my Konami code!";
		}
	}
}