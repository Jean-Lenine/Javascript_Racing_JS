// function calculatrice(event)
// {
//   var operateur;
//   var div = document.body.firstElementChild.firstElementChild.lastElementChild.firstElementChild.lastElementChild;
//
//   div.element[1].onclick = function()
//   {
//         alert('tese');
//   }
// }

window.onload = function() {

  var div = document.body.firstElementChild.firstElementChild.lastElementChild.firstElementChild.lastElementChild.childNodes;
  var result = document.body.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild;

  var val1 = '';
  var val2 = '';
  var oprEx = false;
  var opr = '';

  for (var i = 1; i < div.length; i+=2) {
    div[i].setAttribute("onclick", "affiche(this)");
    console.log(div[i]);
  }
  affiche = function(a) {
      if(oprEx == false && a.innerHTML != 'x' && a.innerHTML != '+' && a.innerHTML != '/' && a.innerHTML != '-' && a.innerHTML != '=' && a.innerHTML != '%')
      {
        console.log(a.innerHTML);

        val1 = val1 + a.innerHTML;
        console.log(val1);
      }
      if( a.innerHTML == '%' || a.innerHTML == '/' || a.innerHTML == '+' || a.innerHTML == '-' || a.innerHTML == 'x')
      {
        opr = a.innerHTML;
        oprEx = true;
      }
      console.log(oprEx);

      if(oprEx == true && a.innerHTML != 'x' && a.innerHTML != '+' && a.innerHTML != '/' && a.innerHTML != '-' && a.innerHTML != '=' && a.innerHTML != '%')
      {
        val2 = val2 + a.innerHTML;
        console.log(val2);
      }
      console.log('a.inerHTML = '+a.innerHTML);

      if(a.innerHTML == 'C')
      {
          result.innerHTML = "";
          val1 = '';
          val2 = '';
          //result = '';
          opr = '';
          oprEx = false;
      }

      result.innerHTML = val1 + opr + val2;
      if(a.innerHTML == '=')
      {
        var resultat;
        if(opr == '+')
        {
          val1 = parseInt(val1)+parseInt(val2);
        }
        if(opr == '-')
        {
          val1 = val1-val2;
        }
        if(opr == '/')
        {
          val1 = val1/val2;
        }
        if(opr == '%')
        {
          val1 = val1%val2;
        }
        if(opr == 'x')
        {
          val1 = val1*val2;
        }
        result.innerHTML = val1;
        val2= '';
      }
  }

}
