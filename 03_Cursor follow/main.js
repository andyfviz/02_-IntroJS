console.log ("RAF")


const BLOCK=document.getElementById("test");
var mouseX = 0;
var mouseY = 0; 

function updateCoords (eventData){
    mouseX = eventData.clientX;
    mouseY= eventData.clientY;

    console.log(mouseX,mouseY);
}

document.addEventListener("mousemove", updateCoords);   

function updateDOM(){

   // console.log("hola");
   BLOCK.style.transform = `translate(${mouseX}px,${mouseY}px)`;
   requestAnimationFrame(updateDOM);
}
requestAnimationFrame(updateDOM); //capacidad de llamarse a si mismo 

