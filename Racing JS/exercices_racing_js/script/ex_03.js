window.onload = function ()
{
  var div = document.body.firstElementChild.firstElementChild.lastElementChild.firstElementChild;
 
 div.onclick = function()
  	{
  		var nom = prompt('Quel est votre nom?');
  		while(nom ==null || nom =="")
  		{
  			var nom = prompt('Quel est votre nom?');
  		}
  		if (nom != null)
  		{
    		var conf = confirm("Etes vous vraiement sur que "+nom+" est votre nom ?");
    		if(conf == true)
    		{
    			alert("Bonjour "+nom+" !");
    			div.innerHTML = "Bonjour "+nom+" !";
    		}
    	}
	}
}
