// track
var finish = 1000;
var maxVelo = 40;
var distOffset = 0;

var goal1 = {
	atDist:100,
	points:true,
	baseText:"+100 Points",
	secondaryText:"+121 Bonus"
};
var goal2 = {
	atDist:200,
	points:true,
	baseText:"+100 Points",
	secondaryText:"+122 Bonus"
};
var goal3 = {
	atDist:300,
	points:true,
	baseText:"+100 Points",
	secondaryText:"+123 Bonus"
};

var goals = new Array(goal1,goal2,goal3);

console.log(goals);

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
    speed = Math.floor(10 * (Math.random()*3)+1)/10);
}

function getBikeData () {
	var bikeData;
	// hit the server brooo
	$.getJSON("http://localhost:8080/", function(json){
		bikeData = json;
		//console.log(bikeData);
		processData(bikeData);
	});
}

// what to do with all that data? process it.
function processData (bikeData) {
	// $(document).ready() {
	// 	var distoffset = bikeData.distance;
	// }
	revs = bikeData.revolutions;
	freq = bikeData.frequency;
	// meters
	
	dist = (bikeData.distance - distOffset);
	// meters per second
	velo = bikeData.velocity;
	writeData(dist, revs, freq, velo);
	updateSpeed(velo);
}

function updateSpeed(velocity) {
	if (velocity > 1) {
		var speed = (velocity * 2.5) / 10.0;
	} else {
		var speed = 0;
	}
	
	video.playbackRate = speed;
} 

// put it on the page brooo
function writeData (dist, revs, freq, velo) {
	document.getElementById("velocity").innerHTML = Math.round(velo * 3.6 ) + " km/h";
	document.getElementById("total-dist").innerHTML = Math.round(dist) + " m";
	if (dist < finish ) {
		var progress = Math.round((dist / finish) * 1000)/10;
	} else {
		var progress = 100;
	}
	document.getElementById("progress-wrap").innerHTML = "<progress id=\"distance-bar\" value=\"" + progress + "\" max=\"100\"></progress>";
}

function textExplode () {
	$( "#text-wrap" ).hide();
	console.log('test');
	$( "#text-wrap" ).toggle( "explode", function() {
		setTimeout(function () {
			$( "#text-wrap" ).toggle( "explode");
		}, 3000);
		
  });
}

// update every x milliseconds
function everyTime() {
    getBikeData();
	// change the video speed
    
    // every second, run test function
    
}

setInterval(everyTime, 500);

textExplode();

$.getJSON("http://localhost:8080/", function(json){
	bikeData = json;
	distOffset = bikeData.distance;
});

