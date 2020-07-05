function calculate(){

	var distance = document.getElementById('dis').value;
	var speed = 7000;
	var time = 0;
	var time = ((distance/speed)*60);

	document.getElementById("timeValue").value= time;

}


var counter = 40;
var fuelCountdown = setInterval(function()
{
  console.log(counter);
  counter--
  if (counter === 20) {
    alert("Fuel almost empty, please refill.");

    clearInterval(fuelCountdown);
  }  
}, 1000);