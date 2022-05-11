// // PRUEBA PARA EMPEZAR A TRABAJAR:

// MENSAJES PARA EL USAURIO
// alert("Tu Js esta linkeado correctamente!!");
// confirm(¿eres mayor de edad?) - PERMITE PONER ACEPTAR O CANCELAR
// prompt('¿Cuál es tu nombre?') - PERMITE QUE EL USUARIO COMPLETE EL DATO
//  - para que se guarde este dato tene
//    const nombreDeUsuario = prompt('¿Cuál es tu nombre?')
// console.log(nombreDelUsuario)

// CON EL + SE CONCATENA EL TEXTO!!
// document.write( "Hola" + " " + "Bienvenido a nuestro sitio web")
// ((((como ponemos en el centro el nombre del usuario?????)))):
// document.write( "Hola" + " " + nombreDelUsuario  + " " + "Bienvenido a nuestro sitio web")
// --
// document.write(`Hola, ${nombreDelUsuario} Bienvenidos a nuestro sitio`)
// `` TODO LO QUE ESTÉ DENTRO DE ESTAS COMILLAS ES CONSIDERADO TEXTO ``
// ES PREFERIBLE ESTA PORQUE NO TENEMOS QUE GENERAR ESPACIOS!!!!

// --------------------------------------
// COHERCIÓN DE TIPO DE DATOS

// - FORMA IMPLICITA
// const num1 = 2;
// let num2 = '2';
// console.log(typeof(Number(num2) + num1));
// console.log( Number(num2) + num1);

// console.log(num1 + num2);

// ****
// - FORMA EXPLICITA
// const name = 'Jonh';
// const edad = '53';
// const estudiante = false;

// console.log(typeof estudiante)


// TYPEOF NOS AYUDA A AVERIGUAR LO QUE NO SABEMOS!!! QUE TIPO DE DATO ES

// --------------------------------------
// var nombre = "Jonh";
// var edad = 35;
// var estudiante = false;

// // asignamos un valor para la variable
// // BUENAS PRÁCTICAS:
// // - cerrar con ; pero si no se hace no pasa. 
// // - que el nombre de la variable sea MUY DESCRIPTIVA
// // - no dejar espacios en las variables: "nombre completo" NO // "nombrecompleto" SI
// // IGUAL ES BUENA PRÁCTICA!! USARLO!!!
// // - comillas simples y dobles, si se usan en una misma línea, debemos usar una fuera y otra dentro para que no arroje error:
// // Ej: "Yanina 'Yani' Medici" o 'Yanina "Yani" Medici'
// //  

// DESDE LA WEB, DAR INSPECCIONAR / CONSOLA

// console.log(edad)
// // sirve para encontrar errores, en la consola arroja el error y nos dice en que línea está


// // *************
// // VAR
// // No podemos usar varias veces la misma variable:
// // Ej: 
// // var nombrecompleto = "Yanina":
// // var nombrecompleto = "Yani";
// // ---
// // Si podemos usar la variable y luego reasignar
// // Ej:
// // var nombrecompleto = "Yanina";
// // nombrecompleto = "Yani";
// // // console.log(nombrecompleto)


// // LET 
// // No se puede reasignar, sólo cambiarle el valor, las podemos redefinir
// // Ej:
// // let nombrecompleto = "Yanina";


// // CONST - Con esto logramos que no pierda la variable inicial, nadie más va a poder usar una var o una let
// // const nombrecompleto = "Ivana";
// // console.log(nombrecompleto)

// // const nombrecompleto = "Cecilia"

// // RECOMENDACIÓN!!!!!!!!!!!!!!!!!!
// // HACER TODO UNA CONSTANTE!!! si necesitamos cambiar algo particular usamos una let para eso particular.

// // JAMAS USAR VAT!!!!!!!!!!!

// // Resumen Ivana:
// // * const: lo usamos para declarar una variable que se va a mantener constante, no la vamos a cambiar
// // * let: lo usamos para declarar una variable que desp. se puede cambiar
// // declarar es cuando la creamos
// // * inicializar es cuando la declaramos y además le agregamos = y el valor que tiene
// // * asignar es cuando le damos un valor (después del signo igual). Reasignar es cuando a la variable le cambiamos el valor
// // * ejemplo: const nombre = "Ivana" (no se puede volver a declarar, ni inicializar ni cambiar su valor)
// // ***************


// DECLARACIÓN M{ULTIPLE - No se suele usar
// (sólo nos ahorramos la variable)
// var nombre1 = "Jonh"
//     nombre2 = "Yanina"
//     nombre3 = "Lucila"
// ----------------------------------

// ** TIPOS DE DATOS PRIMITIVOS:

// 1) TIPO DE DATO STRING (porque tiene comillas simples o dobles)
// const nombre = "Jonh"
// const apellido = 'Parra'
// const edad-jorge = "35"
// const es-de-ada = "false"

// 2) TIPO DE DATO Number (para guardar edad, y distintos números - si tiene comillas es un STRING)
// const edad = 35
// const numero-de-departamento = 111
// const edad-jorge = "35" - ES STRING POR LAS COMILLAS!!!!!!

// 3) TIPO DE DATO BOLLEAN (solo refleja un falso/verdadero - encendido/apagado - etc)
// const estudiante = false
// const hombre = true
// const es-de-ada = "false" - ES STRING POR LAS COMILLAS!!!!!!!

// ** VALORES NULOS

// let desconocido = undefined (declaramos la variable pero no definimos o no sabemos el valor)

// const no-existe = null (sabemos que el valor NO EXISTE)

// const infinito = Infinity (podemos crear un inifito positivo o negativo)

// const no-es-un-numero = NaN (para ver si se puede hacer o no una suma)
// Ej:
// console.log(9 + 2) - la consola dice que es 11
// console.log(9 * 'Hola') - la consola dice que es un NaN // ESTO NOS INDICA SI ES POSIBLE REALIZAR LA CUENTA O NO

// ----------------------------------

// TEMPLATE STRING
// Si no sabemos el nombre del usuario:


// const 

// --------------

// OPERADORES

// ** Suma
// console.log( 3 + 3);

// **resta
// console.log(9 - '5');

// **multiplicación
// console.log(8 * 8);

// **división
// console.log(9 / 3); DA LOS DECIMALES

// **modulo / resto
// console.log(5 % 2) MUESTRA CUANTO ES EL RESTO, CUANTAS VECES ENTRA EL 2 EN EL 5

// const num1 = 3;
// const num2 = 3;
// const resultadoSuma = num1 + num2;

// ----

// let incremento = 0;

// incremento++;

// incremento = incremento + 1;

// console.log(incremento)

// **decremento
// let decremento = 10;

// decremento
// TEXTO PENDIENTE - VER EL CODIGOOOOOOOOOOO











