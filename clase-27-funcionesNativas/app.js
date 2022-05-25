/////////////////////////////////////////////////////////////////////
// REPASO - OPERADORES DE COMPARACION!!!!!!!!
/////////////////////////////////////////////////////////////////////

// > mayor que
// < menor que
// >= mayor o igual
// <= menor o igual

// console.log(3 < 5); siempre nos va a retornar un booleano "TRUE"
// console.log(5 < 3); siempre nos va a retornar un booleano "FALSE"
// console.log(3 < = 3); siempre nos va a retornar un booleano "TRUE"
// console.log(3 > = 3); siempre nos va a retornar un booleano "TRUE"

// -----------------------------------------------

// = un igual
// == dos iguales
// === tres iguales
// != un signo de admiraciòn y un igual
// !== un signo de admiraciòn y dos iguales

// = UN IGUAL es para asignacion
// const nombre = 'Jonh';

// // == DOS IGUALES es para comparar el SOLO EL VALOR!
// console.log(2 == '2'); // TRUE
//          NUMERO  STRING

// === TRES IGUALES es para comparar VALOR Y TIPO DE DATO!!!
// console.log(2 === '2') // FALSE
//          VALOR 2   VALOR 2
// TIPO NUMERO   TIPO STRING
// hace una comparación exacta!


// *****************************
// DATO!!!!!!!!!
// *****************************
// UTILIZAR SIEMPRE PARA ESTAR SEGUROS QUE ES IGUAL EL 3 IGUALES!! A MENOS DE QUE LA SITUACIÓN REQUIERA 2 IGUALES!!

// ---------------------------------------------------

// con un ! y un = comparamos que sean DIFERENTES!!!
// console.log(2 ! = '2'); // FALSE porque son iguales

// con ! y dos = comparamos que sean EXACTAMENTE DIFERENTES!!!
// console.log(2 ! = = '2'); // TRUE porque son diferentes

//////////////////////////////////////////////////////////////
// EJERCICIOS CLASE 26 PARA VER COMO UTILIZAR LOS OPERADORES:

// esMayorDeEdad(edad)
// Crear una función esMayorDeEdad que tome como argumento un número edad y devuelva true si es mayor de edad (18 o más) o false de lo contrario

// const esMayorDeEdad = (edad) =>{
//      return edad >= 18;
// }

// PROBAMOS QUE FUNCIONE:
// console.log(esMayorDeEdad(36)) // TRUE
// console.log(esMayorDeEdad(15)) // FALSE

// -----
// SI QUEREMOS QUE EL USUARIO NOS DIGA LA EDAD Y NOS LA TOME COMO NUMERO, USAMOS PROMPT Y NUMBER
// const edad = Number(prompt('¿Cuàl es tu edad?'));
// console.log(esMayorDeEdad(edad)) // FALSE

// -------------------------------------------------------
// --------------------------------------------------------
// calcularPuntaje(facil, normal, dificil)
// Crear una función calcularPuntaje que calcule el puntaje de un examen que consiste en ejercicios de distinto nivel. Debe tomar como argumento tres que consisten en la cantidad de ejercicios resueltos en cada nivel y devolver un número con el puntaje correspondiente. El puntaje se calcula de la siguiente forma:

// facil: 3 puntos
// normal: 5 puntos
// dificil: 10 puntos

// calcularPuntaje(3, 0, 0) // 9
// calcularPuntaje(0, 2, 1) // 20
// calcularPuntaje(5, 1, 2) // 40

// LOGICA!!!!
// (facil, normal, dificil)
// 1º crear función
// 2º función tome los tres valores facil, normal y dificil
// 3º devolver el puntaje total

// ------
// const calcularPuntaje = (facil, normal, dificil) => {
//      const resultadoFacil = facil * 3;
//      const resultadoNormal = normal * 5;
//      const resultadoDificil = dificil * 10;
//      const resultadoTotal = resultadoFacil + resultadoNormal + resultadoDificil;
//      return resultadoTotal;
// }

// console.log(calcularPuntaje(3, 0, 0)); // 9
// console.log(calcularPuntaje(0, 2, 1)); // 20
// console.log(calcularPuntaje(5, 1, 2)); // 40

// -------------------------------------------------------
// --------------------------------------------------------
// esPar(numero)
// Crear una función esPar que tome como argumento un número y devuelva true si dicho números es par o false si no lo es

// TIP: un número es par si divido por 2 el resto (o módulo) de esa operación es 0

// esPar(2) // true
// esPar(3) // false

// const esPar = (number) => { // si tenemos un solo parametro podemos no poner el parentesis
//      return number % 2 === 0; // UTILIZAR SIEMPRE PARA ESTAR SEGUROS QUE ES IGUAL EL 3 IGUALES!! A MENOS DE QUE LA SITUACIÓN REQUIERA 2 IGUALES!!
// }

// PUEDE APARECER ESTA MISMA FUNCION DE ESTA OTRA MANERA:
// const esPar = number => number % 2 === 0;

// console.log(esPar(2)); // true
// console.log(esPar(3)); // false

// -------------------------------------------------------
// --------------------------------------------------------
// esImpar(numero)
// Crear una función esImpar que tome como argumento un número y devuelva true si dicho números es impar o false si no lo es

// TIP: un número es impar si divido por 2 el resto (o módulo) de esa operación no es 0

// esImpar(2) // false
// esImpar(3) // true

// ******
// A COMPARACION DEL EJERCICIO ANTERIOR SOLO DEBEMOS HACER UN CAMBIO!!
// EN LUGAR DE QUE RETORNE ===, USAMOS !==
// ******

// const esPar = (number) => { // si tenemos un solo parametro podemos no poner el parentesis
//      return number % 2 !== 0; // UTILIZAR SIEMPRE PARA ESTAR SEGUROS QUE ES IGUAL EL 3 IGUALES!! A MENOS DE QUE LA SITUACIÓN REQUIERA 2 IGUALES!!
// }

// PUEDE APARECER ESTA MISMA FUNCION DE ESTA OTRA MANERA:
// const esPar = number => number % 2 === 0;

// console.log(esPar(2)); // false
// console.log(esPar(3)); // true



/////////////////////////////////////////////////////////////////////
// FUNCIONES NATIVAS o métodos
/////////////////////////////////////////////////////////////////////

// *******************************************
// STRINGS
// *******************************************

// const palabra = 'Perritos bonitos corriendo en el parque';

// ** length - funciona para ver la longuitud de una cadena
// console.log(palabra.length); // ESTO NOS CUENTA LA CANTIDAD DE CARACTERES INCLUYENDO LOS ESPACIOS!!

// ** toUpperCase - pasa todo nuestro texto a mayusculas
// console.log(palabra.toUpperCase()); // ALGUNOS METODOS NECESITAN PARENTESIS 

// ** toLowerCase - pasa toso el texto a minusculas
// console.log(palabra.toLowerCase());

// ** slice - nos permite cortar una seccion de nuestro texto 
// console.log(palabra.slice(1, 4))
// ((1) a partir de esa letra, (4) hasta esa letra inclusive)

// ** includes - nos permite buscar una palabra o una letra dentro de un texto o cadena, si no esta arroja FALSE, si esta TRUE
// console.log(palabra.includes('parque'));

// ** indexOf - busca en el texto la primer posicion logica en una palabra de un caracter en una cadena
// console.log(palabra.indexOf('P')); // 0 (cero) porque sigue la lógica de la primer letra

     // HAY 2 TIPOS DE CUENTAS EN LOS LENGUAJES DE PROGRAMACION:
     // - VISUAL: como sabemos contar, desde el num 1, ej: perrito sería p(1) e(2) r(3) r(4) i(5) t(6) o(7)
     // - LOGICA: siempre empezamos a contar desde 0, ej: perrito sería p(0) e(1) r(2) r(3) i(4) t(5) o(6)
     // TODO EN PROGRAMACION COMIENZA DESDE EL PUNTO 0
     // EXCEPTO LA FUNCION LENGTH QUE COMIENZA A CONTAR DESDE EL 1!!!!!!!

// ** lastIndexOf - busca en el texto la ultima posicion logica en una palabra de un caracter en una cadena
// console.log(palabra.lastIndexOf('o')); // 0 (cero) porque sigue la lógica de la primer letra
 
// ** replace - busca una palabra o letra y la reemplaza por lo que nosotros querramos. 
// console.log(palabra.replace('parque', 'pasto')); 
// console.log(palabra.replace('parque', '')); // Si no queremos que se reemplace por nada y solo borrarla, dejamos el string vacio

// ** toString - este metodo nos funciona para pasar un valor a tipo STRING
// const numeros = 123456789
// console.log(numeros); // la consola los arroja en color morado demostrando que es un numero
// console.log(numeros.toString()); // la consola los arroja en negro como STRING
// console.log(typeof numeros.toString()); // si le agregamos TYPEOF nos va a decir que es un STRING
// console.log(typeof numeros); // si le quitamos el toString nos va a decir que es un NUMBER

// *******************************************
// REGEX - EXPRESIONES REGULARES
// *******************************************

// No las vamos a ver ahora, no se tienen que aprender de memoria. Sirve para validar los campos que se completan en un formulario o un Input.

// *******************************************
// Metodos de NUMEROS
// *******************************************
// (todos estos metodos van a ser parte de un objeto llamado Math)
// Math siempre va con la M mayuscula!!

// ** min - nos retorna el numero menor de una serie que le pasamos
// console.log(Math.min(7, 23, 6, 8, 15,9)) // 6 ().min pertenece a Math)

// ** max - nos retorna el numero mayor de una serie que le pasamos
// console.log(Math.max(7, 23, 6, 8, 15,9)) // 23 

// ** round - nos retorna el numero redondeado mas cercano a los decimales al que le pasamos
// console.log(Math.round(2.3)) // 2 
// console.log(Math.round(2.5)) // 3

// ** ceil - nos retorna el numero redondeado siempre hacia arriba
// console.log(Math.ceil(2.1)) // 3
// console.log(Math.ceil(2.8)) // 3

// ** floor - nos retorna el numero redondeado siempre hacia abajo
// console.log(Math.floor(2.1)) // 2
// console.log(Math.floor(2.8)) // 2

// ** random - nos retorna el numero redondeado siempre hacia abajo
// console.log(Math.random()) // si lo dejamos vacio nos da un numero aleatorio, siempre como decimales
// console.log(Math.random() * 10) // si lo dejamos vacion, pero lo multiplicamos por 10, siempre nos va a dar un numero con decimales entre el 0 y el 10

// ** ceil/random - SI QUEREMOS QUE REDONDEE HACIA EL NUMERO MAYOR MAS CERCANO, TENEMOS QUE ENVOLVER EL Math.random, DENTRO DE UN Math.ceil
// console.log(Math.ceil(Math.random() * 10))

// ** isNan // NO ES UN METODO PARA JS

// ------------
// EJEMPLO DE SINTAXIS
// ------------

// Que se genere un numero aleatorio cada vez que presionamos un boton

// Ejemplo con alert para ver como funciona:
// const numeroAleatorio = () => {
//      alert('Se le dio click al boton') // ESTE ALERT NO SE VA A DISPARAR HASTA QUE EL USUARIO NO HAGA CLICK AL BOTON
// }

// const numeroAleatorio = () => {
//      document.write(Math.ceil(Math.random() * 100)); // documet.write hace desaparecer todo para que aparezca lo que queremos
// }

// SI QUEREMOS INCLUIR TEXTO
// const numeroAleatorio = () => {
//      document.write(`El número ganador de la lotería es el: ${Math.ceil(Math.random() * 100)}`); // documet.write hace desaparecer todo para que aparezca lo que queremos
// }


/////////////////////////////////////////////////////////////////////
// EJERCICIOS DE LA CLASE
/////////////////////////////////////////////////////////////////////

// obtenerDuracionEnSegundos(duracion)
// Crear una función obtenerDuracionEnSegundos que tome como argumento un string duracion con el formato (mm:ss) y la cantidad de segundos totales de la duración

// obtenerDuracionEnSegundos('00:33') // 33
// obtenerDuracionEnSegundos('01:05') // 65
// obtenerDuracionEnSegundos('10:42') // 642















