


var cars = ["Saab", "Volvo", "BMW"];

console.log(cars);

let boton1 = document.getElementById("boton");

boton1.addEventListener("click", function(){

alert("Hola mundo!");

}   );

let boton0 = document.getElementById("boton0");
boton0.addEventListener("click", function(){
    calcularImporte();


} );

function obtenerCantidad() {
    // obtener el input de la cantidad
   // debugger;
    let inputCantidad = document.getElementById("fcantidad");

  //obtengo la cantidad
    let cantidad = inputCantidad.value; 

    return cantidad;
}
//me devuleve el precio por el usuario
function obtenerPrecio() {
    // obtener el input de la cantidad
   // debugger;
    let inputPrecio = document.getElementById("fprecio");

  //obtengo la cantidad
    let precio = inputPrecio.value; 

    return precio;
}


//escribe un valor en el input
function fijarImporte(importe) {
    let inputImporte = document.getElementById("fimporte");

    inputImporte.value = importe;

} 

function calcularImporte() {
    let precio = obtenerPrecio();
    let cantidad = obtenerCantidad();
    let importe = precio*cantidad;

    fijarImporte(importe);
}
    