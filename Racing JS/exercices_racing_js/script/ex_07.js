window.onload = function dessiner() {
  var canevas = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[1];
  var pause = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[3].childNodes[1];
  var stop = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[3].childNodes[3];
  var mute = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[3].childNodes[5];
    var ctx = canevas.getContext('2d');
    canevas.height = 20;
    canevas.width = 20;
    ctx.beginPath();
    ctx.moveTo(6, 6);
    ctx.lineTo(14, 10);
    ctx.lineTo(6, 14);
    ctx.closePath();

    ctx.lineWidth = 1+"px";
    ctx.strokestyle = "white";
    ctx.stroke();

    ctx.fillStyle = "white";
    ctx.fill();


    var sound = new Audio("./script/surprise.ogg");
    canevas.onclick = function(){
    sound.play();
	}

	pause.onclick = function(){
    sound.pause();
	}
	stop.onclick = function(){
    sound.pause();
    sound.currentTime = 0;
	}
	mute.onclick = function(){
		if(sound.muted == false){
			sound.muted = true;
		}
		else 
			sound.muted = false;
		}
	}
