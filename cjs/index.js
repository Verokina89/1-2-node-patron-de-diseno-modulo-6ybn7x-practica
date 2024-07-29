//Esta es la manera COMMON (de toda la vida). Hay que hacer un REQUIRE(requerirlo)

//aqui vamos a importar la funcion para poder utilizarla.--> la guardamos en una constante...indicamos con el require donde tiene que recogerla
//1. const sum = require('./calculate.js'); 

//hacemos esta funcion y le pasamos los argumentos a 3, 5 -->
//ej1 console.log(sum(3,5));
//ej2 console.log(sum(4,5)); // de este modo estamos importando la funcion con el require.

//--> ahora tendriamos que hacer un destructurin.
const {sum, multiply} = require('./calculate.js');
console.log(sum(4,5));
console.log(multiply(4,5));

