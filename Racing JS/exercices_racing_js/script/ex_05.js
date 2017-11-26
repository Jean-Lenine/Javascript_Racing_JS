window.onload = function ()
{
	var div = document.body.childNodes[1].childNodes[1].childNodes[5];
    var indiv = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1];

    var plus = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[1];

    var moins = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[3];

    var selector = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[5];
    
    var db = document.body;
	  var style = window.getComputedStyle(db, null).getPropertyValue('font-size');
	  var fontSize = parseFloat(style); 
	  var un = 1;

   plus.onclick = function ()
   {
   	un++;
   	db.style.fontSize = (fontSize + un)+"px";
   }

   moins.onclick = function()
   {
   	un--;
   	db.style.fontSize = (fontSize + un)+"px";
   }

   selector.onchange = function ()
   {
   	db.style.background = selector.value;
   }
};