window.onload = function()
{

var element = document.body.firstElementChild.firstElementChild.lastElementChild.lastElementChild;

    function getRandomInt(min, max) 
    {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var evv = function() 
    {
        var r = getRandomInt(0, 255);
        var g = getRandomInt(0, 255);
        var b = getRandomInt(0, 255);
        element.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    };
    
   element.addEventListener('pangolin', evv);
}