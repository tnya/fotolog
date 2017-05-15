function agregaPosteo() {
//escribe aca el codigo
/* CONTENEDOR POSTEOS, NOMBRE Y COMENTARIO USER */

var containerPosteos = document.getElementById("contenedor-posteos");
var nombreFF = document.getElementById("nombre").value;
var contenidoFF = document.getElementById("cajaposteos").value;

/* CREAR NODO ELEMENTO DONDE VA POST */

var nuevoPost = document.createElement("div");

/* CREAMOS ELEMENTOS DONDE GUARDAMOS VALORES */

var contenedorNombre = document.createElement("strong");
var contenedorPost = document.createElement("p");
var separacion = document.createElement("hr");

/* CREAMOS ELEMENTO PARA CORAZON */

var parrafCorazon = document.createElement("p");
var i = document.createElement("i");

/* ASIGNAR PADRE A ICONO DE CORAZON */

parrafCorazon.appendChild(i);

/* DAMOS ATRIBUTOS AL CORAZON */

parrafCorazon.setAttribute("class", "corazon");
i.setAttribute("class", "fa fa-heart");
i.setAttribute("arial-hidden", "true");

/* TRANSFORMAR NOMBRE A NODO TEXTO */

var nodoNombre = document.createTextNode(nombreFF + " escribió:");
var nodoPosteo = document.createTextNode(contenidoFF);

/* ASIGNAR PADRES A NODOS CREADOS */

contenedorNombre.appendChild(nodoNombre);
contenedorPost.appendChild(nodoPosteo);

/* ASIGNAR PADRES A NOMBRE Y CONTENIDO */

nuevoPost.appendChild(contenedorNombre);
nuevoPost.appendChild(contenedorPost);
nuevoPost.appendChild(parrafCorazon);
nuevoPost.appendChild(separacion);

/* CREAR FUNCION CLICK PARA EL CORAZON Y ASIGNAMOS CLASE ROJO DE CSS */

i.addEventListener("click", function(){
	i.classList.toggle("rojo");
});

/* ATRIBUTOS AL POST Y AGREGAMOS AL CONTENEDOR-POSTEOS */

nuevoPost.setAttribute("class", "posteo");
containerPosteos.appendChild(nuevoPost);

/* RESETEAR CAMPOS Y DEJARLOS EN BLANCO */

document.getElementById("nombre").value = "";
document.getElementById("cajaposteos").value = "";

}
/* IMPORTANTE: R E C O R D A R   L L A M A R   F U N C I O N */
agregaPosteo();