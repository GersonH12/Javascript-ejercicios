// 9. Dado un array de números [8, 15, 23, 42, 16, 4, 10, 7, 19], escribe un programa que recorra 
// el array y sume solo los elementos que están en posiciones pares (índices 0, 2, 4, etc.).

let numeros =  [8, 15, 23, 42, 16, 4, 10, 7, 19];

let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    if ( i % 2 === 0) {
        suma += numeros[i];
    }
}

console.log("La suma de los elementos en posiciones pares es:", suma);