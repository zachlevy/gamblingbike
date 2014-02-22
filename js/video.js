
var speed = 3.0;

video = document.getElementById("bgvid");
video.play();

function setSpeed () {
    var x=document.getElementById("demo");
    speed = Math.floor((Math.random()*3)+1);
}

function everySecond() {
    window.setTimeout(function() {
        video.playbackRate=speed;
        $( "#score" ).toggle( "explode" );

    }, 1000);
    $( "#score" ).toggle( "show" );
}

everySecond();






