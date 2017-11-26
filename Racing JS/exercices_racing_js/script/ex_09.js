var script = function(event)
{
    var canvas = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[1];
    var cadre = document.body.firstElementChild.firstElementChild.lastElementChild.firstElementChild;
    var cadre2 = document.body.firstElementChild.firstElementChild.lastElementChild.lastElementChild;
    var verif = false

    canvas.onmousedown = function (event)
    {
      verif = true;
      document.body.onmousemove = whileMove;
    }

    function whileMove(event)
    {
      if(verif)
      {
        var canvas = document.body.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild;

          var pos_x = event.clientX;
          var pos_y = event.clientY;
          dimCadre = cadre.getBoundingClientRect();

          if(dimCadre.left <= pos_x && dimCadre.right-20 >= pos_x && dimCadre.top <= pos_y && dimCadre.bottom-20 >= pos_y)
          {
            canvas.style.position = "fixed";
            canvas.style.left = pos_x+"px";
            canvas.style.top = pos_y+"px";
            cadre2.innerHTML = 'Nouvelles coordonnées => {' + (pos_x-dimCadre.left) + ', ' + (pos_y-dimCadre.top)+ '}';

          }
      }
    }
      document.onmouseup = function()
      {
        verif = false;
      }
}

window.onload = script;
