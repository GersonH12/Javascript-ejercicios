// 11. Crea un programa que solicite la fecha de nacimiento del usuario (en formato YYYY-MM
//     DD) y calcule su edad en días. 


let fechaNacimiento = prompt("Introduce tu fecha de nacimiento (YYYY-MM-DD)");

let fechaNacimientoDate = new Date(fechaNacimiento);

let fechaActual = new Date();

let diferenciaTiempo = fechaActual - fechaNacimientoDate;

let edadEnDias = diferenciaTiempo / (1000 * 60 * 60 *24);

alert("Tu edad en dias es:" + Math.floor(edadEnDias));