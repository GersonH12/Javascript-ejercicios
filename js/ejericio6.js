// 6. Escribe un programa que solicite al usuario un número que represente grados Celsius y 
// conviértelo a Fahrenheit utilizando la fórmula: F = (C × 9/5) + 32. 

const celsius = parseFloat(prompt("Ingresa un numero en grados Celcius"));

if (isNaN(celsius)) {
    console,log("Por favor, ingresa un número válido");
}else {
    const Fahrenheit = (celsius * 9/5) + 32;

    console.log(`${celsius} grados Celsius son equivalentes a ${Fahrenheit.toFixed(2)} grados Fahrenheit.`);
}