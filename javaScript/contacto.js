// Validación de formulario
let nombre= document.getElementById('nombre');
let mail= document.getElementById('email');
let asunto= document.getElementById('assunto');
let mensaje= document.getElementById('mensaje');
let formulario= document.getElementById('form');
let parrafo= document.getElementById('errores');

formulario.addEventListener('submit',function(){
    let errores="";
    let regexEmail=/^\w+\.|\-|\w+\w+[@]\w+(\-{1}|\w)\w+[.]\w{2,3}/;
    let entrar= false;
    parrafo.innerHTML="";
    if(nombre.value.length==0||nombre.value.length== null){
        errores+='Debes proporcionar un nombre <br>'
        entrar= true
    }
    if(!regexEmail.test(mail.value)){
        errores+='El email proporcionado no es válido <br>'
        entrar=true
    }
    if(asunto.value.length==0||asunto.value.length== null){
        errores+='Debes ingresar un asunto <br>'
        entrar= true
    }
    if(mensaje.value.length==0||mensaje.value.length== null){
        errores+='Por favor ingresa tu mensaje <br>'
        entrar=true
    }
    if(entrar=true){
        parrafo.innerHTML=errores;
    }else{
        parrafo.innerHTML='Enviado';
    }
})

