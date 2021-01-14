// esto es un comentario en javascript

// obtenemos el boton( elemento html ) por su atributo id
// el valor del atributo id , debe ser unico en el documento.

let boton1 = document.getElementById("button1");


// agregamos al boton, un escuchador( listener) del evento click
// y le asignamos una funcion que hara lo que necesitamos.

boton1.addEventListener('click' ,function(){
    //alert("hola");
    let parrafo = document.getElementById("p1");

   // esto sirve para mostrar 'algo ' en la consola de devtools
    console.log(parrafo.classList);    
    // quitamos la clase texto-azul al parrafo
    parrafo.classList.remove("texto-azul");
     
    parrafo.classList.add("texto-rojo");

   }
);


// quitamos la imagen 
let btnsacar = document.getElementById("boton-sacar");

btnsacar.addEventListener("click" ,function() {
   // alert("imagen borrada");

   let img1 = document.getElementById("imagen");

   img1.classList.add("oculto");

}
) ;

// mostramos la imagen

//obtener el boton de mostrar imagen
//detectar el click
//mostrar la imagen cuando haga click

let botonmostrar = document.getElementById("boton-mostrar");

botonmostrar.addEventListener("click", function(){
    let img1 = document.getElementById("imagen");
    img1.classList.remove("oculto");
}
);
