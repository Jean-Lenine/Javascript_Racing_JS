window.onload = function()
{
    myStorage = window.localStorage;
    var element = document.body.firstElementChild.firstElementChild.lastElementChild.lastElementChild;
    var pangolin = localStorage.getItem("pangolin");
    element.innerHTML=pangolin;
    var image = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[0];
    element.addEventListener("mouseenter", mouseEnter);
    element.addEventListener("mouseleave", mouseLeave);
    element.addEventListener("click", mouseClick);
    var h=image.height;
    var widthInitial=image.width;
    var w=image.width;
    var time = null;
   
    function mouseEnter()
    {       
        if(h > 0)
        {
                clearTimeout(time);
               
                w -= w/100;
                h -= h/100;
                image.style.width = w + "px";
                image.style.height = h + "px";
                time = setTimeout(mouseEnter,1000);
               
        }
    }
        function mouseLeave()
    {       
        if(w < widthInitial )
        {         clearTimeout(time);
                w += w/100;
                h += h/100;
                image.style.width = w + "px";
                image.style.height = h + "px";
                time = setTimeout(mouseLeave,1000);
               
        }
    }
    function mouseClick()
    {       
                element.innerHTML = "";
                localStorage.removeItem("pangolin");
               
    }
}
    