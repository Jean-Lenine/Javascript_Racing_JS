window.onload = function(){

	myStorage = window.localStorage;

	var bod = document.body;
	var div1 = bod.childNodes[1].childNodes[1].childNodes[5];
	var contdiv = div1.childNodes[1];

	localStorage.setItem('pangolin', "<img src=https://wac.epitech.eu/www/racingjs/pangolin.jpg>");
	var pangolin = localStorage.getItem("pangolin");
	contdiv.innerHTML = pangolin;
} 