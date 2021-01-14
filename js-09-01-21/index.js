//VARIABLE GOOBLAL LO PUEDE VER Y MANIPULAR TODO EL PROGRAMA

var estado = "normal";

let btnrojo = document.getElementById("btnrojo");

btnrojo.addEventListener("click", function(){

    let caja2 = document.getElementById("caja2");
 /*    caja2.classList.remove("caja-verde");
    caja2.classList.remove("caja-amarilla")
    caja2.classList.add("caja-roja"); */

    rotar() ;


    
    

} ) ;



let btnverde = document.getElementById("btnverde");

btnverde.addEventListener("click", function(){


    let caja2 = document.getElementById("caja2");
/*     caja2.classList.remove("caja-amarilla")
    caja2.classList.remove("caja-roja");
    caja2.classList.add("caja-verde"); */

    rotar() ;


} ) ;

let btnamarillo = document.getElementById("btnamarillo");



btnamarillo.addEventListener("click", function(){


    let caja2 = document.getElementById("caja2");
/*     caja2.classList.remove("caja-roja");
    caja2.classList.remove("caja-verde");
    caja2.classList.add("caja-amarilla"); */

    rotar() ;

} ) ;


function rotar() {

    let caja2 = document.getElementById("caja2");
    let caja3 = document.getElementById("caja3");


    if ( estado == "normal" ) {
        // rotar la caja  
        // cambiar la variable estdo a girado
        caja2.classList.add("girado");
        caja2.classList.add("transicion");

        caja3.classList.remove("girado");
        caja3.classList.add("transicion");

        estado = "girado";


    }else {

        //cambiar la caja a su posicion normal
        // cambiar la variable estado al valor "normal"
       
        caja2.classList.remove("girado");
        caja2.classList.add("transicion");

        caja3.classList.add("girado");
        caja3.classList.add("transicion");


        estado = "normal";
    }
    return  true;
} 