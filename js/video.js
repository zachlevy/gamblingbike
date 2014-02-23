// track
var finish = 1000;
var maxVelo = 40;

var goal1 = {
	atDist:30,
	points:true,
	baseText:"+100 Points",
	secondaryText:"+124 Bonus"
};
var goal2 = {
	atDist:130,
	points:true,
	baseText:"+100 Points",
	secondaryText:"+124 Bonus"
};
var goal3 = {
	atDist:30,
	points:true,
	baseText:"+100 Points",
	secondaryText:"+124 Bonus"
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
    speed = Math.floor((Math.random()*3)+1);
}

function getBikeData () {
	var bikeData;
	// hit the server brooo
	$.getJSON("http://169.254.9.110:8080/", function(json){
		bikeData = json;
		//console.log(bikeData);
		processData(bikeData);
	});
}

// what to do with all that data? process it.
function processData (bikeData) {
	revs = bikeData.revolutions;
	freq = bikeData.frequency;
	// meters
	dist = bikeData.distance;
	// meters per second
	velo = bikeData.velocity;
	writeData(dist, revs, freq, velo);
	updateSpeed(velo);
	
}

function updateSpeed(velocity) {
	if (velocity > 1) {
		var speed = (velocity * 2.5) / 10;
	} else {
		var speed = 0;
	}
	
	video.playbackRate = speed;
} 

// put it on the page brooo
function writeData (dist, revs, freq, velo) {
	document.getElementById("total-dist").innerHTML = Math.round(dist) + " m";
	document.getElementById("velocity").innerHTML = Math.round(velo * 3.6 ) + " km/h";
	//console.log(dist);
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




