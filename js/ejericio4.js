// 4. Solicita al usuario un número entero y calcula la multiplicación de todos los números 
// desde 1 hasta ese número.

const numero = parseInt(prompt("Ingresa un número entero:"));

let resultado = 1;

if (numero >= 1) {

    for (let i = 1; i <= numero; i++) {
        resultado *= i;
}
console.log(`la multiplicación de ${numero} es: ${resultado}`);

}else{
    console.log("Por favor, ingresa un numero entero mayor o igual a 1");
}
