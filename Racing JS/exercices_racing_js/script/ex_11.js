window.onload = function cokie(){
	
	var bod = document.body;
	var div1 = bod.childNodes[1].childNodes[1].childNodes[5];
	var contdiv = div1.childNodes[1];
	var link = contdiv.childNodes[1];
	if(document.cookie.indexOf("acceptsCookies=") >= 0){
		contdiv.innerHTML="";

		var crdiv = document.createElement("div");
		var btn = document.createElement("button");

		div1.appendChild(crdiv);
		var div2 = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[3];
		div2.appendChild(btn);
		
		document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[3].childNodes[0].innerHTML = "Supprimer le cookie";

		var sppr = div2.childNodes[0];
		sppr.onclick = function(){
			var cookieString = 'acceptsCookies=';
			cookieString += ';max-age=0';
			cookieString += 'expires=-1';
			document.cookie = cookieString;
			window.location.reload();
		}
	}
	else{
		link.onclick = function(){
			var date = new Date();
			date.setTime(date.getTime() +1 * 3600 * 1000);
			document.cookie = "acceptsCookie = true; expires="+date.toUTCString();
			contdiv.innerHTML="";

			var crdiv = document.createElement("div");
			var btn = document.createElement("button");

			div1.appendChild(crdiv);
			var div2 = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[3];
			div2.appendChild(btn);
		
			document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[3].childNodes[0].innerHTML = "Supprimer le cookie";

			var sppr = div2.childNodes[0];
			sppr.onclick = function(){
			var cookieString = 'acceptsCookies=';
			cookieString += ';max-age=0';
			cookieString += 'expires=-1';
			document.cookie = cookieString;
			window.location.reload();
			}
		}
	}
}

// Checked: Samedi 25 Novembre -- MàF : 