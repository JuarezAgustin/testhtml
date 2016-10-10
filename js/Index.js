var imagenes = [
  'img/BEMS.png',
  'img/imagen1.png',
  'img/imagen2.jpg',
  'img/imagen3.jpg',
  'img/imagen4.png'
];

function rotarImagenes() {
  var index = Math.floor(Math.random() * imagenes.length);
  document.getElementById('imagen').src = imagenes[index];
}

onload = function() {
  rotarImagenes();
  setInterval(rotarImagenes,5000);
}

/*MENSAJES
nombre = prompt("Ingresa tu nombre:","");
var edad;
edad = prompt("Ingrese tu edad:");
alert("Tu nombre es:" +" " + nombre);
alert("Y tienes" +" " +edad);*/


//ARRAYS

/*var amigos = ["Carlos", "Agustin","lucas"]
document.write("Tienes" + " " + amigos.length + " " + "amigos");
amigos[amigos.length] = "Fernando";
amigos.pop();
var amigos2 = ["luis","Agustina"];
var amigos3 = amigos.concat(amigos2);
document.write(amigos3.join(" : "));
var ordenados = amigos.sort();
document.write(ordenados);*/

//CONDICIONALES
//IF

/*var nombre = "Agustin",
    edad = 17;

if (nombre == "Agustin"){
  document.write("Bienvenido" + nombre);
} else if (nombre == "Hola") { document.write("Bienvenido" + nombre);}
else {document.write("Bienvenido anonimo")}*/

/*if (edad == 18 || nombre == "Maria") {
  document.write("Bienvenido/a");
} else {
  document.write("No eres mayor");
}*/

/* FOR
var diassemanales = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
for (var i = 0; i <= diassemanales.length - 1; i++) {
  document.write(diassemanales[i] + "<br>");
} */

/*WHILE
var diassemanales = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
var numerodias = diassemanales.length - 1;
var i = 0;
while (i <= numerodias) {
  document.write(diassemanales[i] + "<br>");
  i++;
} */

//FUNCIONES

/*var suma = function (numero1, numero2){
  var numero1= numero1,
  numero2 = numero2;
return numero1 + numero2;


}
document.write(suma (10,20));*/

/*OTRO EJEMPLO
var numeromaximo = function(valor1,valor2){
if (valor1 > valor2) {
  return valor1;
} else {
  return valor2;
}

}
document.write("El numero maximo es" + " "+ numeromaximo(10,2180));*/
 /*
OPERACIONES DENTRO DE UN FORMM
 var resta = function(numero1, numero2){
   var numero1 = parseFloat(document.getElementById('numero1').value);
   var numero2 = parseFloat(document.getElementById('numero2').value);

   var resultado = numero1 - numero2;
   return resultado;*/
