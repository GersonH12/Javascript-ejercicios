// 5. Dado un array de números [15, 42, 3, 18, 90, 67, 29], escribe un programa que encuentre e 
// imprima el segundo número más grande del array.

const numeros = [15, 42, 3, 18, 90, 67, 29];

if (numeros.length < 2) {
    console.log("El array debe tener al menos dos numeros");
} else {
    const numerosOrdenados = [...numeros].sort((a,b) => b - a);

    const segundoMasGrande = numerosOrdenados[1];

    console.log(`El segundo numero mas grande es : ${segundoMasGrande}`);
}