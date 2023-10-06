// Base de datos
const baseDeDatos=
   [
    { nombre:'',
    apellido:'',
    email:''
},
];
// Validación de formulario
let formulario= document.querySelector("#form");
formulario.addEventListener('submit', function(event){
   let errores=[];
   let inputNombre = document.querySelector("#nombre");
   let inputApellido= document.querySelector("#apellido");
   let inputMail=document.querySelector("#email");
   let regexEmail=/^\w+\.|\-|\w+\w+[@]\w+(\-{1}|\w)\w+[.]\w{2,3}/;
   let inputAsunto= document.querySelector("#asunto");
   let mensaje= document.querySelector("#mensaje");
   if (inputNombre.value == "" ||inputNombre.value.length===0||inputNombre.value==null){
    errores.push("Debes proporcionar un nombre")
   }else if( inputNombre.value.length < 3){
    errores.push("El campo nombre debe tener al menos 3 caracteres");
   }
   if (inputApellido.value == "" ||inputApellido.value.length===0||inputApellido.value==null){
    errores.push("Debes proporcionar un apellido");
   if (!regexEmail.test(inputMail.value)){
    errores.push("Debes proporcionar una dirección de email válida");
   }
   if(inputAsunto.value==""||inputAsunto.value.length===0||inputAsunto.value==null){
    errores.push("Por favor indica un asunto");
   }
   if(mensaje.value==""||mensaje.value.length===0||mensaje.value==null){
    errores.push("Por favor dejános tu mensaje");
   }
   if (errores.length > 0) {
    event.preventDefault();
   }
   
   let ulErrores = document.querySelector('div.errores ul');
   for(let i = 0; i < errores.length; i++){
    ulErrores.innerHTML += '<li> ' + errores[i] + '</li>'}

    if(errores.length===0){
        baseDeDatos.push({
            nombre:inputNombre.value,
            apellido:inputApellido.value,
            email:inputMail.value
        });
    }
}
});



// Almacenar base  de datos en local storage
localStorage.setItem('baseDeDatos',JSON.stringify(baseDeDatos));




