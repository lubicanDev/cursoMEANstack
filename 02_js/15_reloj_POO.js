
// Funcion que, por su estructura interna, es un constructor.
// Será sólo un constructor cuando se le llame con new.

function Reloj (cajaDeTexto1, cajaDeTexto2, cajaDeTexto3, cajaDeTexto4, cajaDeTexto5, button) {

	// Mediante this, vamos creando los atributos y métodos propios a este objeto

	this.timerId=null;
	this.timerFuncionando=true; 

	// Otra forma de definir los atributos:
	// this.["timerId"]=null;
	// this.["timerfuncionando"]=false;

	this.cajaDeTexto1=cajaDeTexto1;
	this.cajaDeTexto2=cajaDeTexto2;
	this.cajaDeTexto3=cajaDeTexto3;
	this.cajaDeTexto4=cajaDeTexto4;
	this.cajaDeTexto5=cajaDeTexto5;
	this.button=button;

	//------------
	this.guardaRelojes();				// Vamos a guardar los relojes en un Array 
	this.idReloj = listaRelojes.length;	// Usamos la longitud del Array como Id del Reloj
	//console.log(this.idReloj);	
	//------------

}

Reloj.prototype.guardaRelojes = function () {

	// Vamos a crear un Array "listaRelojes" donde se van a guardar todos los "relojes" creados
	// Comprobamos que el Array "listaRelojes" no está definido, para definirlo sólo una vez

	if (typeof (listaRelojes) == "undefined") {
		// Hasta que no se inicializan, su valor es undefined
		listaRelojes = new Array();		// listaRelojes es Global????
	}
		listaRelojes.push(this);		// Añadimos al Array "listaRelojes" el nuevo objeto Reloj creado
		//console.log(listaRelojes);
}

Reloj.prototype.comenzarReloj = function () {

	// Con "this" llamamos a otros Métodos del Objeto

	//this.pararReloj();
	this.obtenerFecha();
	this.mostrarHora();

	this.cajaDeTexto4.value="Funcionando";
	this.button.value="Parar Reloj";

	console.log(this.button.onclick);

	this.button.attributes[4].nodeValue="listaRelojes["+(this.idReloj-1)+"].pararReloj()";

	console.log(this.button.onclick);


}

Reloj.prototype.pararReloj = function () {

	if (this.timerFuncionando) {
		clearTimeout(this.timerId);
		this.timerFuncionando = false;
		this.button.value="Comenzar Reloj";
		this.cajaDeTexto4.value="Pausado";		
	}else{

		this.comenzarReloj();
		this.button.value="Parar Reloj";
		this.cajaDeTexto4.value="Funcionando";		
	}


}

Reloj.prototype.obtenerFecha = function () {

	var hoy = new Date();
	var valorHoy = "" + hoy.getDate() + " / " + (hoy.getMonth() + 1) + " / " + (hoy.getYear() + 1900);

	this.cajaDeTexto1.value=valorHoy;

}

Reloj.prototype.mostrarHora = function  () {

	var ahora = new Date();

	var hora = ahora.getHours();
	var minuto= ahora.getMinutes();
	var segundo = ahora.getSeconds();

	var soloHora = ((hora>12) ? hora - 12 : hora);

	var valorHora = "" + ((soloHora<10) ? "0" : "") + soloHora;	// ponemos ""+ para que me lo convierta
																	// implícitamente a cadena de texto
	valorHora += ((minuto<10) ? ":0" : ":") + minuto;
	valorHora += ((segundo<10) ? ":0" : ":") + segundo;
	valorHora += ((hora>12 ? " P.M." : " A.M"));	

	this.cajaDeTexto2.value=valorHora;

	// Tenemos que llamar al Metodo "mostraHora" del elemento cuyo ID es el del Objeto "Reloj"
	// Por lo que usamos "this.idReloj" como índice del Array "listaRelojes"
	// listaRelojes[this.idReloj]

	//console.log("listaRelojes["+this.idReloj+"]");

	this.timerId = setTimeout("listaRelojes["+(this.idReloj-1)+"].mostrarHora()", 1000);
	this.cajaDeTexto3.value=this.timerId;
	this.cajaDeTexto5.value=this.idReloj;
	this.timerFuncionando=true;
}