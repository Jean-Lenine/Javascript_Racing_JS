        window.onload = function()
        {
        	var div = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1];

        class Hero{	
			constructor(nom, classe, intel, force)
			{
				this.nom = nom ;
				this.classe = classe ; 
	 			this.intel = intel ;
	 			this.force = force;
	 		}

	 		toString()
	 		{

			 	if (this.intel <= 1 && this.force > 1) {
		            div.innerHTML += "Je suis " + this.name + " le " + this.classe + ", j'ai " + this.intel + " point d'intelligence et " + this.force + " points de force ! <br>";
		        }
		        if (this.force <= 1 && this.intel > 1) {
		            div.innerHTML += "Je suis " + this.name + " le " + this.classe + ", j'ai " + this.intel + " points d'intelligence et " + this.force + " point de force ! <br>";
		        }
		        if (this.intel > 1 && this.force > 1) {
		            div.innerHTML += "Je suis " + this.name + " le " + this.classe + ", j'ai " + this.intel + " points d'intelligence et " + this.force + " points de force ! <br>";
		        }
		        if (this.intel <= 1 && this.force <= 1) {
		            div.innerHTML += "Je suis " + this.name + " le " + this.classe + ", j'ai " + this.intel + " point d'intelligence et " + this.force + " point de force ! <br>";
		        }
			
			}
		}

		var mage = new Hero("Amadeus", "mage", 10, 3);
		var guerrier = new Hero("Pontius", "guerrier", 1, 9);

		mage.toString();
        guerrier.toString();
	}