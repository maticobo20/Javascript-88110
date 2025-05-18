console.log ("Bienvenidos a JavaScript");
console.log ("A trabajar");

/*"Hola a todos" // cadena de caracteres
1
truefa
false */

// Almacenamiento en variables
/* let nombre;
let nombre; */

/* var nombre;
var nombre; */

let nombre = "Matias"
let edad = 28
let esProfesor = false

console.log(nombre)
console.log(edad)
console.log(esProfesor)

console.log("Hola mi nombre es " + nombre + " y tengo " + edad + " años" + " y todavia no soy profesor " + esProfesor + ". El año que viene voy a tener " + (edad + 1) + " años.")

// alert("Hola mi nombre es " + nombre + " y tengo " + edad + " años" + " y todavia no soy profesor " + esProfesor + ". El año que viene voy a tener " + (edad + 1) + " años.");

//Cambio de valores
nombre = "Juan"
edad = 30
esProfesor = false

console.log("Hola mi nombre es " + nombre + " y tengo " + edad + " años" + " y todavia no soy profesor " + esProfesor + ". El año que viene voy a tener " + (edad + 1) + " años.")

const PI = 3.14
console.log(PI)

// Esto aplica a cuando estamos hablando de tipos de datos primitivos

// Operadores
// Numeros trabajan con operadores aritmeticos
// Cadenas de caracteres trabajan con operadores de concatenacion
// Combinacion con la forma en la que esta programado javascript

console.log(1+2);
console.log("1"+"2");
console.log("2" + 1);
console.log(1 + "2");
console.log(+"2"+1);

// El usuario ingrese un valor a una variable se hacer mediante el prompt
let apellido = prompt("Ingrese su apellido")
console.log(apellido)
