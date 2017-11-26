var count = 1;

var script = function(){
	var a = document.body.childNodes;

	a = a[1];
	a = a.childNodes[1];
	a = a.childNodes[5];	
	a.onclick = function(){
		a.childNodes[1].innerHTML = count;
		count++;
	}
}

window.onload = script;