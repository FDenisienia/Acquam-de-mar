const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const provincia = document.getElementById('provincia');
const ciudad = document.getElementById('ciudad');
const consulta = document.getElementById('consulta');
const formulario = document.getElementById('formulario');
const formularioBtn = document.getElementById('formularioBtn');

const validarFormulario = {
    nombre: /^[a-zA-ZÀ-ÿ\s]+$/,
    apellido: /^[a-zA-Z]+$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/
}

function validarForm(e){
    // Validar nombre

    if(validarFormulario.nombre.test(nombre.value)){
        nombre.classList.remove('is-invalid')
        nombre.classList.add('is-valid') 
    } else {
        nombre.classList.remove('is-valid')
        nombre.classList.add('is-invalid')
        return 0
    } 

    // Validar apellido

    if(validarFormulario.apellido.test(apellido.value)){
        apellido.classList.remove('is-invalid')
        apellido.classList.add('is-valid') 
    } else {
        apellido.classList.remove('is-valid')
        apellido.classList.add('is-invalid')
        return 0
    } 

    // Validar email
    
    if(validarFormulario.email.test(email.value)){
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
    }
    else {
        email.classList.remove('is-valid')
        email.classList.add('is-invalid')
        return 0
    } 

    // Validar telefono

    if(validarFormulario.telefono.test(telefono.value)){
        telefono.classList.remove('is-invalid')
        telefono.classList.add('is-valid')
    }
    else {
        telefono.classList.remove('is-valid')
        telefono.classList.add('is-invalid')
        return 0
    } 


    // Validar provincio 

    if(validarFormulario.nombre.test(provincia.value)){
        provincia.classList.remove('is-invalid')
        provincia.classList.add('is-valid')
    }
    else {
        provincia.classList.remove('is-valid')
        provincia.classList.add('is-invalid')
        return 0
    } 

    // Validar Ciudad

    if(validarFormulario.nombre.test(ciudad.value)){
        ciudad.classList.remove('is-invalid')
        ciudad.classList.add('is-valid')
    }
    else {
        ciudad.classList.remove('is-valid')
        ciudad.classList.add('is-invalid')
        return 0
    } 

    // Validar consulta

    if(consulta.value.length > 0) {
        consulta.classList.remove('is-invalid')
        consulta.classList.add('is-valid')
    } else {
        consulta.classList.remove('is-valid')
        consulta.classList.add('is-invalid')
        return 0
    }



    formulario.submit();
}