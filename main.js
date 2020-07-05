//making a function where the value of time is calculated
function calculate(){
//first get the distance input from the user
	var distance = document.getElementById('dis').value;
//set an amount for the speed that the user isn't possible of changing
	var speed = 7000;
//Set the time 
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