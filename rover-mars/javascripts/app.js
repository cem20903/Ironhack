// Rover Object Goes Here
// ======================

// ======================

window.onload = function(){

  initRover();
  createGrid();

}

var topTrue = false;
var leftTrue = false;
var rightTrue = false;
var bottomTrue = false;
var travelLog = Array();

var robotRover = 
{
name: "Rover",
direction: ["N","S","E","W"],
log: travelLog,

}

robotRover.direction[1];


function push(event){

  var divRover = document.getElementById("rover");
  var log = document.getElementById("log");
  var left = divRover.style.left;
  var top = divRover.style.top;

  
  switch (event.keyCode){
    case 78:
    if(topTrue == true){
     
      
      if(parseInt(divRover.style.top) == 50){
          alert("Finish the grid");
      } else {
      travelLog.push("N");
      log.innerHTML = "";
      log.append(travelLog);
      var top = parseInt(top) - 50 + "px";
      divRover.style.top = top;
      topTrue = false;
    }
      
    } else {
      topTrue = true;
    }
    
    break;
    case 83:
    if(bottomTrue == true){
      if(parseInt(divRover.style.top) == 500){
        alert("Finish the grid");
    } else {
      travelLog.push("S");
      log.innerHTML = "";
      log.append(travelLog);
      var top = parseInt(top) + 50 + "px";
      divRover.style.top = top;
      bottomTrue = false;
    }
    } else {
      bottomTrue = true;
    }
    
    break;
    case 69:
    if(leftTrue == true){
      if(parseInt(divRover.style.left) == 100){
        alert("Finish the grid");
    } else {
      travelLog.push("E");
      log.innerHTML = "";
      log.append(travelLog);
    var left = parseInt(left) - 50 + "px";
    divRover.style.left = left;
      leftTrue = false;
    }
  } else {
    leftTrue = true;

  }
    break;
    case 87:
    if(rightTrue == true){

      if(parseInt(divRover.style.left) == 550){
        alert("Finish the grid");
    } else {
      
      travelLog.push("W");
      log.innerHTML = "";
      log.append(travelLog);
      var left = parseInt(left) + 50 + "px";
      divRover.style.left = left;
      rightTrue = false;
    }
    } else {
      rightTrue = true;
    }
    
  } 
   

}



function turnLeft(rover){
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}

function initRover(){

  var divRover = document.getElementById("rover");
  divRover.style.backgroundColor = "red";
  divRover.style.width = "30px";
  divRover.style.height = "30px";
  divRover.style.position = "absolute";
  divRover.style.top = "100px";
  divRover.style.left = "200px";
  divRover.style.margin = "4px";

}
 
function createGrid(){

  var page = document.body;
  page.addEventListener("keydown", push);
  var top = 0;
  var left = 0;
for (var b = 0; b<10;b++){
  var top = top + 50;
  var left = 50;
  
  for(var a = 0;a<10;a++){
    var innerDiv = document.createElement('div');
    innerDiv.className = 'grid'+b + a;
    innerDiv.style.backgroundColor = "grey";
    innerDiv.style.width = "40px";
    innerDiv.style.height = "40px";
    innerDiv.style.position = "absolute";
    
    left = left + 50;
    innerDiv.style.padding = "1px";
     innerDiv.style.top = top + "px";
    innerDiv.style.left = left + "px"
    document.getElementById('grid').appendChild(innerDiv);

  }
}
}


