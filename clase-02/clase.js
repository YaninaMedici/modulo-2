// alert('funciona') PARA PROBAR SI ANDA 

// FUNCIONES DECLARADAS********* // PREFERIBLE USAR ESTA!!!

// function suma(){
//     return 3 + 3;
// }
// console.log(suma())

// FUNCIONES EXPRESADAS***********

const sumaExpresada = function(){
    return 4 + 4;
}

// console.log(sumaExpresada); MUESTRA LA FUNCION
// console.log(sumaExpresada()); MUESTRA EL RESULTADO

// -----
// const resultadoDeSumaExpresada = sumaExpresada ();
// document.write(resultadoDeSumaExpresada)
// console.log(sumaExpresada());
// -----

// FUNCION FLECHA O ARROW FUNCTION************
// Se pueden hacer líneas de código más chicas!!

const sumaFlecha = () => {
    return 5 + 5;
}

console.log(sumaFlecha);
document.write(sumaFlecha());