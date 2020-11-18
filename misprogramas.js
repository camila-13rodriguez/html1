

function sumarPares(){

	var suma=0;
	var i=0;
	var par=0;

	i=i+1;

	par=2*i;

	

	while(par>1 && par<=100){
		 
		suma=suma+par;

		i=i+1;

		par=2*i;
	}
 

	alert(suma);
	alert(par);

}




function saludar(){
	alert("hola mundo");


	
}