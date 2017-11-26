	var n = "";
document.onkeydown = function eve(event) {
	while(n.length >= 42)
	{
		var l = event.key.length;
		n = n.substr(l);
	}

	n = n.concat(event.key);
	var div = document.body.firstElementChild.firstElementChild.lastElementChild.firstElementChild;
	div.innerHTML = n;
}
