// Solicitar el nombre al usuario utilizando prompt
var nombre = prompt("Por favor, introduce tu nombre:");

// Comprobar si el usuario proporcionó un nombre

if (nombre !== null && nombre !== "") {
   alert("¡Hola, " + nombre + "! Bienvenido a nuestro sitio web.")
} else {
    alert("No proporcionaste un nombre. ¡Hola, visitante!");
}
console.log("Nombre del usuario: " + nombre);


// Base de datos de libros cargados en la página
const libros=[
    {nombre:'Rayuela',Autor:'Julio Cortazar',Genéro:'Cuento'},
    {nombre:'Una misma noche',Autor:'Leopoldo Brizuela',Genéro:'Cuento'},
    {nombre:'El jorobadito',Autor:'Robert Arlt',Genéro:'Cuento'},
    {nombre:'Casa tomada',Autor:'Julio Cortazar',Genéro:'Cuento'},
    {nombre:'Niños',Autor:'Selva Almada',Genéro:'Cuento'},
    {nombre:'Ficciones',Autor:'Jorge Luis Borges',Genéro:'Cuento'},
    {nombre:'Los trenes matan a los autos',Autor:'Roberto Fontanarrosa',Genéro:'Cuento'},
    {nombre:'Amigos por el viento',Autor:'Liliana Bodoc',Genéro:'Cuento'},
    {nombre:'El chico sucio',Autor:'Mariana Enriquez',Genéro:'Cuento'},
    {nombre:'El viajero del siglo',Autor:'Andrés Neuman',Género:'Novela'},
    {nombre:'El beso de la mujer araña',Autor:'Manuel Puig',Género:'Novela'},
    {nombre:'Chicas muertas',Autor:'Selva Almada',Género:'Novela'},
    {nombre:'La uruguaya',Autor:'Pedro Mairal',Género:'Novela'},
    {nombre:'Muñecas',Autor:'Ariel Magnus',Género:'Novela'},
    {nombre:'Distancia de rescate',Autor:'Samantha Schweblin',Género:'Novela'},
    {nombre:'Nuestra parte de noche',Autor:'Mariana Enriquez',Género:'Novela'},
    {nombre:'Dormir al sol',Autor:'Adolfo Bioy Casares',Género:'Novela'},
    {nombre:'Pasion y traicion',Autor:'Florencia Canale',Género:'Novela'},
    {nombre:'Inframundo',Autor:'Pep Brocal',Género:'Comic'},
    {nombre:'Siesta',Autor:'Feli Punch',Género:'Comic'},
    {nombre:'Campamento negacion',Autor:'Paula Sosa Holt',Género:'Comic'},
    {nombre:'Buenos Aires en pelotas',Autor:'Gustavo Sala',Género:'Comic'},
    {nombre:'Dusko',Autor:'Pablo Vigo',Género:'Comic'},
    {nombre:'Me prometiste oscuridad',Autor:'Damian Conelly',Género:'Comic'},
    {nombre:'Femimutancia',Autor:'Julia Ines Mamone',Género:'Comic'},
    {nombre:'Llamarada',Autor:'Jorge Gonzalez',Género:'Comic'},
    {nombre:'Cuentos inciertos',Autor:'Mariana Ruiz Johnson/Alejandro Farías',Género:'Comic'},
]
// Almacenar base  de datos en local storage
localStorage.setItem('baseDeDatos',JSON.stringify(libros));


