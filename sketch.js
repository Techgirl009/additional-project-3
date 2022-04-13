var peter_pan = "";
var frozen = "";
var disney = "";

function preload()
{
	peter_pan = loadSound("peter_pan.mp3");
  //Load the "Disney_music.mp3" and "frozen.mp3" in "disney" and "frozen" variables respectively just like we have loaded "peter_pan.mp3" in "peter_pan" variable
	disney = loadSound("Disney_music.mp3");
	frozen = loadSound("frozen.mp3");
  
}
   function play()
{
   //get the selected value from the drop down list ( <select> element) using id "name" and update the "name" variable
  var name = document.getElementById("name").value;
  //write if code block to check which song name is selected by user
  //if "name" variable is equal to "peter_pan" then write code to play peter pan song inside this if block, similarly do for name is equal to "frozen" and "disney"
  if(name == "peter_pan"){
     peter_pan.play();
     }
   if(name == "frozen"){
     frozen.play();
     }
   if(name == "disney"){
     disney.play();
     }
	
}

function stop_music()
{
     peter_pan.stop();
     frozen.stop();
     disney.stop();
}


function setup(){
}