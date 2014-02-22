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
	$.getJSON("http://192.168.1.101:8082/", function(json){
		bikeData = json;
		console.log(bikeData);
		processData(bikeData);
	});
}

function processData (bikeData) {
	var distance = 0;
	dist = bikeData.distance;
	revs = bikeData.revolutions;
	freq = bikeData.frequency;
	velo = bikeData.velocity;
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
    	getBikeData();

 		// change the video speed
        video.playbackRate = speed;
        // every second, run test function
        test();
    }, often);
}

everyTime(1000);






