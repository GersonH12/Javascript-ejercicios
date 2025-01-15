// 7. Pide al usuario una frase y cuenta cuántas palabras tiene. 

let frase = prompt("Por favor, ingrese una frase:");

let palabras = frase.trim().split(" ");

let palabrasFiltradas = palabras.filter(palabra => palabra !== "");

let numeroDePalabras = palabrasFiltradas.length;

console.log(`La frase tiene ${numeroDePalabras} palabras.`);