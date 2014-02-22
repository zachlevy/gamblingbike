// set speed
var speed = 1.0;
// get data how often

// video variable
video = document.getElementById("bgvid");
// play it broooo when page loaded
video.play();

$( "#img-score" ).hide();

// set the speed of the video while its playing
function setSpeed () {
    var x=document.getElementById("demo");
    speed = Math.floor((Math.random()*3)+1);
}

function getBikeData () {
	var bikeData;
	// hit the server brooo
	$.getJSON("http://127.0.0.1:8080/horizon-update", function(json){
		bikeData = json;
		console.log(bikeData);
		processData(bikeData);
	});
}

function processData (bikeData) {
	var distance = 0;
	distance = bikeData.distance;
}

function test () {
	console.log('test');
	$( "#img-score" ).toggle( "explode", function() {
		window.setInterval(function() {
			$( "#img-score" ).toggle( "explode");
		},1000);
    	;
  });
}

// update every x milliseconds
function everyTime(often) {
    window.setTimeout(function() {

 		// change the video speed
        video.playbackRate = speed;
        // every second, run test function
        test();
    }, often);
}

everyTime(1000);






