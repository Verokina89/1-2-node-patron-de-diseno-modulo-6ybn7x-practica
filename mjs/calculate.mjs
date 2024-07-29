//De este modo creando otra carpeta llamada MJS contendra otros js y trabajaremos con modulos. cambia la manera de importar ya que trabajamos con otros modulos.

function sum(a, b) {
  return a + b
}

function multiply(a, b) {
  return a * b
}


//1.le decimos que por defecto va a exporta solamente sum -->
//export default sum

//2.para exportar ambos (recordar: se hace un destructurin)
export {sum, multiply};




// module.exports = {
//   sum,
//   multiply,
// };