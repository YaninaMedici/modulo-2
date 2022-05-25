// Entre parentesis va la palabra reservada IF
// Evalúa una condición que vamos a poner entre los parentesis y si es verdadero se va a dar lo que pongamos en el alert, si es falso no se va a ejecutar
// const edad = 18; 

// if(edad >= 18){
//     alert('Bienvenido a nestro sitio de bebidas alcoholicas');
// }

// ----------------------------

// Si la condición de arriba da falso podemos con otra palabra reservada darle otro mensaje - ELSE
// const edad = 16;

// if(edad >= 18){
//     alert('Bienvenido a nestro sitio de bebidas alcoholicas');
// } else{
//     alert('No podemos venderte bebidas alcoholicas');
// }

// ----------------------------

// Si tenemos que consultar edad:
// const edad = prompt('Cuál es tu edad?');

// if(edad >= 18){
//     alert('Bienvenido a nestro sitio de bebidas alcoholicas');
// } else{
//     alert('No podemos venderte bebidas alcoholicas');
// }

// OPERADORES RELACIONALES

// Con un = hacemos una asiganción
// c7onst = 'Jonh';

// Con dos iguales compara valores
// console.log(2 != '2')

// Con dos iguales compara valor y tipo de dato
// console.log(2 === '2'); //false



// EJERCITACION

////////////////////////////////////////////////////////////////
// puedeVerPelicula(edad, tieneAutorizacion)
// Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

// puedeVerPelicula(12, false) // false
// puedeVerPelicula(12, true)  // true
// puedeVerPelicula(16, false) // true
// puedeVerPelicula(18, true)  // true

// ----------------

// PARA EVALUAR LA EDAD:
// const puedeVerPelicula = (edad, tieneAutorizacion) => {
//     if(edad >= 15 ||tieneAutorizacion === true){
//         alert('puedes ver la película')
//         return true
//     } else {
//         alert('No puedes verla')
//         return false
//     }
// }

// Ej: ponemos que tiene 12 años (temdría que devolver un FALSE):
// console.log(puedeVerPelicula(12, false)) // false
// console.log(puedeVerPelicula(12, true)) // true
// console.log(puedeVerPelicula(16, false)) // true
// console.log(puedeVerPelicula(18, true)) // true

// ---------------
// Si no se la edad:
// const edad = prompt('Cuál es tu edad?')
// const tieneAutorizacion = prompt('Tiene el permiso de tus padres?')

// const puedeVerPelicula = (edad, tieneAutorizacion) => {
//     if(edad >= 15 ||tieneAutorizacion === true){
//         alert('puedes ver la película')
//         return true
//     } else {
//         alert('No puedes verla')
//         return false
//     }
// }

// console.log(puedeVerPelicula(12, false)) // false
// console.log(puedeVerPelicula(12, true)) // true
// console.log(puedeVerPelicula(16, false)) // true
// console.log(puedeVerPelicula(18, true)) // true

// -------------
// Simbolos:

// || = o:
// >= a 15 O tieneAutorizacion

// if(edad >= 15 || tieneAutorizacion === true){
//     alert('puedes ver la película')
//     return true
// }

// *******

// && = y:
// >= a 15 Y tieneAutorizacion

// if(edad >= 15 && tieneAutorizacion === true){
//     alert('puedes ver la película')
//     return true
// }
// -------------

////////////////////////////////////////////////////////////////
// estaEnRango(valor, minimo, maximo)
// Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)

// const estaEnRango = (numero, minimo, maximo) => {
//     if(numero >= minimo && numero <= maximo){
//         return true 
//     } else {
//         return false
//     }
// }

// console.log(estaEnRango(3, 1, 10))   // true 3 > 1 y 3 <= 10
// console.log(estaEnRango(1, 1, 10))   // true
// console.log(estaEnRango(10, 1, 10))  // true
// console.log(estaEnRango(12, 1, 10))  // false
// console.log(estaEnRango(-3, 1, 10))  // false

////////////////////////////////////////////////////////////////
// esParOImpar(numero)
// Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar

// const numero = prompt('INgresa el numero a evaluar')

// const esParOImpar = numero => {
//     if(numero % 2 === 0){
//         return 'par'
//     } else {
//         return 'impar'
//     }
// }

// alert('El numero ingresado es: '+ esParOImpar(numero))

// console.log(esParOImpar(3))  // 'impar'
// console.log(esParOImpar(10)) // 'par'

// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------

// EJEMPLO DE SALUDO SEGUN LA HS DEL DIA
// PARA VER COMO FUNCIONA    ELSE IF   PARA VER VARIAS OPCIONES

// entre las 07 hs y las 12 hs = buenos dias
// entre las 12:01 y las 19 hs = buenas tardes
// entre las 19:01 y las 00 hs = buenas noches
// entre las 00 y las 7 = que haces despierta?

// const hr = prompt('Ingresa la hr! :)')

// const saludar = hr => {
//     if(hr >= 7 && hr <= 12){
//         return 'Buenos días!'
//     } else if(hr >= 12 && hr < 19){
//         return 'Buenas tardes'
//     } else if(hr >= 19 && hr <= 24){
//         return 'Buenas noches'
//     } else if(hr >= 0 && hr < 7){
//         return 'Que haces despierta???'
//     } else{
//         return 'La hora que ingresaste no es valida!! Ingresa una hora entre 00 y 24'
//     }
// }

// console.log(saludar(hr))


///////////////////////////////////////////////////////////
// obtenerGeneracion(anioNacimiento)
// Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la generación a la que pertenece, siguientdo estas reglas:

// const anioNacimiento()

// const obtenerGeneracion = anioNacimiento => {
//     if(anioNacimiento >= 1949 && anioNacimiento <= 1968){
//         return 'Baby boomer';
//     } else if(anioNacimiento >= 1969 && anioNacimiento <=   1980){
//         return 'Generación X';
//     } else if(anioNacimiento >= 1981 && anioNacimiento <= 1993){
//         return 'Millennials';
//     } else if(anioNacimiento >= 1994 && anioNacimiento <= 2010){
//         return 'Generación Z';
//     } else {
//         return 'Evaluamos solamente entre los años de 1949 y 2010';
//     }
// }

// alert(obtenerGeneracion(anioNacimiento))

// // Generación	Años de nacimiento
// // Baby boomer	1949-1968
// // Generación X	1969-1980
// // Millennials	1981-1993
// // Generación Z	1994-2010





// ***************************************************
// OPERADOR TERNARIO*******************
// ***************************************************

// Si tenemos que consultar edad:

// --------------------------------------
// --------EN VEZ DE USAR ESTO--------
// -----------------------------------------

// const edad = prompt('Cuál es tu edad?');

// if(edad >= 18){
//     alert('Bienvenido a nestro sitio de bebidas alcoholicas');
// } else{
//     alert('No podemos venderte bebidas alcoholicas');
// }

// ----------------------------------------
// -----------USAMOS ESTO-------------
// ----------------------------------------

// const verificarEdad = (edad) => {
//     edad >= 18 ? alert('Bienvenido a nestro sitio de bebidas alcoholicas') : alert('No podemos venderte bebidas alcoholicas');
// }

// verificarEdad(edad, permiso);


// -----------------------------------------------
// const edad = prompt('Cuál es tu edad?')
// const permiso = confirm('Tienes permiso de tus padres?')

// const verificarEdad = (edad, permiso) => {
//         edad >= 18 && permiso === true ? alert('Bienvenido a nestro sitio de bebidas alcoholicas') : alert('No podemos venderte bebidas alcoholicas');

//         o es lo mismo que ponerlo separado:
//         edad >= 18 && permiso === true // ES EL IF
//         ? alert('Bienvenido a nestro sitio de bebidas alcoholicas') // ES EL TRUE
//         : alert('No podemos venderte bebidas alcoholicas'); // ES EL FALSE
//     }
    
//     verificarEdad(edad, permiso);
    


/////////////////////////////////////////////////////////////////
// avanzarSemaforo(colorActual)
// Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde

// const colorActual = prompt('Cuál es color actual?').toLowerCase() 

// const avanzarSemaforo = (colorActual) => {
//     if(colorActual === 'verde'){
//         return 'amarillo'
//     } else if(colorActual === 'amarillo'){
//         return 'rojo'
//     } else if(colorActual === 'rojo'){
//         return 'verde'
//     } else {
//         return alert('No es un color válido')
//     }
// }

// console.log(avanzarSemaforo(colorActual))


// avanzarSemaforo('verde')     // 'amarillo'
// avanzarSemaforo('amarillo')  // 'rojo'
// avanzarSemaforo('rojo')      // 'verde'

// const estaEnRango = (numero, minimo, maximo) => {
//     if(numero >= minimo && numero <= maximo){
//         return true 
//     } else {
//         return false
//     }
// }