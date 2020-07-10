//making a function where the value of time is calculated
function calculate(){
//first get the distance input from the user
	var distance = document.getElementById('dis').value;
//set an amount for the speed that the user isn't possible of changing
	var speed = 7000;
//Make the math for the time, so how much time will it take to travel
	var time = ((distance/speed)*60);
//make sure the element of the value of time will be replaced with the new time.
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

