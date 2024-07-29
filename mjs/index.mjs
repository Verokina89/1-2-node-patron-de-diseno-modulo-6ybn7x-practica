//1. de este modo estamos llamando a sum (recordar que estamos en la misma carpeta)-->
// import sum from './calculate.mjs'
// console.log(sum(4,5));

//2. importar ambos (recordar hacer destructurin).
import {sum, multiply} from './calculate.mjs'
console.log(sum(4, 5));
console.log(multiply(5, 5));

//--^hemos generado un patron de diseño modular