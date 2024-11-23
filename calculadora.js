const prompt = require('prompt-sync')(); 

function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: División por cero";
        }
        return num1 / num2;
    } else {
        return "Operación no válida";
    }
}

while (true) {
    // Solicitar los números y la operación al usuario
    let num1 = parseFloat(prompt("Ingrese el primer número: "));
    let num2 = parseFloat(prompt("Ingrese el segundo número: "));
    let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division) o 'salir' para terminar: ").toLowerCase();

    if (operacion === "salir") {
        console.log("¡Gracias por usar la calculadora! ¡Hasta luego!");
        break;
    }

    let resultado = realizarOperacion(num1, num2, operacion);
    console.log(`El resultado de la ${operacion} es: ${resultado}`);
}
