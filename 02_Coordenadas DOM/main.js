//1. Guardar una referencia a las etiquetas HTML en JS
var domMouseX = document.getElementById("coordX");
var domMouseY = document.getElementById("coordY");

var mouseX =0;
var mouseY =0; 

console.log(domMouseX);
console.log(domMouseY);

//2. Crear funcion para imprimir coordenadas
function printCoords (mouseData) {
  
  //recibir coordenadas del mouse
  //Client es preedefinido por Java
  console.log(mouseData.clientX);
  console.log(mouseData.clientY);
  
  //asignarlas a elemento HTML 
  //innerText pasa de JavaS a HTML
  
  //domMouseX.innerText = mouseData.clientX;
  //domMouseX.innerText = `MouseX: ${mouseData.clientX}`;
  //domMouseY.innerText = mouseData.clientY;
  //domMouseY.innerText = `MouseY: ${mouseData.clientY}`;
  
  mouseX=mouseData.clientX;
  mouseY=mouseData.clientY;
  
  domMouseX.innerText=`Mouse X: ${mouseX}`;
  domMouseY.innerText=`Mouse Y: ${mouseY}`;
 
   //Accesar propiedades de CSS 
  domMouseX.style.transform =`translate(${mouseX}px, ${mouseY}px)`; 
  domMouseY.style.transform =`translate(${mouseX}px, ${mouseY}px)`; 
}


//3. Escuchar movimiento de mouse por parte del usuario

  //crear conexion navegador y codigo
document.addEventListener("mousemove",printCoords);              