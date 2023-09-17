// Solicitar el nombre al usuario utilizando prompt
var nombre = prompt("Por favor, introduce tu nombre:");

// Comprobar si el usuario proporcionó un nombre

if (nombre !== null && nombre !== "") {
   alert("¡Hola, " + nombre + "! Bienvenido a nuestro sitio web.")
} else {
    alert("No proporcionaste un nombre. ¡Hola, visitante!");
}
console.log("Nombre del usuario: " + nombre);

