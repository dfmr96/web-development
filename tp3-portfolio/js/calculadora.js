function calcular() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("operation").value;
  let resultado;

  if (isNaN(num1) || isNaN(num2)) {
    resultado = "Ingresa números válidos";
  } else {
    switch(op) {
      case "sumar":
        resultado = num1 + num2;
        break;
      case "restar":
        resultado = num1 - num2;
        break;
      case "multiplicar":
        resultado = num1 * num2;
        break;
      case "dividir":
        resultado = num2 !== 0 ? (num1 / num2) : "Error: división por 0";
        break;
      default:
        resultado = "Operación inválida";
    }
  }

  document.getElementById("resultado").innerText = resultado;
}
