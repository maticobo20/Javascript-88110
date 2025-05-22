let boton = document.getElementById("botonVoz");
let speech = new SpeechSynthesisUtterance()

speech.lang = "es-ES"
speech.text = prompt("Saludar");

boton.addEventListener("click", function(){
    windows.speechsynthesis.speak(speech)
})



//Condicionales
/* let semaforo = "verde"

if(semaforo == "rojo") {
    console.log("el semáforo está en rojo, debes detenerte")
}

console.log("Bienvenidos a la otra vereda") */


let pin = 1234
/* if(pin == 1234) {
    console.log("Puedo seguir operando")
}

console.log("fin del programa") */


if(pint == 1234) {
    console.log("Puedo seguir operando")
} else {
    console.log("Otra oportunidad")
}

console.log("Fin del programa")

// Operadores de comparacion

let x;
x = 10 < 5;  //valor booleano false

x = 10 < 15; //valor booleando true

x = 10 <= 15;
console.log(x)
x = 10 >= 15;
console.log(x)
x = 10 == 15;
console.log(x)
x = 10 != 15;
console.log(x)
x = 10 === 15;
console.log(x)
x = 10 !== 15;
console.log(x)

//estrictamente igual

x = 15 === "15";
console.log(x)
x = 10 === 15;
console.log(x)

//comparacion de igualdad
x = 15 == 15;
console.log(x)
x = 15 == "15";
console.log(x)


// OPERADORES LOGICOS
// || se necesita una al menos funcion para q se aplique
// && se necesita las 2 funciones verdaderes para q se aplique
/*let usurario = false;
const puedePgar = true;

if(usuario && puedePagar) {
    console.log("Tu pedido se hizo con exito")
} else {
    console.log("Hubo un error en el pago")
}

if(usuario && puedePagar) {
    console.log("Tu pedido se hizo con exito")
} else if(!usuario) {
    console.log("Debes iniciar sesion")
} else if(!puedePagar) {
    console.log("Fondos Insuficientes")
} else {
    console.log("Hubo un error en el pago")
}




if(usurario || puedePagar) {
    console.log("Tu pedido se hizo con exito")
} else {
    console.log("Hubo un error en el pago")
}  */


// bucles por conteo
//for (let i = 0; i < 10; i++) {}
//repite algo una cierta cantidad de veces, numero de veces

for(let i = 1; i < 10; i+=1) {
    console.log(i);
}

// bucles por condicion
// while (condicion) {...}
let x = 0;
while (x < 10){
    console.log(x);
    x+=1
}
console.log("Fin del bucle")
// do {...} while (condicion)



const MIN_POWER = 10;
const MAX_POWER = 30;

let energiaGoku = 100;
let energiaSuperman = 100;

let round = 0;

while(energiaGoku > 0 && energiaSuperman > 0) {
    round+=1
    let golpeGoku = parseInt(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)
    let golpeSuperman = parseInt(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)

    if(golpeGoku === golpeSuperman) {
        console.log("Empate");
    } else if(golpeGoku > golpeSuperman){
        energiaSuperman -= golpeGoku;
        console.log("Goku ataca a superman con " + golpeGoku + " de daño");
        console.log("Energia de Superman: " + energiaSuperman)
    }else {
        energiaGoku -= golpeSuperman;
        console.log("Superman ataca a goku con " + golpeSuperman + " de daño");
        console.log("Energia de Goku: " + energiaGoku);
    }
}
if(energiaGoku > energiaSuperman) {
    console.log("Goku gana la pelea");
} else {
    console.log("Superman gana la pelea");
}


