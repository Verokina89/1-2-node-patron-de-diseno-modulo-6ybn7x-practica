//Estamos haciendo el COMMONJS(el de toda la vida)

function sum(a, b) {
  return a + b
}
// propiedad  igual al nombre de la funcion.
// module.exports = sum --^

//--> con esta funcion y la anterior podemos exportar ambas a la vez
function multiply(a, b) {
  return a * b
}

//y se seria de la siguiente manera.
module.exports = {
  sum,
  multiply,
};
