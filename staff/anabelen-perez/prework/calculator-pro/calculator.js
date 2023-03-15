const Calculator = () => {

    let num1 = +prompt("Escribe el primer número:");
    let num2 = +prompt("Escribe el segundo número:");
    let operation = prompt("¿Quieres sumar, restar, multiplicar o dividir?")
    let result;

    if (operation === "sumar") {
            result = num1 + num2;
        } else if (operation === "restar") {
            result = num1 - num2;
        } else if (operation === "multiplicar") {
            result = num1 * num2;
        } else if (operation === "dividir") {
            result = num1 / num2;
            
           }

	return(result);
}
    
Calculator();